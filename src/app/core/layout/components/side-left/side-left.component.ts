import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

import { Link } from '../../../../shared/utils/type-definitions';

@Component({
  selector: 'app-side-left',
  standalone: true,
  imports: [MatToolbarModule, MatListModule, RouterLink],
  templateUrl: './side-left.component.html',
  styleUrl: './side-left.component.scss',
})
export class SideLeftComponent {
  linksDetection: Link[] = [
    { routerLink: 'cd-intro', title: 'Introduzione' },
    { routerLink: 'pokemons', title: 'Pokemons' },
  ];

  linksSignal: Link[] = [
    { routerLink: 'signals-intro', title: 'Signals Intro' },
  ];

  linksNgrxSignals: Link[] = [
    { routerLink: 'ngrx-signals-intro', title: 'Introduzione' },
    { routerLink: 'ngrx-signals-methods', title: 'Store metodi/hooks' },
    { routerLink: 'things', title: 'Things' },
  ];
}
