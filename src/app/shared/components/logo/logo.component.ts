import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeManager } from '../../../core/services/theme-manager.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  isDark = inject(ThemeManager).isDark;
}
