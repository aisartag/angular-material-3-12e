import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

interface SchemaElement {
  nome: string;
  descrizione: string;
}

const ELEMENT_DATA: SchemaElement[] = [
  {
    nome: 'address-form',
    descrizione: `Componente con un gruppo di moduli che utilizza i controlli del modulo Material Design per richiedere un indirizzo di spedizione`,
  },
  {
    nome: 'navigation',
    descrizione: `Crea un componente con un sidenav Material Design reattivo e una barra degli strumenti per mostrare il nome dell'app`,
  },
  {
    nome: 'dashboard',
    descrizione: `Componente con più schede Material Design e menu allineati in un layout a griglia`,
  },
  {
    nome: 'table',
    descrizione: `Genera un componente con una tabella dati Material Design che supporta l'ordinamento e la paginazione`,
  },
  {
    nome: 'tree',
    descrizione: `Componente che visualizza interattivamente una struttura di cartelle nidificate utilizzando il <mat-tree>componente`,
  },
];

@Component({
  selector: 'app-create-layout',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './create-layout.component.html',
  styleUrl: './create-layout.component.scss',
})
export class CreateLayoutComponent {
  displayedColumns: string[] = ['nome', 'descrizione'];
  dataSource = ELEMENT_DATA;
}
