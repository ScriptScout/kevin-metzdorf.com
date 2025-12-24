import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
export class AppRoutingModule { }
