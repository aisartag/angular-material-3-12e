import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PreBuiltThemesComponent } from '../ui/pre-built-themes/pre-built-themes.component';
import { ThemePropertyComponent } from '../ui/theme-property/theme-property.component';
import { CreateLayoutComponent } from '../ui/create-layout/create-layout.component';

@Component({
  selector: 'app-material-info',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    PreBuiltThemesComponent,
    ThemePropertyComponent,
    CreateLayoutComponent,
  ],
  templateUrl: './material-info.component.html',
  styleUrl: './material-info.component.scss',
})
export class MaterialInfoComponent {}
