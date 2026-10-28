import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../directives/reveal.directive';

interface Service {
  number: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './services.html',
})
export class Services {
  services: Service[] = [
    {
      number: '01',
      title: 'Architectural Design',
      description:
        'Concept-to-completion architecture that balances beauty, function and context.',
      icon: 'pi-building',
      features: [
        'Concept & schematic design',
        'Space planning & layouts',
        'Building permits & documentation',
        'Sustainable design strategies',
      ],
    },
    {
      number: '02',
      title: 'Structural Engineering',
      description:
        'Safe, efficient and code-compliant structures for every type of building.',
      icon: 'pi-sitemap',
      features: [
        'Structural analysis & design',
        'Foundation engineering',
        'Reinforced concrete & steel',
        'Structural integrity assessment',
      ],
    },
    {
      number: '03',
      title: '3D Design & Visualisation',
      description:
        'Photoreal renders and walkthroughs so you can experience your project first.',
      icon: 'pi-box',
      features: [
        'Photorealistic 3D renders',
        'Virtual walkthroughs',
        'Material & finish previews',
        'Interior & exterior visualisation',
      ],
    },
    {
      number: '04',
      title: 'Project Management',
      description:
        'Coordinated delivery that keeps your project on time and on budget.',
      icon: 'pi-briefcase',
      features: [
        'Cost estimation & budgeting',
        'Construction supervision',
        'Contractor coordination',
        'Quality assurance',
      ],
    },
    {
      number: '05',
      title: 'Interior Design',
      description:
        'Interiors that balance comfort, functionality and timeless character.',
      icon: 'pi-home',
      features: [
        'Interior concepts & moodboards',
        'Furniture & fixture selection',
        'Lighting design',
        'Bespoke detailing',
      ],
    },
    {
      number: '06',
      title: 'Consultancy & Feasibility',
      description:
        'Expert advice and feasibility studies to de-risk your investment early.',
      icon: 'pi-compass',
      features: [
        'Site analysis & feasibility',
        'Regulatory & compliance advice',
        'Value engineering',
        'Technical due diligence',
      ],
    },
  ];

  process = [
    { step: '01', title: 'Discover', text: 'We listen, study the site and understand your goals.' },
    { step: '02', title: 'Design', text: 'We develop concepts, drawings and 3D visualisations.' },
    { step: '03', title: 'Engineer', text: 'We produce sound, code-compliant technical documentation.' },
    { step: '04', title: 'Deliver', text: 'We supervise construction through to a flawless finish.' },
  ];
}
