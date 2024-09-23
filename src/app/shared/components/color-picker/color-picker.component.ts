import { Component, computed, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeManager } from '../../../theme-manager.service';

import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from '@material/material-color-utilities';

// Se utilizzi m3-theme questo è il colore generatore;
const FALLBACK_COLOR = '#f97316'; // tw orange-500

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
})
export class ColorPickerComponent {
  color = FALLBACK_COLOR;
  theme = inject(ThemeManager);
  currentTheme = this.theme.currentTheme;
  isDark = this.theme.isDark;

  constructor() {
    effect(() => {
      this.generateDynamicTheme(this.isDark());
    });
  }

  changeTheme(ev: Event) {
    const inputElement = ev.target as HTMLInputElement;

    this.color = inputElement.value;

    this.generateDynamicTheme(this.isDark());
  }

  generateDynamicTheme(isDark?: boolean) {
    let argb;
    try {
      argb = argbFromHex(this.color);
    } catch (error) {
      // falling to default color if it's invalid color
      argb = argbFromHex(FALLBACK_COLOR);
    }

    const targetElement = document.documentElement; // body ??

    // Get the theme from a hex color
    const theme = themeFromSourceColor(argb);

    // Apply theme to root element
    applyTheme(theme, {
      target: targetElement,
      dark: isDark,
      brightnessSuffix: true,
    });

    const styles = targetElement.style;

    for (const key in styles) {
      if (Object.prototype.hasOwnProperty.call(styles, key)) {
        const propName = styles[key];

        // color utilities generate variables with --md-sys- prefix, we need to change it to --sys
        if (propName.indexOf('--md-sys') === 0) {
          const sysPropName = '--sys' + propName.replace('--md-sys-color', '');
          targetElement.style.setProperty(
            sysPropName,
            targetElement.style.getPropertyValue(propName)
          );
        }
      }
    }
  }
}
