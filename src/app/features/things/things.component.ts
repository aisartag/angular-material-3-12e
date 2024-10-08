import {
  Component,
  effect,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import { ThingsService } from './things.service';
import { AsyncPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { Thing } from './things.model';
import { ThingsStore } from './things.store';

@Component({
  selector: 'app-things',
  standalone: true,
  imports: [AsyncPipe, MatListModule],
  templateUrl: './things.component.html',
  styleUrl: './things.component.scss',
})
export class ThingsComponent {
  readonly store = inject(ThingsStore);

  constructor() {
    effect(() => {
      console.log(this.store.things());
    });
  }
}
