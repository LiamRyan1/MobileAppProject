import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'to-do-list',
    loadComponent: () => import('./to-do-list/to-do-list.page').then( m => m.ToDoListPage)
  },
];