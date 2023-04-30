import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPessoaComponent } from './formulario-pessoa.component';

describe('FormularioPessoaComponent', () => {
  let component: FormularioPessoaComponent;
  let fixture: ComponentFixture<FormularioPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
