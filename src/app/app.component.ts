import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NovaOperacaoComponent } from './nova-operacao/nova-operacao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  addOperacao():void{
    const dialogRef = this.dialog.open(NovaOperacaoComponent,{
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result =>{
       
    });
  }
}
