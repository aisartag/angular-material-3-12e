import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface ThemeElement {
  css: string;
  lightOrdark: string;
  colorPrimary: string;
  colorTertiary: string;
}

const ELEMENT_DATA: ThemeElement[] = [
  {
    css: 'azure-blue.css',
    lightOrdark: 'Light',
    colorPrimary: '#005cbb',
    colorTertiary: '#343dff',
  },
  {
    css: 'rose-red.css',
    lightOrdark: 'Light',
    colorPrimary: '#ba005c',
    colorTertiary: '#c00100',
  },
  {
    css: 'cyan-orange.css',
    lightOrdark: 'Dark',
    colorPrimary: '#006a6a',
    colorTertiary: '#964900',
  },
  {
    css: 'magenta-violet.css',
    lightOrdark: 'Darkt',
    colorPrimary: '#a900a9',
    colorTertiary: '#7d00fa',
  },
];

@Component({
  selector: 'app-pre-built-themes',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './pre-built-themes.component.html',
  styleUrl: './pre-built-themes.component.scss',
})
export class PreBuiltThemesComponent {
  displayedColumns: string[] = [
    'css',
    'lightOrdark',
    'colorPrimary',
    'colorTertiary',
  ];
  dataSource = ELEMENT_DATA;
}
