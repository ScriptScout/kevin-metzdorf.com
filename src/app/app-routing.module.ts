import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { filter } from 'rxjs/operators';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AiPolicyComponent } from './ai-policy/ai-policy.component';
import { TermsComponent } from './terms/terms.component';
import { BlogOverviewComponent } from './blog/blog-overview/blog-overview.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { ContactComponent } from './contact/contact.component';
import { ContactModalComponent } from './contact/contact-modal.component';
import { WorkListComponent } from './work/work-list/work-list.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { ShopifyMaintenanceComponent } from './shopify-maintenance/shopify-maintenance.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'impressum', component: ImprintComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'datenschutz', component: PrivacyComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'ki-richtlinie', component: AiPolicyComponent },
  { path: 'ai-policy', component: AiPolicyComponent },
  { path: 'agb', component: TermsComponent },
  { path: 'terms-and-conditions', component: TermsComponent },
  // Primary contact page (kept for SEO and direct access)
  { path: 'kontakt', component: ContactComponent },
  { path: 'contact', component: ContactComponent },
  // Auxiliary outlet routes to show the contact modal on top of any page
  { path: 'kontakt', component: ContactModalComponent, outlet: 'modal' },
  { path: 'contact', component: ContactModalComponent, outlet: 'modal' },
  { path: 'blog', component: BlogOverviewComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
  { path: 'work', component: WorkListComponent },
  { path: 'work/:slug', component: WorkDetailComponent },
  { path: 'shopify-betreuung', component: ShopifyMaintenanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private router: Router,
    private analytics: AngularFireAnalytics
  ) {
    // Route Changes tracken
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.analytics.logEvent('page_view', {
        page_path: event.urlAfterRedirects,
        page_title: document.title
      });
    });
  }
}
