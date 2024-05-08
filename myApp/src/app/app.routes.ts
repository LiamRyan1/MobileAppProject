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
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.page').then( m => m.CalendarPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },  {
    path: 'duedate',
    loadComponent: () => import('./duedate/duedate.page').then( m => m.DuedatePage)
  },

];
