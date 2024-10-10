import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-code-intro',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './code-intro.component.html',
  styleUrl: './code-intro.component.scss',
})
export class CodeIntroComponent {}
