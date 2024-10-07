import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Component, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActionsPortalComponent } from './actions-portal/actions-portal.component';

@Component({
  selector: 'app-side-right',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    PortalModule,
    OverlayModule,
    ActionsPortalComponent,
  ],
  templateUrl: './side-right.component.html',
  styleUrl: './side-right.component.scss',
})
export class SideRightComponent {
  protected overlayOpen = false;

  /************************************************************
   *
   *          gestione programmatica
   *
   *************************************************************/

  // portal = viewChild(CdkPortal);
  // constructor(private overlay: Overlay) {}
  // protected openModal() {
  //   const overlayRef = this.overlay.create();
  //   overlayRef.attach(this.portal);
  // }
  // openModal() {
  //   const config = new OverlayConfig({
  //     positionStrategy: this.overlay
  //       .position()
  //       .global()
  //       .centerHorizontally()
  //       .centerVertically(),
  //     width: '60%',
  //     hasBackdrop: true,
  //   });
  //   const overlayRef = this.overlay.create(config);
  //   overlayRef.attach(this.portal);
  //   overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  // }
}
