import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { TarefasService } from '../../tarefasService/tarefas.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() lista: string[] = [];
  @Output() listar = new EventEmitter<any>() ;
  
  constructor(
    private tarefaService: TarefasService
    ) { }
    
    
    ngOnInit(): void {
    }
    
    deletar() {
      // ...Executar processo de deletar item da lista;
      this.listar.emit('');
    }


}
