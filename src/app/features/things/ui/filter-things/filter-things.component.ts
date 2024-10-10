import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import {
  MatButtonToggleGroup,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { TodosFilter } from '../../../todos/store/state.init';

@Component({
  selector: 'app-filter-things',
  standalone: true,
  imports: [MatButtonToggleModule, MatButtonToggleGroup],
  templateUrl: './filter-things.component.html',
  styleUrl: './filter-things.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterThingsComponent {
  filterValue = input<TodosFilter>();
  filterUpdate = output<TodosFilter>();
}
