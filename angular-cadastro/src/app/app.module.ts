import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPessoaComponent } from './componentes/formulario-pessoa/formulario-pessoa.component';
import { ListaPessoasComponent } from './componentes/lista-pessoas/lista-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPessoaComponent,
    ListaPessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
