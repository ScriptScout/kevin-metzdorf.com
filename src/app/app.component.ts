import { Component } from '@angular/core';
import * as AOS from 'aos';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  ngOnInit() {
    AOS.init();
  }

constructor(private analytics: AngularFireAnalytics) {
  // Analytics initialisieren
  this.analytics.logEvent('page_view');
}
}
