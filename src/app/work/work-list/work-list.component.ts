import { Component, OnDestroy, OnInit, AfterViewInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { WorkCaseItem, WorkService } from '../work.service';
import { SeoService } from '../../seo.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-work-list',
  standalone: true,
  imports: [CommonModule, RevealDirective, TranslateModule],
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit, AfterViewInit, OnDestroy {
  cases: WorkCaseItem[] = [];
  @ViewChild('listRef') listRef?: ElementRef<HTMLElement>;
  private listObserver?: IntersectionObserver;
  private listLogged = false;
  private jsonLdEl?: HTMLScriptElement;
  private destroy$ = new Subject<void>();

  constructor(
    private work: WorkService,
    private seo: SeoService,
    private analytics: AngularFireAnalytics,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private langService: LanguageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(
      takeUntil(this.destroy$),
      switchMap(() => {
        this.updateSeoAndBreadcrumbs();
        return this.work.list();
      })
    ).subscribe(items => this.cases = items);
  }

  private updateSeoAndBreadcrumbs(): void {
    this.translate.get(['NAV.WORK', 'CASE_TEASER.SUB']).subscribe(t => {
      const workTitle = t['NAV.WORK'];
      this.seo.update({
        title: `${workTitle} | Kevin Metzdorf – Shopify Developer`,
        description: t['CASE_TEASER.SUB'],
        canonical: 'https://kevin-metzdorf.com/work'
      });

      this.injectBreadcrumbJsonLd(workTitle);
    });
  }

  private injectBreadcrumbJsonLd(workTitle: string): void {
    if (this.jsonLdEl) {
      this.document.head.removeChild(this.jsonLdEl);
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': this.langService.currentLang === 'de' ? 'Startseite' : 'Home',
          'item': 'https://kevin-metzdorf.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': workTitle,
          'item': 'https://kevin-metzdorf.com/work'
        }
      ]
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
    this.jsonLdEl = script;
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
    this.destroy$.next();
    this.destroy$.complete();
  }

  openCase(slug: string): void {
    this.analytics.logEvent('work_case_open', {
      event_category: 'engagement',
      case_slug: slug
    });
    this.router.navigate(['/work', slug]);
  }
}
