import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss'],
    standalone: false
})
export class PrivacyComponent implements OnInit {
    constructor(private title: Title, private meta: Meta) {}

    ngOnInit(): void {
        this.title.setTitle('Datenschutzerklärung | Kevin Metzdorf – Shopify Freelancer');
        this.meta.updateTag({
            name: 'description',
            content: 'Datenschutzerklärung von Kevin Metzdorf, Senior Shopify Freelancer. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.'
        });
    }
}
