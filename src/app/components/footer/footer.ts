import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  EMAIL,
  LOCATION,
  MAILTO_LINK,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  TEL_LINK,
  WHATSAPP_LINK,
} from '../../shared/contact-info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly email = EMAIL;
  readonly location = LOCATION;
  readonly phonePrimary = PHONE_PRIMARY_DISPLAY;
  readonly phoneSecondary = PHONE_SECONDARY_DISPLAY;
  readonly telLink = TEL_LINK;
  readonly mailtoLink = MAILTO_LINK;
  readonly whatsappLink = WHATSAPP_LINK;

  readonly links = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
}
