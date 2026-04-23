import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-terms',
  standalone: false,
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'AGB | Kevin Metzdorf – Shopify Developer & Berater',
      description: 'Allgemeine Geschäftsbedingungen von Kevin Metzdorf für Shopify Development, Consulting und technische Dienstleistungen.',
      canonical: 'https://kevin-metzdorf.com/agb'
    });
  }
}
