import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PessoaService } from 'src/app/servicos/pessoa.service';

@Component({
  selector: 'app-formulario-pessoa',
  templateUrl: './formulario-pessoa.component.html',
  styleUrls: ['./formulario-pessoa.component.scss'],
})
export class FormularioPessoaComponent {
  meuFormulario: FormGroup;

  /** método construtor deste componente */
  constructor(
    private formBuilder: FormBuilder,
    private servicoPessoa: PessoaService
  ) {
    // inicializando o formulario
    this.meuFormulario = formBuilder.group({
      id: '',
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11), // comprimento mínimo de 11 dígitos
        Validators.pattern('\\d+'), // só permite dígitos
      ]),
    });
  }

  /**
   * Método/função que é chamada toda vez que o formulário é submitido
   */
  onSubmitFormulario() {
    console.log('Formulário tem valores válidos?', this.meuFormulario.valid);
    console.log('Valores obtidos do formulário', this.meuFormulario.value);
    if (this.meuFormulario.valid) {
      this.servicoPessoa.salvarPessoa(this.meuFormulario.value);
      window.alert('Cadastrado com sucesso!');
      this.meuFormulario.reset();
      this.meuFormulario.controls;
    }
  }
}
