import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './features/todos/store/todos.model';
import { TodoData } from './features/todos/store/mock-data';

export class AppData implements InMemoryDbService {
  createDb(): { todos: Todo[] } {
    const todos = TodoData.todos;
    return { todos };
  }
}
