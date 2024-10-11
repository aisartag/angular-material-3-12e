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
  selector: 'app-pokemon-immutable',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDivider, MatButtonModule],
  templateUrl: './pokemon-immutable.component.html',
  styleUrl: '../pokemon-childs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonImmutableComponent {
  pokemon = input.required<Pokemon | null>();

  subscribe = output<string>();

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }
}
