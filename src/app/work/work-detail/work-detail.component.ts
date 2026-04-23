import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { CommonModule, DOCUMENT } from '@angular/common';
import { WorkCaseItem, WorkService } from '../work.service';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit, OnDestroy {
  data?: WorkCaseItem;
  notFound = false;
  @ViewChild('headerRef') headerRef?: ElementRef<HTMLElement>;
  private headerObserver?: IntersectionObserver;
  private jsonLdEl?: HTMLScriptElement;

  constructor(
    private route: ActivatedRoute,
    private work: WorkService,
    private seo: SeoService,
    private analytics: AngularFireAnalytics,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.work.getBySlug(slug).subscribe(item => {
      if (!item) {
        this.notFound = true;
        this.seo.update({
          title: 'Fallstudie nicht gefunden | Arbeiten | Kevin Metzdorf',
          description: 'Diese Fallstudie existiert nicht (mehr).',
          canonical: `https://kevin-metzdorf.com/work/${slug}`
        });
        return;
      }

      this.data = item;
      this.seo.update({
        title: `${item.title} | Arbeiten | Kevin Metzdorf`,
        description: item.summary || 'Fallstudie – Platzhalter',
        canonical: `https://kevin-metzdorf.com/work/${item.slug}`
      });
      this.injectBreadcrumbJsonLd(item);
      // Defer IO observer setup slightly to allow view init
      setTimeout(() => this.setupHeaderObserver(), 0);
    });
  }

  ngOnDestroy(): void {
    this.headerObserver?.disconnect();
    if (this.jsonLdEl) {
      this.document.head.removeChild(this.jsonLdEl);
    }
  }

  private setupHeaderObserver(): void {
    const el = this.headerRef?.nativeElement;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    this.headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.analytics.logEvent('work_detail_view', {
            event_category: 'engagement',
            case_slug: this.data?.slug
          });
          this.headerObserver?.disconnect();
        }
      });
    }, { threshold: 0.3 });

    this.headerObserver.observe(el);
  }

  private injectBreadcrumbJsonLd(item: WorkCaseItem): void {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Startseite',
          'item': 'https://kevin-metzdorf.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Arbeiten',
          'item': 'https://kevin-metzdorf.com/work'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': item.title,
          'item': `https://kevin-metzdorf.com/work/${item.slug}`
        }
      ]
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
    this.jsonLdEl = script;
  }
}
