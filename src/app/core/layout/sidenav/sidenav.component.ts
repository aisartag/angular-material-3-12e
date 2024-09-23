import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
// import { ColorModeChangeComponent } from '../components/color-mode-change/color-mode-change.component';

import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { MenuToolbarComponent } from '../components/menu-toolbar/menu-toolbar.component';
// import { ActionsVertComponent } from '../components/actions-vert/actions-vert.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    LogoComponent,
    MenuToolbarComponent,
  ],
})
export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  // using XGA landscape min
  isMD$: Observable<boolean> = this.breakpointObserver
    .observe('(min-width: 768px)')
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  // isHandset$: Observable<boolean> = this.breakpointObserver
  //   .observe(Breakpoints.HandsetPortrait)
  //   .pipe(
  //     map((result) => result.matches),
  //     shareReplay()
  //   );
}

// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
