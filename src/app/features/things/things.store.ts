import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Thing } from './things.model';
import { computed, inject } from '@angular/core';
import { ThingsService } from './things.service';
import { pipe, switchMap, tap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

export type ThingsFilter = 'all' | 'pending' | 'completed';

export type ThingsState = {
  things: Thing[];
  loading: boolean;
  filter: ThingsFilter;
  error: string | null | undefined;
};

export const initialState: ThingsState = {
  things: [],
  loading: false,
  filter: 'all',
  error: null,
};

export const ThingsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, thingsService = inject(ThingsService)) => ({
    loadAll: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() => {
          return thingsService.getAll().pipe(
            tapResponse({
              next: (things: Thing[]) => patchState(store, { things }),
              error: (err: string) => patchState(store, { error: err }),
              finalize: () => patchState(store, { loading: false }),
            })
          );
        })
      )
    ),

    addThing: rxMethod<string>(
      pipe(
        tap((_) => patchState(store, { loading: true, error: null })),

        switchMap((text) => {
          return thingsService.addThing({ text, completed: false }).pipe(
            tapResponse({
              next: (thing) => {
                // console.log('thing', thing);
                patchState(store, (state) => ({
                  things: thing ? [...state.things, thing] : [...state.things],
                }));
              },
              error: (err: string) => patchState(store, { error: err }),
              finalize: () => patchState(store, { loading: false }),
            })
          );
        })
      )
    ),

    deleteThing: rxMethod<string>(
      pipe(
        tap((_) => patchState(store, { loading: true, error: null })),
        switchMap((id) => {
          return thingsService.deleteThing(id).pipe(
            tapResponse({
              next: (thing) =>
                patchState(store, (state) => ({
                  things: state.things.filter((t) => t.id !== id),
                })),

              error: (err: string) => patchState(store, { error: err }),
              finalize: () => patchState(store, { loading: false }),
            })
          );
        })
      )
    ),

    toggleThing: rxMethod<{ id: string; completed: boolean }>(
      pipe(
        tap((_) => patchState(store, { loading: true, error: null })),
        switchMap((props) => {
          return thingsService.toggleThing(props.id, props.completed).pipe(
            tapResponse({
              next: (thing) =>
                patchState(store, (state) => ({
                  things: state.things.map((thing) =>
                    thing.id === props.id
                      ? { ...thing, completed: props.completed }
                      : thing
                  ),
                })),
              error: (err: string) => patchState(store, { error: err }),
              finalize: () => patchState(store, { loading: false }),
            })
          );
        })
      )
    ),

    updateFilter: (filter: ThingsFilter) => {
      patchState(store, { filter });
    },
  })),
  withComputed((state) => ({
    filteredThings: computed(() => {
      const things = state.things();
      switch (state.filter()) {
        case 'all':
          return [...things];
        case 'pending':
          return things.filter((thing) => !thing.completed);
        case 'completed':
          return things.filter((thing) => thing.completed);
      }
    }),
  })),
  withHooks({
    onInit(store) {
      store.loadAll();
    },
  })
);
