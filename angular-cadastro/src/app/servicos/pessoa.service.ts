import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPessoa } from '../modelos/pessoa';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private readonly urlBackendPessoa: string = 'http://localhost:3000/pessoas';

  // injetando os serviços necessário para chamadas http
  constructor(private clienteHttp: HttpClient) {}

  async salvarPessoa(pessoaASerSalva: IPessoa): Promise<IPessoa> {
    // espera a chamada post e processa o resultado de volta, sem a necessidade de fazer subscribe
    const resultadoChamadaBackend = await firstValueFrom(
      // faz a chamada post do backend
      this.clienteHttp.post<IPessoa>(this.urlBackendPessoa, pessoaASerSalva)
    );
    console.info('cadastrado', resultadoChamadaBackend);
    return resultadoChamadaBackend;
  }
}
