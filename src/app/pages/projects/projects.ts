import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../directives/reveal.directive';

interface Project {
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, NgClass, RevealDirective],
  templateUrl: './projects.html',
})
export class Projects {
  readonly categories = ['All', 'Residential', 'Commercial', 'Hospitality'];
  activeCategory = signal('All');

  private allProjects: Project[] = [
    {
      title: 'Casa Horizon',
      category: 'Residential',
      location: 'Accra, Ghana',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'The Oak Residence',
      category: 'Residential',
      location: 'Accra, Ghana',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'Atelier House',
      category: 'Commercial',
      location: 'Kumasi, Ghana',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'The Courtyard',
      category: 'Hospitality',
      location: 'Accra, Ghana',
      year: '2022',
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'Skyline Offices',
      category: 'Commercial',
      location: 'Accra, Ghana',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'Palm Suites Hotel',
      category: 'Hospitality',
      location: 'Cape Coast, Ghana',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'Riverside Villa',
      category: 'Residential',
      location: 'Tema, Ghana',
      year: '2022',
      image:
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85',
    },
    {
      title: 'The Market Hall',
      category: 'Commercial',
      location: 'Accra, Ghana',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
    },
  ];

  filtered = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All'
      ? this.allProjects
      : this.allProjects.filter((p) => p.category === cat);
  });

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}
