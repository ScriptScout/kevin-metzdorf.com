import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';

import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AiPolicyComponent } from './ai-policy/ai-policy.component';
import { TermsComponent } from './terms/terms.component';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHX5YWotsx8iN2ShKnz2a70Bu9bmJLA8s",
  authDomain: "kevin-metzdorf.firebaseapp.com",
  databaseURL: "https://kevin-metzdorf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kevin-metzdorf",
  storageBucket: "kevin-metzdorf.firebasestorage.app",
  messagingSenderId: "462291329115",
  appId: "1:462291329115:web:899143275d4f8f0c615f7e",
  measurementId: "G-NRS0MBHYKK"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    MainComponent,
    SkillsComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    PrivacyComponent,
    AiPolicyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Initialize Firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
