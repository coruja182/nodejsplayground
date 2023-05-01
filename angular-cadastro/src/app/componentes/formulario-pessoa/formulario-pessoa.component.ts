import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from 'src/app/servicos/pessoa.service';

@Component({
  selector: 'app-formulario-pessoa',
  templateUrl: './formulario-pessoa.component.html',
  styleUrls: ['./formulario-pessoa.component.scss'],
})
export class FormularioPessoaComponent implements OnInit {
  meuFormulario: FormGroup;

  /** método construtor deste componente */
  constructor(
    private formBuilder: FormBuilder,
    private servicoPessoa: PessoaService,
    private rotaAtiva: ActivatedRoute,
  ) {

    // inicializando o formulario
    this.meuFormulario = this.formBuilder.group({
      id: new FormControl(undefined),
      nome: new FormControl(undefined, [Validators.required]),
      cpf: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(11), // comprimento mínimo de 11 dígitos
        Validators.pattern('\\d+'), // só permite dígitos
      ]),
    });
  }

  async ngOnInit(): Promise<void> {

    // aqui eu recupero o ID que foi passado pra rota, no caso de edição
    // no modo de adicionar pessoa esse ID vai ser undefined
    const idPessoa = this.rotaAtiva.snapshot.paramMap.get('id');

    if (idPessoa) {
      const pessoa = await this.servicoPessoa.buscarPessoaPorId(Number(idPessoa))
      this.meuFormulario.get('id')?.setValue(pessoa.id)
      this.meuFormulario.get('nome')?.setValue(pessoa.nome)
      this.meuFormulario.get('cpf')?.setValue(pessoa.cpf)
    }
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
