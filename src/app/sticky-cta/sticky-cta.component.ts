import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-sticky-cta',
  templateUrl: './sticky-cta.component.html',
  styleUrls: ['./sticky-cta.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class StickyCtaComponent implements OnInit, OnDestroy {
  visible = false;
  private currentUrl = '';
  private sub = new Subscription();

  constructor(
    private router: Router,
    private analytics: AngularFireAnalytics
  ) {}

  ngOnInit(): void {
    // Track current route to hide on /kontakt
    const routeSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentUrl = e.urlAfterRedirects;
        this.updateVisibility();
      });

    this.sub.add(routeSub);
    // Initialize with current state
    this.currentUrl = this.router.url;
    this.updateVisibility();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onViewportChange(): void {
    this.updateVisibility();
  }

  onClick(): void {
    this.analytics.logEvent('sticky_cta_click', {
      event_category: 'engagement',
      event_label: 'sticky_bottom_cta'
    });
  }

  private updateVisibility(): void {
    // Hide on contact route or when modal outlet is open
    const onContact = this.currentUrl.includes('/kontakt') || this.currentUrl.includes('/contact');
    const modalOpen = this.currentUrl.includes('(modal:');
    if (onContact || modalOpen) {
      this.visible = false;
      return;
    }

    // Only show on small screens (mobile-first). Desktop has CTA in header.
    const isMobile = window.matchMedia('(max-width: 950px)').matches;
    if (!isMobile) {
      this.visible = false;
      return;
    }

    const scrolledEnough = window.scrollY > 200;
    const nearFooter = this.isNearFooter();

    this.visible = scrolledEnough && !nearFooter;
  }

  private isNearFooter(): boolean {
    const footerEl = document.querySelector('app-footer') as HTMLElement | null;
    if (!footerEl) return false;
    const rect = footerEl.getBoundingClientRect();
    // If top of footer is within 100px of viewport bottom, consider near
    return rect.top < (window.innerHeight + 100);
  }
}
