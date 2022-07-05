import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaDeEntradaComponent } from './shared/component/caixa-de-entrada/caixa-de-entrada.component';
const routes: Routes = [
  {
    path: '',
    component: CaixaDeEntradaComponent,
  },
  // {
  //   path: 'pag-lista',
  //   component: PagListaComponent,
  // },
  // {
  //   path: 'item-listado',
  //   component: ItemComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
