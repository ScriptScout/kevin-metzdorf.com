import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
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
    private langService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      // Analytics nach DOM-Init
      this.initializeAnalytics();
    }
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
