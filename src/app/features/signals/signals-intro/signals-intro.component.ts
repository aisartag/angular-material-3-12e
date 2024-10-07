import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MIN_WIDTH_SCREEN } from '../../../shared/utils/constants';
import { patchState, signalState } from '@ngrx/signals';

@Component({
  selector: 'app-signals-intro',
  templateUrl: './signals-intro.component.html',
  styleUrl: './signals-intro.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class SignalsIntroComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  /**
   *  con signal
   *  Nota: il counter in tal caso non è più un numero
   *  e per invocarne il valore occorre aggiungere le parentesi
   *   tonde come se si invocasse una funzione
   *  Si noti come si modificano i valori
   * medinte l'utilizzo della funzione set
   * altra funzione di modifica è la funzione update
   */

  counterSignal = signal(0);

  incrementSignal() {
    this.counterSignal.set(this.counterSignal() + 1);
  }

  decrementSignal() {
    this.counterSignal.set(this.counterSignal() - 1);
  }

  /**
   *  con @ngrx/signals
   */
  state = signalState({ count: 0 });

  incrementCount() {
    patchState(this.state, (state) => ({ count: state.count + 1 }));
  }
  decrementCount() {
    patchState(this.state, (state) => ({ count: state.count - 1 }));
  }
}
