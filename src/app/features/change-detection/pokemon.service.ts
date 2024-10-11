import { Injectable, signal } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { BehaviorSubject, Observable } from 'rxjs';

export const ANONYMOUS_POKEMON: Pokemon = {
  name: 'Umbreon',
  tipo: 'Buio',
};

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  #subject = new BehaviorSubject(ANONYMOUS_POKEMON);

  pokemon$: Observable<Pokemon> = this.#subject.asObservable();

  pokemon = signal<Pokemon>(ANONYMOUS_POKEMON);

  loadPokemon(pokemon: Pokemon) {
    console.log(pokemon);
    this.#subject.next(pokemon);
  }

  updatePokemon(pokemon: Pokemon) {
    this.pokemon.set(pokemon);
  }
}
