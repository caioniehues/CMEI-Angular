import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioEditComponent } from './perfil-usuario-edit.component';

describe('PerfilUsuarioEditComponent', () => {
  let component: PerfilUsuarioEditComponent;
  let fixture: ComponentFixture<PerfilUsuarioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
