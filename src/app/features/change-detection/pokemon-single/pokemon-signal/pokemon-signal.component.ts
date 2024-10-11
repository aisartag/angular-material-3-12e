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

import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-pokemon-signal',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDivider],
  templateUrl: './pokemon-signal.component.html',
  styleUrl: '../pokemon-childs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonSignalComponent {
  pokemon = input<Pokemon>();

  subscribe = output<string>();

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }
}
