import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ThemeManager } from '../../../services/theme-manager.service';

@Component({
  selector: 'app-theme-manager',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './theme-manager.component.html',
  styleUrl: './theme-manager.component.scss',
})
export class ThemeManagerComponent {
  theme = inject(ThemeManager);

  // using signal
  isDark = this.theme.isDark;

  // using rxjs
  // isDark$ = this.theme.isDark$;

  changeTheme(theme: string) {
    this.theme.changeTheme(theme);
  }
}
