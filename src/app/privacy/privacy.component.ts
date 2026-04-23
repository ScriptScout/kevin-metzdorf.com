import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss'],
    standalone: false
})
export class PrivacyComponent implements OnInit {
    constructor(private seo: SeoService) {}

    ngOnInit(): void {
        this.seo.update({
            title: 'Datenschutzerklärung | Kevin Metzdorf – Shopify Developer',
            description: 'Datenschutzerklärung von Kevin Metzdorf, Senior Shopify Developer. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
            canonical: 'https://kevin-metzdorf.com/datenschutz'
        });
    }
}
