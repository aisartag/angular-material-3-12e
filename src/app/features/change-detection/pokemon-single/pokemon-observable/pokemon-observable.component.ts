import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../pokemon.model';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-pokemon-observable',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDivider,
    AsyncPipe,
  ],
  templateUrl: './pokemon-observable.component.html',
  styleUrl: '../pokemon-childs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonObservableComponent {
  pokemon$ = input<Observable<Pokemon>>();

  subscribe = output<string>();

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }
}
