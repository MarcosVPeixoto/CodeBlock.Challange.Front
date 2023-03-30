import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OperacaoCargueiro } from 'src/app/models/operacaoCargueiro';
import { OperacaoService } from 'src/app/services/operacao.service';

@Component({
  selector: 'app-nova-operacao',
  templateUrl: './nova-operacao.component.html',
  styleUrls: ['./nova-operacao.component.css']
})
export class NovaOperacaoComponent implements OnInit{
  operacaoCargueiro: OperacaoCargueiro = {classeCargueiro: 0, dataEntrada: new Date, dataSaida: new Date};
  animal: any;
  stepHour: any;
  stepMinute: any;
  touchUi: any;  
  picker: any;
  date: any;
  data = new Date;
  dataEntrada: Date = new Date;
  dataSaida: Date = new Date;
  horaEntrada: Date = new Date;
  horaSaida: Date = new Date;
   
  constructor(
    public dialogRef: MatDialogRef<NovaOperacaoComponent>,
    private operacaoService: OperacaoService
    ){}
  ngOnInit(): void {
    
  }
  cadastrar(){
    this.operacaoCargueiro.dataEntrada = new Date(this.dataEntrada.getFullYear(), this.dataEntrada.getMonth(),this.dataEntrada.getDate(),this.horaEntrada.getHours(),this.horaEntrada.getMinutes());
    this.operacaoCargueiro.dataSaida = new Date(this.dataSaida.getFullYear(), this.dataSaida.getMonth(),this.dataSaida.getDate(),this.horaSaida.getHours(),this.horaSaida.getMinutes());    
    debugger
    this.operacaoCargueiro.classeCargueiro = Number(this.operacaoCargueiro.classeCargueiro);
    this.operacaoService.addOperacao(this.operacaoCargueiro).subscribe(x =>{
      this.close()
    });
  }
  close(): void{
    this.dialogRef.close();
  }
}
