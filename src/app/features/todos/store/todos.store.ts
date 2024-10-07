import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
// import { Todo } from './todos.model';
import { computed, inject } from '@angular/core';
import { TodosService } from '../todos.service';
import { initialState, TodosFilter } from './state.init';

export const TodosStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, todosService = inject(TodosService)) => ({
    loadAll: async () => {
      patchState(store, { loading: true });
      const todos = await todosService.getTodos();
      patchState(store, { todos: todos, loading: false });
    },

    addTodo: async (title: string) => {
      const todo = await todosService.addTodo({ title, completed: false });
      patchState(store, (state) => ({
        todos: [...state.todos, todo],
      }));
    },

    deleteTodo: async (id: string) => {
      await todosService.deleteTodo(id);

      patchState(store, (state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    },

    async updateTodo(id: string, completed: boolean) {
      await todosService.updateTodo(id, completed);

      patchState(store, (state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed } : todo
        ),
      }));
    },

    updateFilter: (filter: TodosFilter) => {
      console.log('updateFilter', filter);
      patchState(store, { filter });
    },
  })),
  withComputed((state) => ({
    filteredTodos: computed(() => {
      const todos = state.todos();

      switch (state.filter()) {
        case 'all':
          return todos;

        case 'pending':
          return todos.filter((todo) => !todo.completed);

        case 'completed':
          return todos.filter((todo) => todo.completed);
      }
    }),
  }))
);
