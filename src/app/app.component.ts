import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { LanguageService } from './language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AngularFireAnalytics,
    private langService: LanguageService  // eager init ensures translate.use() runs before any child ngOnInit
  ) {}

  ngOnInit() {
    AOS.init();

    // Analytics nach DOM-Init
    this.initializeAnalytics();
  }

  private async initializeAnalytics() {
    try {
      // Page View tracken
      await this.analytics.logEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
      });

      console.log('✅ AngularFire Analytics initialized');
    } catch (error) {
      console.error('❌ Analytics initialization failed:', error);
    }
  }
}
