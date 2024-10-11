import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Pokemon } from '../../pokemon.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-pokemon-mutable',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDivider,
    JsonPipe,
  ],
  templateUrl: './pokemon-mutable.component.html',
  styleUrl: '../pokemon-childs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonMutableComponent {
  pokemon = input.required<Pokemon | null>();

  subscribe = output<string>();

  pokemonDebug() {
    console.debug(this.pokemon());
  }

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }
}
