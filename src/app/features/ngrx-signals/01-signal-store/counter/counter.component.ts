import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  OnInit,
} from '@angular/core';
import { CounterStore } from '../counter.store';
import { MatButton } from '@angular/material/button';
import { watchState } from '@ngrx/signals';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButton],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  providers: [CounterStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {
    watchState(this.store, console.log, {
      injector: this.#injector,
    });

    setInterval(() => this.store.increment(), 2_000);
  }
  readonly #injector = inject(Injector);
  store = inject(CounterStore);
}
