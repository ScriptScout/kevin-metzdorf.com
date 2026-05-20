import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  update(options: { title: string; description: string; canonical: string }): void {
    this.titleService.setTitle(options.title);
    this.metaService.updateTag({ name: 'description', content: options.description });
    this.setCanonical(options.canonical);
    this.updateHreflang(options.canonical);
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }

  private updateHreflang(url: string): void {
    const langs = ['de', 'en'];
    // Remove existing hreflangs
    const existing = this.document.querySelectorAll('link[rel="alternate"][hreflang]');
    existing.forEach(el => el.remove());

    langs.forEach(lang => {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', url); // In this case they share the same URL
      this.document.head.appendChild(link);
    });

    const xDefault = this.document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    xDefault.setAttribute('href', url);
    this.document.head.appendChild(xDefault);
  }
}
