import { Component, OnInit } from '@angular/core';
import { Carga } from 'src/app/models/carga';
import { OperacaoService } from 'src/app/services/operacao.service';
import { formatDate} from '@angular/common'
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {  
  cargas: Carga[] = [];  
  filtro = {mes:'', ano: ''};
  pagina = 1;
  displayedColumns: string[] = ['carga-tipo-minerio', 'carga-data-recebimento', 'carga-valor']
  totalItemCount = 0;
  minerais = ["Inflamável", "Risco Biológico", "Refrigerado", "Sem características especiais"];
  constructor(private operacaoService: OperacaoService){

  }
  ngOnInit(): void {
    let dataHoje = new Date();
    let mes = dataHoje.getMonth() + 1;
    let ano = dataHoje.getFullYear();
    this.operacaoService.getCargas(mes, ano, this.pagina).subscribe(response =>{
      this.cargas = response.cargasDto;
      this.totalItemCount = response.totalItemCount;
    });
  }
  filtrar(){
    this.operacaoService.getCargas(Number(this.filtro.mes), Number(this.filtro.ano), Number(this.pagina)).subscribe(response =>{
      this.cargas = response.cargasDto;
      this.totalItemCount = response.totalItemCount;
    });
  }
  handlePageEvent(event : PageEvent){
    this.pagina = event.pageIndex;
    this.operacaoService.getCargas(Number(this.filtro.mes), Number(this.filtro.ano), Number(this.pagina)).subscribe(response =>{
      this.cargas = response.cargasDto;
      this.totalItemCount = response.totalItemCount;
    });
  }
  
}
