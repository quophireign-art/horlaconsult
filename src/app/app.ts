import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import {
  TEL_LINK,
  WHATSAPP_LINK,
} from './shared/contact-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly whatsappLink = WHATSAPP_LINK;
  readonly telLink = TEL_LINK;

  /** Controls the little labels that fan out from the floating buttons. */
  fabOpen = signal(false);

  toggleFab() {
    this.fabOpen.update((v) => !v);
  }
}
