import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-ai-policy',
  standalone: false,
  templateUrl: './ai-policy.component.html',
  styleUrls: ['./ai-policy.component.scss']
})
export class AiPolicyComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'KI-Richtlinie | Kevin Metzdorf – Shopify Developer',
      description: 'Transparente KI-Richtlinie von Kevin Metzdorf. Informationen zum verantwortungsvollen Einsatz von KI in Design, Code und Beratung.',
      canonical: 'https://kevin-metzdorf.com/ki-richtlinie'
    });
  }
}
