import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { DirectivesDemo } from './directives-demo/directives-demo';
import { DataBindingDemo } from './data-binding-demo/data-binding-demo';

export const routes: Routes = [
  { path: '', component: Home }, // Default ruta - Home komponenta
  { path: 'about', component: About }, // /about prikazuje About komponentu
  { path: 'directives', component: DirectivesDemo }, // /directives prikazuje DirectivesDemo komponentu
  { path: 'data-binding', component: DataBindingDemo }, // /data-binding prikazuje DataBindingDemo komponentu
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback ruta - redirect na Home
];
