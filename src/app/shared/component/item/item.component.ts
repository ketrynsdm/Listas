import { Component, Input, OnInit, Output, SimpleChange } from '@angular/core';
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

  lista: any = ['']
  subject: any;

  constructor(
    private tarefasService: TarefasService,
    private fb: FormBuilder
  ) { }

  profileForm = this.fb.group({
    firstName: ['']
  })


  ngOnInit(): void {
  }

  excluir(item: string) {
    this.tarefasService.excluir(item);

  }


}








