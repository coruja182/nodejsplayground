import { Component, OnInit } from '@angular/core';
import { IPessoa } from 'src/app/modelos/pessoa';
import { PessoaService } from 'src/app/servicos/pessoa.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {

  listaPessoas: Array<IPessoa> = []

  constructor(private servicoPessoa: PessoaService) {
  }

  private async carregarListaPessoas() {
    this.listaPessoas = await this.servicoPessoa.buscarTodasAsPessoas();
  }

  async ngOnInit(): Promise<void> {
    this.carregarListaPessoas()
  }

  async deletarPessoa(pessoa: IPessoa): Promise<void> {
    this.servicoPessoa.deletarPessoaPorId(pessoa.id)
    // recarrega lista de pessoas após deletar 1 elemento
    this.carregarListaPessoas()
  }

}
