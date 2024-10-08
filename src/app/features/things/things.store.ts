import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Thing } from './things.model';
import { inject } from '@angular/core';
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
        tap(() => patchState(store, { loading: true })),
        switchMap(() => {
          return thingsService.getAll().pipe(
            tapResponse({
              next: (things: Thing[]) => patchState(store, { things }),
              error: console.error,
              finalize: () => patchState(store, { loading: false }),
            })
          );
        })
      )
    ),

    toggleThing: rxMethod<{ id: string; completed: boolean }>(
      pipe(
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
              error: console.error,
            })
          );
        })
      )
    ),
  })),
  withHooks({
    onInit(store) {
      store.loadAll();
    },
  })
);
