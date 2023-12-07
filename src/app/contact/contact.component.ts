import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  message: string = 'Send message :)';
  contactForm: FormGroup;
  isSending: boolean = false;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false }, Validators.required),
      email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      text: new FormControl({ value: '', disabled: false }, Validators.required)
    });
  }

  async onSubmit() {
    const nameField = this.contactForm.value.name;
    const emailField = this.contactForm.value.email;
    const messageField = this.contactForm.value.text;

    this.disableForm();
    this.isSending = true;

    let fd = new FormData();
    fd.append('name', nameField);
    fd.append('email', emailField);
    fd.append('message', messageField);

    try {
      const response = await fetch('https://kevin-ammerman.com/send_mail/send_mail.php', {
        method: 'POST',
        body: fd
      });

      if (!response.ok) throw new Error(`Server responded with status: ${response.status}`);
      this.message = 'Success! :)';

    } catch (error) {
      console.error('Error sending message:', error);
      this.message = `Oops! Something went wrong`;
    }

    setTimeout(() => {
      this.resetForm();
      this.enableForm();
      this.isSending = false;
    }, 5000);

    setTimeout(() => this.message = 'Send message :)', 12000);
  }


  resetForm() {
    this.contactForm.reset({
      name: '',
      email: '',
      text: ''
    })
  }


  disableForm() {
    this.contactForm.disable();
  }


  enableForm() {
    this.contactForm.enable();
  }
}
