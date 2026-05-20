import { Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, TranslateModule],
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit, OnDestroy {
  @ViewChild('dialogRef') dialogRef?: ElementRef<HTMLElement>;
  @ViewChild('closeBtn') closeBtn?: ElementRef<HTMLButtonElement>;

  activeTab: 'form' | 'booking' = 'booking';
  contactForm: FormGroup;
  message = 'Senden';
  private lastFocused: HTMLElement | null = null;

  // Outlook Bookings URL (same as used across the site)
  bookingUrl = 'https://outlook.office.com/bookwithme/user/d3f7cf3b05804831b053b897c120a8a1@kevin-metzdorf.com/meetingtype/rDRl5SD-10Ki_xOLWuY-Tw2?anonymous&ismsaljsauthenabled&ep=mlink';
  safeBookingUrl!: SafeResourceUrl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private analytics: AngularFireAnalytics,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.contactForm = this.fb.group({
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
    // Save last focused element to restore on close
    this.lastFocused = this.document.activeElement instanceof HTMLElement ? this.document.activeElement : null;
    // Lock background scroll
    this.document.body.style.overflow = 'hidden';

    // Prepare safe URL for booking iframe
    this.safeBookingUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.bookingUrl);

    // Set initial tab from query param (if provided)
    const qpTab = this.route.snapshot.queryParamMap.get('tab');
    if (qpTab === 'booking' || qpTab === 'form') {
      this.activeTab = qpTab as 'form' | 'booking';
    }

    // Analytics: modal opened
    this.analytics.logEvent('contact_modal_open', { event_category: 'engagement' });
  }

  ngOnDestroy(): void {
    // Unlock background scroll
    this.document.body.style.overflow = '';
    // Restore previous focus
    if (this.lastFocused instanceof HTMLElement) {
      setTimeout(() => this.lastFocused?.focus(), 0);
    }
    // Analytics: modal closed
    this.analytics.logEvent('contact_modal_close', { event_category: 'engagement' });
  }

  ngAfterViewInit(): void {
    // Move focus into the dialog
    setTimeout(() => {
      this.closeBtn?.nativeElement?.focus();
    }, 0);
  }

  switchTab(tab: 'form' | 'booking') {
    this.activeTab = tab;
  }

  close(): void {
    // Clear only the modal outlet, keep the primary route intact
    this.router.navigate([{ outlets: { modal: null } }]);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.analytics.logEvent('contact_form_submit', {
      event_category: 'engagement',
      event_label: 'contact_form_modal'
    });

    // TODO: hook into backend/email service as needed
    this.message = 'Gesendet';
  }

  // ESC to close
  @HostListener('document:keydown', ['$event'])
  onKeydown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      ev.preventDefault();
      this.close();
    }
    if (ev.key === 'Tab') {
      // Simple focus trap
      this.trapFocus(ev);
    }
  }

  // Click on backdrop closes
  onBackdropClick(target: EventTarget | null) {
    const dialogEl = this.dialogRef?.nativeElement;
    if (!dialogEl) return;
    if (target === dialogEl) {
      this.close();
    }
  }

  private trapFocus(ev: KeyboardEvent) {
    const root = this.dialogRef?.nativeElement;
    if (!root) return;
    const focusable = Array.from(root.querySelectorAll<HTMLElement>([
      'a[href]','area[href]','input:not([disabled])','select:not([disabled])','textarea:not([disabled])',
      'button:not([disabled])','iframe','object','embed','[tabindex]:not([tabindex="-1"])','[contenteditable="true"]'
    ].join(',')) ).filter(el => el.offsetParent !== null);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = this.document.activeElement as HTMLElement | null;

    if (ev.shiftKey) {
      if (active === first) {
        ev.preventDefault();
        last.focus();
      }
    } else {
      if (active === last) {
        ev.preventDefault();
        first.focus();
      }
    }
  }
}
