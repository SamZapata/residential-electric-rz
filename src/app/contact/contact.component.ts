import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  onSubmit() {
    console.log(this.contactForm);
    // throw new Error('Method not implemented.');
  }

}
