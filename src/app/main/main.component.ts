import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: false
})
export class MainComponent implements OnInit {
    constructor(private title: Title, private meta: Meta) {}

    ngOnInit(): void {
        this.title.setTitle('Kevin Metzdorf – Senior Shopify Freelancer & Developer Deutschland');
        this.meta.updateTag({
            name: 'description',
            content: 'Senior Shopify Freelancer mit 6+ Jahren Erfahrung. Custom Development, Performance & Technical Rescue für Brands & Agenturen in Deutschland.'
        });
    }
}
