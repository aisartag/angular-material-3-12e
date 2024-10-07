import { Component, effect, inject, OnInit } from '@angular/core';
import { TodosHttpStore } from '../../todos/store/todos.store.http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {
  MatButtonToggleChange,
  MatButtonToggleGroup,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { NgStyle } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TodosListHttpInfoComponent } from '../todos-list-http-info/todos-list-http-info.component';
import { Todo } from '../../todos/store/todos.model';

@Component({
  selector: 'app-todos-list-http',
  standalone: true,
  imports: [
    MatIcon,
    MatFormFieldModule,
    MatInput,
    MatButtonModule,
    MatButtonToggleGroup,
    MatButtonToggleModule,
    MatListModule,
    MatProgressSpinner,
    MatSnackBarModule,
    NgStyle,
  ],
  templateUrl: './todos-list-http.component.html',
  styleUrl: './todos-list-http.component.scss',
})
export class TodosListHttpComponent implements OnInit {
  store = inject(TodosHttpStore);
  readonly dialog = inject(MatDialog);
  private _snackbar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      console.log('Todos loaded', this.store.todos());
      const error = this.store.error();
      if (error) {
        console.log('error', error);
        this._snackbar.open(error, 'Close', { duration: 5000 });
      }
    });
  }

  // , {
  //   horizontalPosition: 'center',
  //   verticalPosition: 'top',
  //   duration: 5000,
  // }

  ngOnInit(): void {
    this.loadTodos();
    // console.log('Todos loaded', this.store.todos());
  }

  loadTodos() {
    this.store.loadAll();
  }

  async onAddTodo(title: string) {
    try {
      this.store.addTodo(title);
    } catch (err) {
      console.log('error in component', err);
    }
  }

  async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();
    this.store.deleteTodo(id);
  }

  async onTodoToggled(id: string, completed: any) {
    this.store.updateTodo(id, completed);
  }

  onFilterTodos(event: MatButtonToggleChange) {
    // const filter = event.value as TodosFilter;
    // this.store.updateFilter(filter);
  }

  openModalInfo() {
    console.log('open modal info');
    const dialofRef = this.dialog.open(TodosListHttpInfoComponent);
  }
}
