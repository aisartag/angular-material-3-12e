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
import { ThingsFilter } from '../../things.store';

@Component({
  selector: 'app-filter-things',
  standalone: true,
  imports: [MatButtonToggleModule, MatButtonToggleGroup],
  templateUrl: './filter-things.component.html',
  styleUrl: './filter-things.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterThingsComponent {
  filterValue = input<ThingsFilter>();
  filterUpdate = output<ThingsFilter>();
}
