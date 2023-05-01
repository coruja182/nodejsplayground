import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPessoaComponent } from './componentes/formulario-pessoa/formulario-pessoa.component';
import { ListaPessoasComponent } from './componentes/lista-pessoas/lista-pessoas.component';

const routes: Routes = [
  {
    path: 'pessoa/nova',
    component: FormularioPessoaComponent,
  },
  {
    path: 'pessoa/lista',
    component: ListaPessoasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
