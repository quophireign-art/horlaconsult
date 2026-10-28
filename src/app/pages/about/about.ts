import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './about.html',
})
export class About {
  stats = [
    { value: '12+', label: 'Years of experience' },
    { value: '85+', label: 'Projects delivered' },
    { value: '18', label: 'Design awards' },
    { value: '100%', label: 'Client commitment' },
  ];

  values = [
    {
      icon: 'pi-eye',
      title: 'Purposeful Design',
      text: 'Every line we draw serves the people and the place it belongs to.',
    },
    {
      icon: 'pi-verified',
      title: 'Engineering Integrity',
      text: 'Sound, safe and code-compliant structures are non-negotiable.',
    },
    {
      icon: 'pi-users',
      title: 'Client Partnership',
      text: 'We listen first, then translate your vision into built reality.',
    },
    {
      icon: 'pi-globe',
      title: 'Sustainability',
      text: 'We design responsibly, with local materials and a light footprint.',
    },
  ];

  team = [
    {
      name: 'Louis Horlali',
      role: 'Principal Consulting Engineer',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85',
    },
    {
      name: 'Ama Boateng',
      role: 'Lead Architect',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85',
    },
    {
      name: 'Daniel Owusu',
      role: 'Project Manager',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85',
    },
  ];
}
