import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ListagemEventosComponent } from './listagem-eventos/listagem-eventos.component';


@NgModule({
  declarations: [CadastroEventoComponent, ListagemEventosComponent],
  imports: [
    CommonModule,
    EventoRoutingModule
  ]
})
export class EventoModule { }
