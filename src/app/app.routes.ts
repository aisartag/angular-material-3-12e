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
    path: 'pokemon-single',
    loadComponent: () =>
      import(
        './features/change-detection/pokemon-single/pokemon-single.component'
      ).then((c) => c.PokemonSingleComponent),
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

  {
    path: 'things',
    loadComponent: () =>
      import('./features/things/things.component').then(
        (c) => c.ThingsComponent
      ),
  },

  {
    path: 'material-intro',
    loadComponent: () =>
      import('./features/material/material-info/material-info.component').then(
        (c) => c.MaterialInfoComponent
      ),
  },

  { path: '**', component: PageNotFoundComponent },
];

//  canActivate: [authGuard]
