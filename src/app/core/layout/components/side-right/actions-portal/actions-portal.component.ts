import { Component, inject, output, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

import { RouterLink } from '@angular/router';
import {
  PreferredType,
  ThemeManager,
} from '../../../../services/theme-manager.service';
import { THEME_ICONS, ThemeIcon } from '../../../resources/theme-types';
import { TitleCasePipe } from '@angular/common';
import { MainMenuComponent } from '../../../resources/main-menu/main-menu.component';

@Component({
  selector: 'app-actions-portal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    TitleCasePipe,
    MainMenuComponent,
  ],
  templateUrl: './actions-portal.component.html',
  styleUrl: './actions-portal.component.scss',
})
export class ActionsPortalComponent {
  close = output();
  theme = inject(ThemeManager);
  themeIcons: ThemeIcon[] = THEME_ICONS;

  onValueChange(theme: PreferredType) {
    this.theme.changeTheme(theme);
  }

  onClose() {
    console.log('onClose in action portal');
    this.close.emit();
  }
}
