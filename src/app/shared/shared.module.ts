import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './component/caixa-de-entrada/caixa-de-entrada.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ItemComponent } from './component/item/item.component';
import { ListaComponent } from './component/lista/lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TarefasService } from './tarefasService/tarefas.service';


@NgModule({
  declarations: [CaixaDeEntradaComponent, ItemComponent, ListaComponent],
  providers: [TarefasService],
  imports: [
    CommonModule,
    BrowserModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [CaixaDeEntradaComponent, ItemComponent, ListaComponent]
})
export class SharedModule { }
