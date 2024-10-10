import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CodeIntroComponent } from './ui/code-intro/code-intro.component';
import { ThingsStore } from './things.store';
import { JsonPipe } from '@angular/common';
import { PresentationIntroComponent } from './ui/presentation-intro/presentation-intro.component';

@Component({
  selector: 'app-ngrx-signals-intro',
  standalone: true,
  imports: [CodeIntroComponent, JsonPipe, PresentationIntroComponent],
  templateUrl: './things.component.html',
  styleUrl: './things.component.scss',
  providers: [ThingsStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThingsComponent {
  store = inject(ThingsStore);
}
