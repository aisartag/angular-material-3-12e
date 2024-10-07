import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { Todo } from '../todos/store/todos.model';
import { HttpErrorService } from '../../shared/utils/http-error.service';

@Injectable({
  providedIn: 'root',
})
export class TodosHttpService {
  // Just enough here for the code to compile
  private todosUrl = 'api/todos';

  private http = inject(HttpClient);

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getTodosHttp(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl, this.httpOptions).pipe(
      tap(() => console.log('In http get pipeline')),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  /**
   * Result è tutta la lista! Non necessariamente vero in una sistuazione reale
   * @param todo
   * @returns
   */

  //  { ...todo, id: Math.random().toString(36) }
  addTodo(todo: Partial<Todo>): Observable<Todo[]> {
    return this.http
      .post<Todo>(
        this.todosUrl,
        { ...todo, id: Math.random().toString(36) },
        this.httpOptions
      )
      .pipe(
        switchMap(() => this.getTodosHttp()),
        catchError((err: HttpErrorResponse) => this.handleError(err))
      );
  }

  updateTodoById(id: string, completed: boolean) {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url, this.httpOptions).pipe(
      tap((todo) => console.log('In http get pipeline todo', todo)),
      switchMap((todo) => this.updateTodo({ ...todo, completed })),
      switchMap(() => this.getTodosHttp()),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  updateTodo(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, this.httpOptions).pipe(
      // switchMap(() => this.getTodosHttp()),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  deleteTodo(id: string) {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url, this.httpOptions).pipe(
      switchMap(() => this.getTodosHttp()),
      tap((result) => console.log(result)),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  private errorService = inject(HttpErrorService);
  handleError(err: HttpErrorResponse): Observable<never> {
    const formattedMessage = this.errorService.formatError(err);
    return throwError(() => formattedMessage);
    //throw formattedMessage;
  }
}
