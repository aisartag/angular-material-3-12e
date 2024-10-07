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
    loadAll() {
      patchState(store, { loading: true, error: null });
      todosService.getTodosHttp().subscribe((todos) => {
        console.log('todos in subscribe', todos);
        patchState(store, { todos: todos, loading: false });
      });
    },

    addTodo(title: string) {
      patchState(store, { loading: true, error: null });
      todosService
        .addTodo({ title, completed: false })
        .pipe(
          finalize(() => {
            patchState(store, { loading: false });
          })
        )
        .subscribe({
          next: (todos) => {
            patchState(store, { todos });
          },
          error: (err: string) => {
            patchState(store, { error: err });
          },
          complete: () => patchState(store, { loading: false }),
        });
    },

    updateTodo(id: string, completed: boolean) {
      patchState(store, { loading: true, error: null });
      todosService.updateTodoById(id, completed).subscribe({
        next: (todos) => {
          patchState(store, { todos: todos, loading: false });
        },
        error: (err: string) => {
          patchState(store, { error: err, loading: false });
        },
      });
    },

    deleteTodo(id: string) {
      patchState(store, { loading: true, error: null });
      todosService
        .deleteTodo(id)
        .pipe(
          finalize(() => {
            patchState(store, { loading: false });
          })
        )
        .subscribe({
          next: (todos) => {
            console.log('next', todos);
            patchState(store, { todos });
          },
          error: (err: string) => {
            patchState(store, { error: err });
          },
          complete: () => patchState(store, { loading: false }),
        });
    },
  }))
);
