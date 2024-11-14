import { Routes } from '@angular/router';

import { Error404PageComponent } from '@shared/pages/error404-page/error404-page.component';

export const routes: Routes = [
  {
    path: 'song',
    loadComponent: () =>
      import('./songs/pages/layout-page/layout-page.component'),
    children: [
      {
        path: 'list',
        title: 'List Song',
        loadComponent: () =>
          import('./songs/pages/list-page/list-page.component'),
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'song',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
