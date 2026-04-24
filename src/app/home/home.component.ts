import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('kpiList') kpiList?: ElementRef<HTMLUListElement>;
  @ViewChild('outcomesRef') outcomesRef?: ElementRef<HTMLElement>;
  @ViewChild('caseTeaserRef') caseTeaserRef?: ElementRef<HTMLElement>;
  @ViewChild('processRef') processRef?: ElementRef<HTMLElement>;
  @ViewChild('techStackRef') techStackRef?: ElementRef<HTMLElement>;
  @ViewChild('testimonialsRef') testimonialsRef?: ElementRef<HTMLElement>;
  @ViewChild('blogTeaserRef') blogTeaserRef?: ElementRef<HTMLElement>;
  @ViewChild('faqRef') faqRef?: ElementRef<HTMLElement>;
  @ViewChild('finalCtaRef') finalCtaRef?: ElementRef<HTMLElement>;

  private kpiObserver?: IntersectionObserver;
  private outcomesObserver?: IntersectionObserver;
  private caseTeaserObserver?: IntersectionObserver;
  private processObserver?: IntersectionObserver;
  private techStackObserver?: IntersectionObserver;
  private testimonialsObserver?: IntersectionObserver;
  private blogTeaserObserver?: IntersectionObserver;
  private faqObserver?: IntersectionObserver;
  private finalCtaObserver?: IntersectionObserver;

  private kpiLogged = false;
  private outcomesLogged = false;
  private caseTeaserLogged = false;
  private processLogged = false;
  private techStackLogged = false;
  private testimonialsLogged = false;
  private blogTeaserLogged = false;
  private faqLogged = false;
  private finalCtaLogged = false;

  // Expanded state per testimonial (index-based)
  expandedTestimonials: boolean[] = [false, false, false];

  constructor(private analytics: AngularFireAnalytics) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    // KPI list view tracking
    const kpiEl = this.kpiList?.nativeElement;
    if (kpiEl) {
      this.kpiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.kpiLogged) {
            this.kpiLogged = true;
            this.analytics.logEvent('hero_kpi_view', {
              event_category: 'engagement',
              event_label: 'hero_kpi_list'
            });
            this.kpiObserver?.disconnect();
          }
        });
      }, { root: null, threshold: 0.35, rootMargin: '0px 0px -15% 0px' });

      this.kpiObserver.observe(kpiEl);
    }

    // Outcomes section view tracking
    const outcomesEl = this.outcomesRef?.nativeElement;
    if (outcomesEl) {
      this.outcomesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.outcomesLogged) {
            this.outcomesLogged = true;
            this.analytics.logEvent('outcomes_view', {
              event_category: 'engagement',
              event_label: 'home_outcomes'
            });
            this.outcomesObserver?.disconnect();
          }
        });
      }, { root: null, threshold: 0.3 });

      this.outcomesObserver.observe(outcomesEl);
    }

    // Case teaser section view tracking
    const caseTeaserEl = this.caseTeaserRef?.nativeElement;
    if (caseTeaserEl) {
      this.caseTeaserObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.caseTeaserLogged) {
            this.caseTeaserLogged = true;
            this.analytics.logEvent('case_teaser_view', {
              event_category: 'engagement',
              event_label: 'home_case_teaser'
            });
            this.caseTeaserObserver?.disconnect();
          }
        });
      }, { root: null, threshold: 0.3 });

      this.caseTeaserObserver.observe(caseTeaserEl);
    }

    // Process section view tracking
    const processEl = this.processRef?.nativeElement;
    if (processEl) {
      this.processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.processLogged) {
            this.processLogged = true;
            this.analytics.logEvent('process_view', {
              event_category: 'engagement',
              event_label: 'home_process'
            });
            this.processObserver?.disconnect();
          }
        });
      }, { root: null, threshold: 0.3 });

      this.processObserver.observe(processEl);
    }

    // Tech stack section view tracking
    const techEl = this.techStackRef?.nativeElement;
    if (techEl) {
      this.techStackObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.techStackLogged) {
            this.techStackLogged = true;
            this.analytics.logEvent('tech_stack_view', {
              event_category: 'engagement',
              event_label: 'home_tech_stack'
            });
            this.techStackObserver?.disconnect();
          }
        });
      }, { root: null, threshold: 0.3 });

      this.techStackObserver.observe(techEl);
    }

    // Testimonials section view tracking
    const testiEl = this.testimonialsRef?.nativeElement;
    if (testiEl) {
      this.testimonialsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.testimonialsLogged) {
            this.testimonialsLogged = true;
            this.analytics.logEvent('testimonials_view', {
              event_category: 'engagement',
              event_label: 'home_testimonials'
            });
            this.testimonialsObserver?.disconnect();
          }
        });
      }, { root: null, threshold: 0.3 });

      this.testimonialsObserver.observe(testiEl);
    }

    // Blog teaser section view tracking
    const blogEl = this.blogTeaserRef?.nativeElement;
    if (blogEl) {
      this.blogTeaserObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.blogTeaserLogged) {
            this.blogTeaserLogged = true;
            this.analytics.logEvent('blog_teaser_view', {
              event_category: 'engagement',
              event_label: 'home_blog_teaser'
            });
            this.blogTeaserObserver?.disconnect();
          }
        });
      }, { root: null, threshold: 0.3 });

      this.blogTeaserObserver.observe(blogEl);
    }

    // FAQ section view tracking
    const faqEl = this.faqRef?.nativeElement;
    if (faqEl) {
      this.faqObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.faqLogged) {
            this.faqLogged = true;
            this.analytics.logEvent('faq_view', {
              event_category: 'engagement',
              event_label: 'home_faq'
            });
            this.faqObserver?.disconnect();
          }
        });
      }, { root: null, threshold: 0.2 });

      this.faqObserver.observe(faqEl);
    }

    // Final CTA section view tracking
    const finalEl = this.finalCtaRef?.nativeElement;
    if (finalEl) {
      this.finalCtaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.finalCtaLogged) {
            this.finalCtaLogged = true;
            this.analytics.logEvent('final_cta_view', {
              event_category: 'engagement',
              event_label: 'home_final_cta'
            });
            this.finalCtaObserver?.disconnect();
          }
        });
      }, { root: null, threshold: 0.3 });

      this.finalCtaObserver.observe(finalEl);
    }
  }

  ngOnDestroy(): void {
    this.kpiObserver?.disconnect();
    this.outcomesObserver?.disconnect();
    this.caseTeaserObserver?.disconnect();
    this.processObserver?.disconnect();
    this.techStackObserver?.disconnect();
    this.testimonialsObserver?.disconnect();
    this.blogTeaserObserver?.disconnect();
    this.faqObserver?.disconnect();
    this.finalCtaObserver?.disconnect();
  }

  heroPrimaryClick(): void {
    this.analytics.logEvent('hero_primary_click', {
      event_category: 'engagement',
      event_label: 'hero_primary_cta'
    });
  }

  heroSecondaryClick(): void {
    this.analytics.logEvent('hero_secondary_click', {
      event_category: 'engagement',
      event_label: 'hero_secondary_cta'
    });
  }

  serviceCardClick(service: string): void {
    this.analytics.logEvent('service_card_click', {
      event_category: 'engagement',
      service_name: service,
      location: 'home_services_teaser'
    });
  }

  outcomeCardClick(outcome: string): void {
    this.analytics.logEvent('outcome_card_click', {
      event_category: 'engagement',
      outcome_name: outcome,
      location: 'home_outcomes'
    });
  }

  caseTeaserClick(caseName: string): void {
    this.analytics.logEvent('case_teaser_click', {
      event_category: 'engagement',
      case_name: caseName,
      location: 'home_case_teaser'
    });
  }

  processStepClick(step: string): void {
    this.analytics.logEvent('process_step_click', {
      event_category: 'engagement',
      step_name: step,
      location: 'home_process'
    });
  }

  blogCardClick(articleTitle: string): void {
    this.analytics.logEvent('blog_card_click', {
      event_category: 'engagement',
      article_title: articleTitle,
      location: 'home_blog_teaser'
    });
  }

  faqToggle(question: string, event: Event): void {
    const isOpen = (event.target as HTMLDetailsElement)?.open;
    this.analytics.logEvent('faq_toggle', {
      event_category: 'engagement',
      question,
      state: isOpen ? 'open' : 'close',
      location: 'home_faq'
    });
  }

  finalCtaClick(): void {
    this.analytics.logEvent('final_cta_click', {
      event_category: 'engagement',
      location: 'home_final_cta'
    });
  }

  toggleTestimonial(index: number): void {
    this.expandedTestimonials[index] = !this.expandedTestimonials[index];
    this.analytics.logEvent('testimonial_toggle', {
      event_category: 'engagement',
      index,
      state: this.expandedTestimonials[index] ? 'expand' : 'collapse',
      location: 'home_testimonials'
    });
  }
}
