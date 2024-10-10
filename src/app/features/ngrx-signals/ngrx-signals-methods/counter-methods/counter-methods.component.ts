import { Component, inject } from '@angular/core';
import { CounterStore } from '../counter.store';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-counter-methods',
  standalone: true,
  imports: [MatButton],
  templateUrl: './counter-methods.component.html',
  styleUrl: './counter-methods.component.scss',
  providers: [CounterStore],
})

/**
 * Se vogliamo che la vita dello store sia legata alla vita di questa componente
 * dobbiamo inserirlo nei providers [ se lo vogliamo globale aggiungere {providedIn:'root'} in CounterStore]
 */
export class CounterMethodsComponent {
  store = inject(CounterStore);
}
