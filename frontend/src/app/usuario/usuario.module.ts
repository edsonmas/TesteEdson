import { CalendarModule } from 'primeng/calendar';
import { MensagemModule } from './../components/mensagem/mensagem.module';

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListagemComponent } from './components/usuario-listagem/usuario-listagem.component';
import { UsuarioCadastroComponent } from './components/usuario-cadastro/usuario-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuarioListagemComponent, UsuarioCadastroComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class UsuarioModule { }
