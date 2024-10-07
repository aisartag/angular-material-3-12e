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

import { LogoComponent } from '../../../shared/components/logo/logo.component';

import { ThemeManagerComponent } from '../components/theme-manager/theme-manager.component';
import { SideRightComponent } from '../components/side-right/side-right.component';
import { ActionsToolbarComponent } from '../components/actions-toolbar/actions-toolbar.component';
import { SideLeftComponent } from '../components/side-left/side-left.component';
import { MIN_WIDTH_SCREEN } from '../../../shared/utils/constants';

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
    ActionsToolbarComponent,
    ThemeManagerComponent,
    SideRightComponent,
    SideLeftComponent,
  ],
})
export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 767px)') // limit md Tailwind
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  // using XGA landscape min
  // isWebPortrait$: Observable<boolean> = this.breakpointObserver
  //   .observe(Breakpoints.WebPortrait) // (min-width: 840px) and (orientation: portrait)
  //   .pipe(
  //     map((result) => result.matches),
  //     shareReplay()
  //   );

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
