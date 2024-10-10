import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-thing',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIcon],
  templateUrl: './add-thing.component.html',
  styleUrl: './add-thing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddThingComponent {
  addThing = output<string>();
}
