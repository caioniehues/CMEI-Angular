import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialCadastroComponent } from './pagina-inicial-cadastro.component';

describe('PaginaInicialCadastroComponent', () => {
  let component: PaginaInicialCadastroComponent;
  let fixture: ComponentFixture<PaginaInicialCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInicialCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInicialCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
