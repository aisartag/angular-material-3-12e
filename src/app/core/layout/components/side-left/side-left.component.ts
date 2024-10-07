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
  linksSignal: Link[] = [
    { routerLink: 'signals-intro', title: 'Signals Intro' },
    { routerLink: 'todos-list', title: 'Todos List' },
    { routerLink: 'todos-list-http', title: 'Todos List Http' },
  ];
}
