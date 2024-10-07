import { Todo } from './todos.model';

export type TodosFilter = 'all' | 'pending' | 'completed';

export type TodosState = {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter;
  error: string | null | undefined;
};

export const initialState: TodosState = {
  todos: [],
  loading: false,
  filter: 'all',
  error: null,
};
