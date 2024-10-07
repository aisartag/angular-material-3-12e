import { Component } from '@angular/core';
import { MainMenuComponent } from '../../resources/main-menu/main-menu.component';
import { ThemeManagerComponent } from '../theme-manager/theme-manager.component';

@Component({
  selector: 'app-actions-toolbar',
  standalone: true,
  imports: [MainMenuComponent, ThemeManagerComponent],
  templateUrl: './actions-toolbar.component.html',
  styleUrl: './actions-toolbar.component.scss',
})
export class ActionsToolbarComponent {}
