import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: false
})
export class ProjectComponent implements OnInit, OnDestroy {
  private langSub?: Subscription;

  featuredCases: any[] = [];
  additionalProjects: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // stream() emits after initial load AND on every language change
    this.langSub = this.translate.stream('PROJECT').subscribe(() => this.loadData());
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  private loadData(): void {
    const t = (key: string) => this.translate.instant(key);

    this.featuredCases = [
      {
        id: 'latori',
        detailsId: 'case-latori-details',
        title: t('PROJECT.CASES.LATORI.TITLE'),
        role: t('PROJECT.CASES.LATORI.ROLE'),
        context: t('PROJECT.CASES.LATORI.CONTEXT'),
        situation: t('PROJECT.CASES.LATORI.SITUATION'),
        responsibility: t('PROJECT.CASES.LATORI.RESPONSIBILITY'),
        focus: ['Liquid','TypeScript','Shopify Theme Architecture','Custom Sections','API Integration','GitHub Workflows','Code Reviews','Staging/Production Deployments','Performance'],
        outcome: t('PROJECT.CASES.LATORI.OUTCOME'),
        testimonial: { type: 'note', text: t('PROJECT.CASES.LATORI.TESTIMONIAL') }
      },
      {
        id: 'hsn',
        detailsId: 'case-hsn-details',
        title: t('PROJECT.CASES.HSN.TITLE'),
        role: t('PROJECT.CASES.HSN.ROLE'),
        context: t('PROJECT.CASES.HSN.CONTEXT'),
        situation: t('PROJECT.CASES.HSN.SITUATION'),
        responsibility: t('PROJECT.CASES.HSN.RESPONSIBILITY'),
        focus: ['Shopify Theme Development','Liquid','JavaScript','Custom Features','App Integration','Bugfixing','Technical Consulting','Stakeholder Communication'],
        outcome: t('PROJECT.CASES.HSN.OUTCOME'),
        testimonial: { type: 'quote', text: t('PROJECT.CASES.HSN.TESTIMONIAL'), author: t('PROJECT.CASES.HSN.TESTIMONIAL_AUTHOR') }
      },
      {
        id: 'dekoback',
        detailsId: 'case-dekoback-details',
        title: t('PROJECT.CASES.DEKOBACK.TITLE'),
        role: t('PROJECT.CASES.DEKOBACK.ROLE'),
        context: t('PROJECT.CASES.DEKOBACK.CONTEXT'),
        situation: t('PROJECT.CASES.DEKOBACK.SITUATION'),
        responsibility: t('PROJECT.CASES.DEKOBACK.RESPONSIBILITY'),
        focus: ['Multi-Store Management','Liquid','JavaScript','Theme Refactoring','Performance','GA4','Google Tag Manager','App Integration','Code Quality'],
        outcome: t('PROJECT.CASES.DEKOBACK.OUTCOME'),
        testimonial: { type: 'quote', text: t('PROJECT.CASES.DEKOBACK.TESTIMONIAL'), author: t('PROJECT.CASES.DEKOBACK.TESTIMONIAL_AUTHOR') }
      }
    ];

    this.additionalProjects = [
      { title: t('PROJECT.ADDITIONAL.BURDA.TITLE'), role: t('PROJECT.ADDITIONAL.BURDA.ROLE'), description: t('PROJECT.ADDITIONAL.BURDA.DESC'), tech: ['Liquid','HTML','CSS','Shopify Theme Development'] },
      { title: t('PROJECT.ADDITIONAL.ROCKETCOMMERCE.TITLE'), role: t('PROJECT.ADDITIONAL.ROCKETCOMMERCE.ROLE'), description: t('PROJECT.ADDITIONAL.ROCKETCOMMERCE.DESC'), tech: ['Liquid','JavaScript','Custom Sections'] },
      { title: t('PROJECT.ADDITIONAL.GIAVINCI.TITLE'), role: t('PROJECT.ADDITIONAL.GIAVINCI.ROLE'), description: t('PROJECT.ADDITIONAL.GIAVINCI.DESC'), tech: ['Shopify','Theme Customization','App Integration'] },
      { title: t('PROJECT.ADDITIONAL.WINAT.TITLE'), role: t('PROJECT.ADDITIONAL.WINAT.ROLE'), description: t('PROJECT.ADDITIONAL.WINAT.DESC'), tech: ['Shopify','Affiliate Integration','Theme Customization'] },
      { title: t('PROJECT.ADDITIONAL.POWERSYSTEM.TITLE'), role: t('PROJECT.ADDITIONAL.POWERSYSTEM.ROLE'), description: t('PROJECT.ADDITIONAL.POWERSYSTEM.DESC'), tech: ['Shopify','Bugfixing','Custom Features'] },
      { title: t('PROJECT.ADDITIONAL.RIMOCO.TITLE'), role: t('PROJECT.ADDITIONAL.RIMOCO.ROLE'), description: t('PROJECT.ADDITIONAL.RIMOCO.DESC'), tech: ['Shopify','GA4','GTM','Tracking Setup'] },
      { title: t('PROJECT.ADDITIONAL.GOLF24.TITLE'), role: t('PROJECT.ADDITIONAL.GOLF24.ROLE'), description: t('PROJECT.ADDITIONAL.GOLF24.DESC'), tech: ['ERP Integration','API','E-Commerce'] }
    ];
  }
}
