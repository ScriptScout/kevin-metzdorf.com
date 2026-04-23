import { Directive, ElementRef, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;
  private destroyed = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;

    // Ensure base class exists
    this.renderer.addClass(element, 'reveal');

    // Respect prefers-reduced-motion
    const mql = this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql?.matches) {
      this.renderer.addClass(element, 'reveal-in');
      return;
    }

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      // Fallback: show immediately
      this.renderer.addClass(element, 'reveal-in');
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (this.destroyed) return;
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'reveal-in');
          this.observer?.unobserve(element);
          this.observer?.disconnect();
        }
      });
    }, { root: null, threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.observer?.disconnect();
  }
}
