import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface ColorPropElement {
  colorProp: string;
  descrizione: string;
}

const ELEMENT_DATA: ColorPropElement[] = [
  {
    colorProp: 'theme-type',
    descrizione: `[Facoltativo] Specifica il tipo di tema, chiaro o scuro. La scelta di un tema chiaro o scuro determina i colori di sfondo e di primo piano utilizzati in tutti i componenti.`,
  },
  {
    colorProp: 'primary',
    descrizione: `[Facoltativo] Specifica la palette da utilizzare per la palette dei colori primari dell'app. (Nota: le palettes secondarie, neutre e delle varianti neutre descritte nelle specifiche M3 verranno scelte automaticamente in base alla palette primaria, per garantire una combinazione di colori armoniosa).`,
  },
  {
    colorProp: 'tertiary',
    descrizione: `[Facoltativo] Specifica la palette da utilizzare per la tavolozza dei colori terziari dell'app.`,
  },
];

@Component({
  selector: 'app-theme-property',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './theme-property.component.html',
  styleUrl: './theme-property.component.scss',
})
export class ThemePropertyComponent {
  displayedColumns: string[] = ['colorProp', 'descrizione'];
  dataSource = ELEMENT_DATA;
}
