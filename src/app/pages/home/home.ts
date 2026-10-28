import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';

import { RevealDirective } from '../../directives/reveal.directive';
import { WHATSAPP_LINK } from '../../shared/contact-info';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CardModule, RevealDirective],
  templateUrl: './home.html',
})
export class Home {
  readonly whatsappLink = WHATSAPP_LINK;

  services = [
    {
      number: '01',
      title: 'Architecture',
      description:
        'Thoughtful architectural solutions designed around people, place and purpose.',
      icon: 'pi-building',
    },
    {
      number: '02',
      title: 'Structural Engineering',
      description:
        'Sound, efficient structures engineered for safety, durability and value.',
      icon: 'pi-sitemap',
    },
    {
      number: '03',
      title: '3D Design & Visualisation',
      description:
        'Photoreal 3D models that let you experience your project before we build it.',
      icon: 'pi-box',
    },
  ];

  projects = [
    {
      title: 'Casa Horizon',
      category: 'Residential',
      location: 'Accra, Ghana',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'The Oak Residence',
      category: 'Residential',
      location: 'Accra, Ghana',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'Atelier House',
      category: 'Commercial',
      location: 'Accra, Ghana',
      image:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'The Courtyard',
      category: 'Hospitality',
      location: 'Accra, Ghana',
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
    },
  ];

  testimonials = [
    {
      quote:
        'They transformed our ideas into a space that feels both timeless and completely ours.',
      name: 'Louis Agyemang',
      role: 'Homeowner',
    },
    {
      quote:
        'From the first concept to the final detail, the team demonstrated exceptional creativity.',
      name: 'Ama Boateng',
      role: 'Property Developer',
    },
    {
      quote:
        'The attention to detail and understanding of our brand was remarkable.',
      name: 'Daniel Owusu',
      role: 'Business Owner',
    },
  ];
}
