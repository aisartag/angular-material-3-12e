import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  input,
  output,
  runInInjectionContext,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-signal-list',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDivider,
  ],
  templateUrl: './signal-list.component.html',
  styleUrl: './signal-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalListComponent {
  data = input<any[]>();
  subscribe = output<string>();

  onSubscribe(email: string) {
    this.subscribe.emit(email);
  }

  /**
   * Un signal può essere consumato  anche a livello programmatico
   * tramite la funzionalià effect che va inserita in un contesto
   * di iniezione tipo il constructor.
   */
  constructor() {
    effect(() => {
      console.log(this.data());
    });
  }

  /* Qualora si desidera utilizzarlo altrove deve essere avvoolto
   * in un contesto di iniezione come nell'esempio.
   *
   * NOTA: vale la regola generale che qualora si vuole utilizzare i segnali in inout
   * in una componente con changeDetection: ChangeDetectionStrategy.OnPush
   * essi devono produrre dati immutabili
   */

  // readonly injector = inject(Injector);
  // ngOnInit(): void {
  //   runInInjectionContext(this.injector, () => {
  //     effect(() => {
  //       console.log(this.data());
  //     });
  //   });
  // }
}
