import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-imprint',
    templateUrl: './imprint.component.html',
    styleUrls: ['./imprint.component.scss'],
    standalone: false
})
export class ImprintComponent implements OnInit {
    constructor(private title: Title, private meta: Meta) {}

    ngOnInit(): void {
        this.title.setTitle('Impressum | Kevin Metzdorf – Shopify Freelancer Deutschland');
        this.meta.updateTag({
            name: 'description',
            content: 'Impressum von Kevin Metzdorf, selbstständiger Shopify Freelancer aus Deutschland. Angaben gemäß §5 TMG.'
        });
    }
}
