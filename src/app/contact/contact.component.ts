import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private analytics: AngularFireAnalytics) {}

  onSubmit() {
    // Form-Submit Event tracken
    this.analytics.logEvent('contact_form_submit', {
      event_category: 'engagement',
      event_label: 'contact_form'
    });

    // Ihre bestehende onSubmit-Logik
  }

  onFocus(fieldName: string) {
    // Form-Interaktion tracken
    this.analytics.logEvent('form_start', {
      form_name: 'contact_form',
      field_name: fieldName
    });
  }
}
