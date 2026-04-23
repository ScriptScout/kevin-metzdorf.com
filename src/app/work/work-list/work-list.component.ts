import { Component, OnDestroy, OnInit, AfterViewInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { WorkCaseItem, WorkService } from '../work.service';
import { SeoService } from '../../seo.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-work-list',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit, AfterViewInit, OnDestroy {
  cases: WorkCaseItem[] = [];
  @ViewChild('listRef') listRef?: ElementRef<HTMLElement>;
  private listObserver?: IntersectionObserver;
  private listLogged = false;
  private jsonLdEl?: HTMLScriptElement;

  constructor(
    private work: WorkService,
    private seo: SeoService,
    private analytics: AngularFireAnalytics,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Arbeiten | Kevin Metzdorf – Shopify Developer',
      description: 'Ausgewählte Shopify‑Projekte: Migration, Performance‑Sprints, Technical Rescue. (Platzhalter)',
      canonical: 'https://kevin-metzdorf.com/work'
    });

    // Inject BreadcrumbList JSON-LD (Home → Arbeiten)
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
        }
      ]
    } as const;
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
    this.jsonLdEl = script;

    this.work.list().subscribe(items => this.cases = items);
  }

  ngAfterViewInit(): void {
    const el = this.listRef?.nativeElement;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    this.listObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.listLogged) {
          this.listLogged = true;
          this.analytics.logEvent('work_list_view', { event_category: 'engagement' });
          this.listObserver?.disconnect();
        }
      });
    }, { threshold: 0.25 });

    this.listObserver.observe(el);
  }

  ngOnDestroy(): void {
    this.listObserver?.disconnect();
  }

  openCase(slug: string): void {
    this.analytics.logEvent('work_case_open', {
      event_category: 'engagement',
      case_slug: slug
    });
    this.router.navigate(['/work', slug]);
  }
}
