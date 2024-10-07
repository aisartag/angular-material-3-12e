import { Component, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todos-list-info',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './todos-list-info.component.html',
  styleUrl: './todos-list-info.component.scss',
})
export class TodosListInfoComponent {
  readonly dialogRef = inject(MatDialogRef<TodosListInfoComponent>);

  onClose() {
    this.dialogRef.close();
  }
}
