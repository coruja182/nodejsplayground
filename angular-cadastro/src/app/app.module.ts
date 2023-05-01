import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPessoaComponent } from './componentes/formulario-pessoa/formulario-pessoa.component';
import { ListaPessoasComponent } from './componentes/lista-pessoas/lista-pessoas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPessoaComponent,
    ListaPessoasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // módulo para poder trabalhar com Forms
    HttpClientModule, // módulo para poder fazer chamadas Http ao backend
    ReactiveFormsModule,// módulo para poder trabalhar com ReactiveForms <https://angular.io/guide/reactive-forms>
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
