import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-mutable-list',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDivider,
  ],
  templateUrl: './mutable-list.component.html',
  styleUrl: './mutable-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MutableListComponent {
  readonly #cd = inject(ChangeDetectorRef);

  // @Input() pokemons!: string[];
  data = input<string[]>();
  subscribe = output<string>();

  sottoscrivi(email: string) {
    this.subscribe.emit(email);
  }

  refresh() {
    this.#cd.detectChanges();
  }
}
