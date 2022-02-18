import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialLoginComponent } from './pagina-inicial-login.component';

describe('PaginaInicialLoginComponent', () => {
  let component: PaginaInicialLoginComponent;
  let fixture: ComponentFixture<PaginaInicialLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInicialLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInicialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
