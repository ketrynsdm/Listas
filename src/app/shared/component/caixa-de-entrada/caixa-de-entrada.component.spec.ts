import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { TarefasService } from '../../tarefasService/tarefas.service';

import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

describe('CaixaDeEntradaComponent', () => {
  let component: CaixaDeEntradaComponent;
  let fixture: ComponentFixture<CaixaDeEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaDeEntradaComponent,
        FormBuilder,
        TarefasService 
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaDeEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Botão esta adcionando item', () => {
    expect(component).toBeTruthy();
  });

  
});
