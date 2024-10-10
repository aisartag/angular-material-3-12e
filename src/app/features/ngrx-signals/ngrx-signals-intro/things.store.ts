import { signalStore, withState } from '@ngrx/signals';
import { Thing } from './thing.model';

export type ThingsFilter = 'all' | 'pending' | 'completed';

type ThingsState = {
  things: Thing[];
  isLoading: boolean;
  filter: ThingsFilter;
};

const initialState: ThingsState = {
  things: [],
  isLoading: false,
  filter: 'all',
};

export const ThingsStore = signalStore(withState(initialState));
