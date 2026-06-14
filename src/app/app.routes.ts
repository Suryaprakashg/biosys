import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'BIOSYS - Home'
  },
  {
    path: 'scientific-writing',
    loadComponent: () => import('./features/scientific-writing/scientific-writing.component').then(m => m.ScientificWritingComponent),
    title: 'Scientific Writing Services - BIOSYS'
  },
  {
    path: 'plant-services',
    loadComponent: () => import('./features/plant-services/plant-services.component').then(m => m.PlantServicesComponent),
    title: 'Plant Materials Based Services - BIOSYS'
  },
  {
    path: 'miscellaneous',
    loadComponent: () => import('./features/miscellaneous/miscellaneous.component').then(m => m.MiscellaneousComponent),
    title: 'Miscellaneous Services - BIOSYS'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us - BIOSYS'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Us - BIOSYS'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
