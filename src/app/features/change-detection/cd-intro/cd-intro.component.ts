import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cd-intro',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './cd-intro.component.html',
  styleUrl: './cd-intro.component.scss',
})
export class CdIntroComponent {}
