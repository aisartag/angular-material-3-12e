import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MutableListComponent } from './components/mutable-list/mutable-list.component';
import { ImmutableListComponent } from './components/immutable-list/immutable-list.component';
import { ObservableListComponent } from './components/observable-list/observable-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import { SignalListComponent } from './components/signal-list/signal-list.component';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MutableListComponent,
    ImmutableListComponent,
    ObservableListComponent,
    SignalListComponent,
  ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsComponent {
  pokemonsMut = ['abra', 'bisharp', 'carkol'];
  pokemonsImm = ['abra', 'bisharp', 'carkol'];

  pokemonsSub = new BehaviorSubject(['abra', 'bisharp', 'carkol']);
  pokemonSignal = signal(['abra', 'bisharp', 'carkol']);

  subscribe(email: string) {
    console.log(email);
  }

  addPokemon(nome: string) {
    this.addPokemonMut(nome);
    this.addPokemonImm(nome);
    this.addPokemonSub(nome);
    this.addPokemonSignal(nome);
  }

  addPokemonMut(nome: string) {
    this.pokemonsMut.push(nome);
  }

  addPokemonImm(newPokemon: string) {
    this.pokemonsImm = [...this.pokemonsImm, newPokemon];
  }

  addPokemonSub(newPokemon: string) {
    this.pokemonsSub.next([newPokemon]);
  }

  addPokemonSignal(newPokemon: string) {
    /**
     * questa modalita di aggiornamento del segnale NON
     * funziona se il componente adotta la strategia OnPush
     * perché "muta il dato ma non il riferimento"
     */
    //  his.po this.pokemonSignal().push(newPokemon);
    //   tkemonSignal.set(this.pokemonSignal());

    /**
     * l'unico modo per ottenere successo con la strategia OnPush
     * è variare l'array ma anche il suo riferimento che in genere si
     * ottine con l'operatore spread (...)
     */
    this.pokemonSignal.update((names) => [...names, newPokemon]);
    console.log(this.pokemonSignal());
  }
}
