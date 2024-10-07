import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { TodosHttpService } from '../../todos-http/todos-http.service';
import { initialState } from './state.init';
import { finalize } from 'rxjs/operators';
import { Todo } from './todos.model';

export const TodosHttpStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, todosService = inject(TodosHttpService)) => ({
    loadAll() {},

    addTodo(title: string) {},

    updateTodo(id: string, completed: boolean) {},

    deleteTodo(id: string) {},
  }))
);
