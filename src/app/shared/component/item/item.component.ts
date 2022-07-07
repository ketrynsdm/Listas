import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TarefasService } from 'src/app/shared/tarefasService/tarefas.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: string = '';
  @Output() listar= new EventEmitter<string>();

  lista: any = ['']
  subject: any;

  constructor(
    private fb: FormBuilder
  ) { }

  profileForm = this.fb.group({
    firstName: ['']
  })


  ngOnInit(): void {
  }

  excluir(item: string) {
    this.listar.emit(item);
    console.log(this.listar.emit(item));
    

  }


}








