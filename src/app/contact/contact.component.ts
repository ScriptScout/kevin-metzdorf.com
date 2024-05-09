import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  message: string = 'Send message :)';
  contactForm: FormGroup;
  isSubmited: boolean = false;
  isSent: boolean = false;
  checkboxValue: boolean = false;

  constructor(private firestore: AngularFirestore) {
    this.contactForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false }, Validators.required),
      email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      text: new FormControl({ value: '', disabled: false }, Validators.required),
      privacy: new FormControl(false)
    });
  }

  async onSubmit() {
    if (this.contactForm.valid && this.contactForm.get('privacy')?.value) {
      this.disableForm();
      const formData = this.contactForm.value;

      try {
        // Change PHP mail sending function to Firestore
        await this.firestore.collection('contacts').add(formData);
        this.resetAndNotify();
        this.message = 'Success!';
        this.isSent = true;
      } catch (error) {
        console.error('Error sending message:', error);
        this.message = `Oops! Something went wrong`;
      }
    } else {
      this.showValidationErrorMsg()
    }
  }

  showValidationErrorMsg() {
    this.isSubmited = true;
    setTimeout(() => this.isSubmited = false, 2000);
  }

  resetAndNotify() {
    setTimeout(() => {
      this.resetForm();
      this.enableForm();
      this.isSent = false;
    }, 5000);

    setTimeout(() => this.message = 'Send message :)', 12000);
  }

  resetForm() {
    this.contactForm.reset({
      name: '',
      email: '',
      text: '',
      privacy: false
    })
  }

  disableForm() {
    this.contactForm.disable();
  }

  enableForm() {
    this.contactForm.enable();
  }
}
