import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: false
})
export class MainComponent implements OnInit {
    constructor(private seo: SeoService) {}

    ngOnInit(): void {
        this.seo.update({
            title: 'Kevin Metzdorf – Senior Shopify Freelancer & Developer',
            description: 'Senior Shopify Developer mit 6+ Jahren Erfahrung. Custom Development, Performance-Optimierung & Technical Rescue für Brands und Agenturen weltweit.',
            canonical: 'https://kevin-metzdorf.com/'
        });
    }
}
