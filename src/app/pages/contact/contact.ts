import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

import { RevealDirective } from '../../directives/reveal.directive';
import {
  EMAIL,
  LOCATION,
  MAILTO_LINK,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  TEL_LINK,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from '../../shared/contact-info';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    RevealDirective,
  ],
  templateUrl: './contact.html',
})
export class Contact {
  readonly email = EMAIL;
  readonly location = LOCATION;
  readonly phonePrimary = PHONE_PRIMARY_DISPLAY;
  readonly phoneSecondary = PHONE_SECONDARY_DISPLAY;
  readonly telLink = TEL_LINK;
  readonly telSecondary = 'tel:+233201842968';
  readonly mailtoLink = MAILTO_LINK;
  readonly whatsappLink = WHATSAPP_LINK;

  // Simple two-way bound form model.
  form = {
    name: '',
    email: '',
    projectType: '',
    message: '',
  };

  submitted = signal(false);

  /**
   * Rather than needing a backend, the enquiry is packaged into a pre-filled
   * WhatsApp message and opened directly in the visitor's WhatsApp so the
   * conversation lands straight in Horla's chat.
   */
  sendViaWhatsApp() {
    const lines = [
      'New enquiry from the Horla website:',
      `Name: ${this.form.name || '-'}`,
      `Email: ${this.form.email || '-'}`,
      `Project type: ${this.form.projectType || '-'}`,
      '',
      this.form.message || '(no message)',
    ];
    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    this.submitted.set(true);
    window.open(url, '_blank', 'noopener');
  }

  /** Opens the visitor's email client with the enquiry pre-filled. */
  sendViaEmail() {
    const subject = encodeURIComponent(
      `Project enquiry — ${this.form.projectType || 'General'}`,
    );
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\n\n${this.form.message}`,
    );
    window.location.href = `${this.mailtoLink}?subject=${subject}&body=${body}`;
  }
}
