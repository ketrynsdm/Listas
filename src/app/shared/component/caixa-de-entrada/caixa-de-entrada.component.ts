import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TarefasService } from '../../tarefasService/tarefas.service';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})

export class CaixaDeEntradaComponent implements OnInit {

  lista: any = []

  form = this.formBuilder.group({
    item: ['', Validators.required]

  })
  
  forms = FormGroup
  
  constructor(
    private tarefasService: TarefasService,
    private formBuilder: FormBuilder,
    ) { }
    
    ngOnInit(): void {
      this.tarefasService.listar().subscribe(data => {
        console.log(data)
        this.lista = data;
      })
    }
    
    Adicionar(): void {
      // const item: any = this.form.getRawValue();
      const { item }: { item: string | null } = this.form.getRawValue()
      if(item !== null){
        this.tarefasService.adicionar(item);
        this.form.reset();
      }
      
  }
  
  


}
