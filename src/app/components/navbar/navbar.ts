import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { WHATSAPP_LINK } from '../../shared/contact-info';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  mobileMenuOpen = signal(false);
  scrolled = signal(false);

  readonly whatsappLink = WHATSAPP_LINK;

  readonly links = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }
}
