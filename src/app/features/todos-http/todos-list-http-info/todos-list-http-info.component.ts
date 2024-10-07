import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todos-list-http-info',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './todos-list-http-info.component.html',
  styleUrl: './todos-list-http-info.component.scss',
})
export class TodosListHttpInfoComponent {
  readonly dialogRef = inject(MatDialogRef<TodosListHttpInfoComponent>);

  onClose() {
    this.dialogRef.close();
  }
}
