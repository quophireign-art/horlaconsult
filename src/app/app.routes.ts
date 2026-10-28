import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
    title: 'Horla Engineering & Design | Consulting Engineers',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services').then((m) => m.Services),
    title: 'Services | Horla Engineering & Design',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects').then((m) => m.Projects),
    title: 'Projects | Horla Engineering & Design',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then((m) => m.About),
    title: 'About | Horla Engineering & Design',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact | Horla Engineering & Design',
  },
  { path: '**', redirectTo: '' },
];
