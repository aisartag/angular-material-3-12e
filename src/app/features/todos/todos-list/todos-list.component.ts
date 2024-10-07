import { Component, effect, inject, OnInit, viewChild } from '@angular/core';
import { TodosStore } from '../store/todos.store';
import { TodosFilter } from '../store/state.init';

import { MatFormField } from '@angular/material/form-field';
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
import { TodosListInfoComponent } from '../todos-list-info/todos-list-info.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    MatButtonToggleModule,
    MatButtonToggleGroup,
    MatButtonModule,
    MatListModule,
    MatProgressSpinner,
    NgStyle,
    TodosListInfoComponent,
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
})
export class TodosListComponent implements OnInit {
  store = inject(TodosStore);
  readonly dialog = inject(MatDialog);

  filter = viewChild.required(MatButtonToggleGroup);

  constructor() {
    effect(() => {
      const filter = this.filter();
      filter.value = this.store.filter();
    });
  }

  ngOnInit(): void {
    this.loadTodos().then(() => console.log('Todos loaded'));
  }

  async loadTodos() {
    await this.store.loadAll();
  }

  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }

  async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();
    this.store.deleteTodo(id);
  }

  async onTodoToggled(id: string, completed: any) {
    await this.store.updateTodo(id, completed);
  }

  onFilterTodos(event: MatButtonToggleChange) {
    const filter = event.value as TodosFilter;
    this.store.updateFilter(filter);
  }

  openModalInfo() {
    console.log('open modal info');
    const dialofRef = this.dialog.open(TodosListInfoComponent);
  }
}
