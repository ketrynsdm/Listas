import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { TarefasService } from "./tarefas.service";

describe('CaixaDeEntradaComponent', () => {
    let component: TarefasService;
    let fixture: ComponentFixture<TarefasService>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ TarefasService,
          FormBuilder,
          TarefasService 
         ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(TarefasService);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('Botão esta adcionando item', () => {
      expect(component).toBeTruthy();
    });
    it('testando funão adcionar', () => {
      expect(component).toBeTruthy();
    });
  
    
  });