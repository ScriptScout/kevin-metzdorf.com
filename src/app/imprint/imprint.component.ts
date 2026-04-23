import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-imprint',
    templateUrl: './imprint.component.html',
    styleUrls: ['./imprint.component.scss'],
    standalone: false
})
export class ImprintComponent implements OnInit {
    constructor(private seo: SeoService) {}

    ngOnInit(): void {
        this.seo.update({
            title: 'Impressum | Kevin Metzdorf – Shopify Developer',
            description: 'Impressum von Kevin Metzdorf, Senior Shopify Developer. Angaben gemäß §5 DDG.',
            canonical: 'https://kevin-metzdorf.com/impressum'
        });
    }
}
