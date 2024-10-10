import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * Dopo withState che inizializza lo stato in signalStore, introduciamo un'altra
 * proprietà fondamentale di signalStore withMethods che racchiude l'insieme dei metodi
 * che variano lo stato.
 * -- argomento fisso è store che "avvolge state" [vedremo esempi con altri args]
 * L'azione di increment lo si intuisce incrementa il valore di count.
 * La funzione che mette le mani sullo stato è patchState e qui si presenta con una caratteristica
 * interessante: dipende dallo stato precedente ( sarebbe un'update nel signal nativo). La parte su cui riflettere
 * è
 *          (state) => ({ count: state.count + 1 })
 * cos'è questa forma? Ebbene sfogliando la rete la forma () => ({}) è equivalente a () => return {}.
 * Con l'aggiunta di withMethods vediamo come possiamo variare lo stato andando nel componente
 *
 *
 * withHooks è un argomento di storeSignal che contiene due metodi di chiara comprensione:
 * onInit   che viene eseguito quando lo staore viene iniettato
 *
 * onDestroy che viene eseguito quando l'iniettore è distrutto col componente
 * osservare l'intreccio tra l'onInit nell'hook e il click nel template
 *
 */

export const CounterStore = signalStore(
  withState({ count: 0 }),
  withMethods((store) => ({
    increment(): void {
      patchState(store, (state) => ({ count: state.count + 1 }));
    },
  })),
  withHooks({
    onInit(store) {
      // incrementa count ogni 2 secondi
      interval(2_000)
        // unsubscribe automatico quando lo store è distrutto
        .pipe(takeUntilDestroyed())
        .subscribe(() => store.increment());
    },
    onDestroy(store) {
      console.log('count onDestroy', store.count());
    },
  })
);
