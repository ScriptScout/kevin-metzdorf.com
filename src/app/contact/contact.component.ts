import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false
})
export class ContactComponent {
  contactForm: FormGroup;
  message = 'Senden';

  constructor(
    private analytics: AngularFireAnalytics,
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      supportTopic: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projectStatus: [''],
      timeframe: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      privacy: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

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
