import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-observable-list',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDivider,
    AsyncPipe,
  ],
  templateUrl: './observable-list.component.html',
  styleUrl: './observable-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableListComponent {
  readonly #cd = inject(ChangeDetectorRef);
  data = input<Observable<any>>();
  subscribe = output<string>();
  pokemons: string[] = [];

  ngOnInit(): void {
    this.data()?.subscribe((newPkm) => {
      this.pokemons = [...this.pokemons, ...newPkm];
      this.#cd.markForCheck();
    });
  }

  onSubscribe(email: string) {
    this.subscribe.emit(email);
  }
}
