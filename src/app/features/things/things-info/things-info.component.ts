import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-things-info',
  standalone: true,
  imports: [MatIcon, MatButtonModule],
  templateUrl: './things-info.component.html',
  styleUrl: './things-info.component.scss',
})
export class ThingsInfoComponent {
  readonly dialogRef = inject(MatDialogRef<ThingsInfoComponent>);

  onClose() {
    this.dialogRef.close();
  }
}
