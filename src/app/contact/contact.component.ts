import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('myform') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('submitBtn') submitBtn!: ElementRef;
  message: string = 'Send message :)';

  async sendEmail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let submitBtn = this.submitBtn.nativeElement;

    this.toggleDisabled(nameField, emailField, messageField, submitBtn);
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    try {
      await fetch('https://kevin-ammerman.com/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd
        }
      );
      this.message = 'Success! :)'
    } catch (error) {
      this.message = 'Oops! Something went wrong'
    }

    setTimeout(() => {
      this.resetForm(nameField, emailField, messageField);
      this.toggleDisabled(nameField, emailField, messageField, submitBtn);
    }, 5000);

    setTimeout(() => this.message = 'Send message :)', 12000);
  }

  resetForm(nameField: any, emailField: any, messageField: any) {
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }

  toggleDisabled(nameField: any, emailField: any, messageField: any, submitBtn: any) {
    nameField.disabled = !nameField.disabled;
    emailField.disabled = !emailField.disabled;
    messageField.disabled = !messageField.disabled;
    submitBtn.disabled = !submitBtn.disabled;
  }

}
