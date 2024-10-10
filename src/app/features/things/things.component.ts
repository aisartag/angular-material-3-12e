import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ThingsStore } from './things.store';
import { ThingsListComponent } from './ui/things-list/things-list.component';
import { AddThingComponent } from './ui/add-thing/add-thing.component';
import { FilterThingsComponent } from './ui/filter-things/filter-things.component';

@Component({
  selector: 'app-things',
  standalone: true,
  imports: [
    AsyncPipe,
    MatProgressSpinnerModule,
    ThingsListComponent,
    AddThingComponent,
    FilterThingsComponent,
  ],
  templateUrl: './things.component.html',
  styleUrl: './things.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThingsComponent {
  readonly store = inject(ThingsStore);
  private _snackbar = inject(MatSnackBar);
  private _snackbarRef!: MatSnackBarRef<any> | null;

  constructor() {
    effect(() => {
      const error = this.store.error();
      if (error) {
        this.openSnackBar(error);
      } else {
        this.closeSnackBar();
      }
    });
  }

  private openSnackBar(message: string) {
    this._snackbarRef = this._snackbar.open(message, 'Close');
  }

  private closeSnackBar() {
    if (this._snackbarRef) {
      this._snackbarRef.dismiss();
      this._snackbarRef = null;
    }
  }
}
