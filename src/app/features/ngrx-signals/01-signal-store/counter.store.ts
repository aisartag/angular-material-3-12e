import { computed, effect } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

export const CounterStore = signalStore(
  //   { providedIn: 'root' },
  withState({ count: 0 }),
  withComputed(({ count }) => ({
    doubleCount: computed(() => count() * 2),
  })),
  withMethods((store) => ({
    increment() {
      patchState(store, { count: store.count() + 1 });
    },
    decrement() {
      patchState(store, { count: store.count() - 1 });
    },
  })),
  withHooks({
    onInit(store) {
      //   // 👇 Increment the `count` every 2 seconds.
      //   interval(2_000)
      //     // 👇 Automatically unsubscribe when the store is destroyed.
      //     .pipe(takeUntilDestroyed(), tap(console.log))
      //     .subscribe(() => store.increment());
      //   effect(() => {
      //     // 👇 The effect is re-executed on state change.
      //     const state = getState(store);
      //     console.log('counter state', state);
      //   });
      //   setInterval(() => store.increment(), 1_000);
      //   watchState(store, (state) => {
      //     console.log('[watchState] counter state', state);
      //   }); // logs: { count: 0 }, { count: 1 }, { count: 2 }
      //   effect(() => {
      //     console.log('[effect] counter state', getState(store));
      //   }); // logs: { count: 2 }
      //   store.increment();
      //   store.increment();
      //   const { destroy } = watchState(store, console.log);
      //   setInterval(() => store.increment(), 1_000);
      //   // 👇 Stop watching after 5 seconds.
      //   setTimeout(() => destroy(), 5_000);
    },
    // onDestroy(store) {
    //   console.log('count on destroy', store.count());
    // },
  })
);
