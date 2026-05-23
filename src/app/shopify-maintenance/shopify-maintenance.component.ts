import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../language.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-shopify-maintenance',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './shopify-maintenance.component.html',
  styleUrls: ['./shopify-maintenance.component.scss']
})
export class ShopifyMaintenanceComponent implements OnInit, AfterViewInit {
  @ViewChildren('reveal') revealElements!: QueryList<ElementRef>;

  expandedTestimonials: boolean[] = [false, false, false];

  constructor(
    public langService: LanguageService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.update({
      title: 'Shopify Betreuung & Support | Kevin Metzdorf',
      description: 'Strukturierte technische Shopify Betreuung für bestehende Shops. Fester Ansprechpartner für Theme-Anpassungen, App-Bewertungen und technischen Support.',
      canonical: 'https://kevin-metzdorf.com/shopify-betreuung'
    });
  }

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    this.revealElements.forEach(el => observer.observe(el.nativeElement));
  }

  toggleTestimonial(index: number): void {
    this.expandedTestimonials[index] = !this.expandedTestimonials[index];
  }

  heroPrimaryClick(): void {
    // Analytics or tracking could go here
  }

  heroSecondaryClick(): void {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  processStepClick(step: string): void {
    // Tracking
  }

  faqToggle(question: string, event: any): void {
    // Tracking
  }
}
