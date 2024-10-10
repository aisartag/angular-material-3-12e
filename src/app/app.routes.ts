import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { WelcomeComponent } from './features/welcome/welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/auth/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/auth/pages/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/auth/pages/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },

  {
    path: 'cd-intro',
    loadComponent: () =>
      import('./features/change-detection/cd-intro/cd-intro.component').then(
        (c) => c.CdIntroComponent
      ),
  },

  {
    path: 'pokemons',
    loadComponent: () =>
      import('./features/change-detection/pokemons/pokemons.component').then(
        (c) => c.PokemonsComponent
      ),
  },

  {
    path: 'signals-intro',
    loadComponent: () =>
      import('./features/signals/signals-intro/signals-intro.component').then(
        (c) => c.SignalsIntroComponent
      ),
  },

  {
    path: 'ngrx-signals-intro',
    loadComponent: () =>
      import(
        './features/ngrx-signals/ngrx-signals-intro/things.component'
      ).then((c) => c.ThingsComponent),
  },

  {
    path: 'ngrx-signals-methods',
    loadComponent: () =>
      import(
        './features/ngrx-signals/ngrx-signals-methods/counter-methods/counter-methods.component'
      ).then((c) => c.CounterMethodsComponent),
  },

  // {
  //   path: 'todos-list',
  //   loadComponent: () =>
  //     import('./features/todos/todos-list/todos-list.component').then(
  //       (c) => c.TodosListComponent
  //     ),
  // },

  // {
  //   path: 'todos-list-http',
  //   loadComponent: () =>
  //     import(
  //       './features/todos-http/todos-list-http/todos-list-http.component'
  //     ).then((c) => c.TodosListHttpComponent),
  // },

  {
    path: 'things',
    loadComponent: () =>
      import('./features/things/things.component').then(
        (c) => c.ThingsComponent
      ),
  },

  { path: '**', component: PageNotFoundComponent },
];

//  canActivate: [authGuard]
