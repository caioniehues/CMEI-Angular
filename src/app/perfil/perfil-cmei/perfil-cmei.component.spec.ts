import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCmeiComponent } from './perfil-cmei.component';

describe('PerfilCmeiComponent', () => {
  let component: PerfilCmeiComponent;
  let fixture: ComponentFixture<PerfilCmeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCmeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCmeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
