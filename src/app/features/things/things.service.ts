import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Thing } from './things.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

const apiUrl = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ThingsService {
  private http = inject(HttpClient);

  #url = `${apiUrl}things`;

  getAll(): Observable<Thing[]> {
    return this.http.get<Thing[]>(this.#url).pipe(catchError(this.handleError));
  }

  toggleThing(id: string, completed: boolean): Observable<any> {
    const url = `${this.#url}/${id}`;
    console.log('toggleThing************************');
    return this.http
      .patch(url, { completed }, httpOptions)
      .pipe(catchError(this.handleError));
  }

  addThing(thing: Partial<Thing>): Observable<any> {
    return this.http
      .post(this.#url, thing, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteThing(id: string): Observable<any> {
    const url = `${this.#url}/${id}`;
    return this.http.delete(url).pipe(
      tap((t) => console.log(t)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () =>
        new Error('Si è verificato un errore imprevisto; ritentare più tardi.')
    );
  }
}
