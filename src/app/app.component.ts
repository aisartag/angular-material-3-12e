import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './core/layout/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-material-3-12e';
  // theme = inject(ThemeManager);

  // // using signal
  // isDark = this.theme.isDark;

  // // using rxjs
  // // isDark$ = this.theme.isDark$;

  // changeTheme(theme: string) {
  //   this.theme.changeTheme(theme);
  // }

  // changeFlatButtonFontSize(ev: Event) {
  //   const size = (ev.target as HTMLInputElement).value ?? '14';

  //   const targetElement = document.documentElement;
  //   targetElement.style.setProperty('--sys-label-large-size', size + 'px');
  // }

  // changeHeadingFontSize(ev: Event) {
  //   const size = (ev.target as HTMLInputElement).value ?? '56.992';

  //   const targetElement = document.documentElement;
  //   targetElement.style.setProperty('--sys-display-large-size', size + 'px');

  //   // setting the line-height relationally
  //   targetElement.style.setProperty('--sys-display-large-line-height', '1.25');

  //   // <h1> (and display-large) uses --sys-display-large, hence we also need to update that variable to see the changes
  //   targetElement.style.setProperty(
  //     '--sys-display-large',
  //     '400 var(--sys-display-large-size) / var(--sys-display-large-line-height) Roboto, sans-serif'
  //   );
  // }
}
