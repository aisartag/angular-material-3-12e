import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ANONYMOUS_POKEMON, PokemonService } from '../pokemon.service';

import { PokemonObservableComponent } from './pokemon-observable/pokemon-observable.component';
import { PokemonImmutableComponent } from './pokemon-immutable/pokemon-immutable.component';
import { AsyncPipe } from '@angular/common';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { Pokemon } from '../pokemon.model';
import { PokemonMutableComponent } from './pokemon-mutable/pokemon-mutable.component';
import { PokemonSignalComponent } from './pokemon-signal/pokemon-signal.component';

@Component({
  selector: 'app-pokemon-single',
  standalone: true,
  imports: [
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    PokemonObservableComponent,
    PokemonImmutableComponent,
    AsyncPipe,
    PokemonMutableComponent,
    PokemonSignalComponent,
  ],
  templateUrl: './pokemon-single.component.html',
  styleUrl: './pokemon-single.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonSingleComponent {
  readonly pokemonService = inject(PokemonService);
  pokemon: Pokemon = ANONYMOUS_POKEMON;

  private fb = inject(FormBuilder);
  pokemonForm = this.fb.group({
    name: [null, Validators.required],
    tipo: [null, Validators.required],
  });

  tipi = [
    'Normale',
    'Lotta',
    'Volante',
    'Veleno',
    'Terra',
    'Roccia',
    'Coleottero',
    'Spettro',
    'Acciaio',
    'Fuoco',
    'Acqua',
    'Erba',
    'Elettro',
    'Psico',
    'Ghiaccio',
    'Drago',
    'Buio',
    'Folletto',
  ];

  onSubmit(): void {
    if (this.pokemonForm.invalid) {
      return;
    }

    // modifica pokemon locale usando la mutabilità delle proproetà dell'oggetto Pokemon
    // rilevamento modifiche OnPush non si attiverà proviamo ad abilitarlo e disabilitarlo
    this.pokemon.name = this.pokemonForm.value.name as unknown as string;
    this.pokemon.tipo = this.pokemonForm.value.tipo as unknown as string;

    console.log(this.pokemon.name);

    this.changePokemonName(this.pokemonForm.value as unknown as Pokemon);
  }

  subscribe(email: string) {
    // this.newsLetterService.subscribe(email);
    console.log('email subscribe', email);
  }

  changePokemonName(pokemon: Pokemon) {
    this.pokemonService.loadPokemon(pokemon); // aggiorna l'osservabile
    this.pokemonService.updatePokemon(pokemon); // aggiorna il signal
  }
}
