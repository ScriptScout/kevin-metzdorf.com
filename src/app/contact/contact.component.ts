import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  message = 'Senden';

  constructor(
    private analytics: AngularFireAnalytics,
    private formBuilder: FormBuilder,
    private seo: SeoService
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

  ngOnInit(): void {
    this.seo.update({
      title: 'Kontakt | Kevin Metzdorf – Shopify Developer',
      description: 'Kontakt zu Kevin Metzdorf – Senior Shopify Developer. Unverbindliches Erstgespräch oder Anfrage für Shopify-Entwicklung, Performance & Technical Rescue.',
      canonical: 'https://kevin-metzdorf.com/kontakt'
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
