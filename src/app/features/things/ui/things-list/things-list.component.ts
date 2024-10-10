import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Thing } from '../../things.model';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-things-list',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatIconModule, NgStyle],
  templateUrl: './things-list.component.html',
  styleUrl: './things-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThingsListComponent {
  things = input<Thing[]>();
  loading = input<boolean>();

  toggleThing = output<{ id: string; completed: boolean }>();
  deleteThing = output<string>();

  pippa(event: any) {
    console.log(event);
    console.log(event.options[0].value, event.options[0].selected);
  }
}
