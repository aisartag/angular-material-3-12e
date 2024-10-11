import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-immutable-list',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDivider,
  ],
  templateUrl: './immutable-list.component.html',
  styleUrl: './immutable-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImmutableListComponent {
  // @Input() pokemons!: string[];
  data = input<string[]>();
  subscribe = output<string>();

  onSubscribe(email: string) {
    this.subscribe.emit(email);
  }
}
