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

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'impressum', component: ImprintComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'datenschutz', component: PrivacyComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'ki-richtlinie', component: AiPolicyComponent },
  { path: 'agb', component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
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
