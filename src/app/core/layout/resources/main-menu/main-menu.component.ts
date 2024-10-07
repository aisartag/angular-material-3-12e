import { NgClass } from '@angular/common';
import { Component, effect, input, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

import { Link } from '../../../../shared/utils/type-definitions';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MatListModule, RouterLink, NgClass],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  horizontal = input<boolean>();
  close = output();

  links: Link[] = [
    { routerLink: 'login', title: 'Login' },
    { routerLink: 'register', title: 'Register' },
  ];

  onClose() {
    console.log('horizontal', this.horizontal());
    if (!this.horizontal()) {
      console.log('onclose emit');
      this.close.emit();
    }
  }
}
