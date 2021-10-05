import { ListagemEventosComponent } from './listagem-eventos/listagem-eventos.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo:'listar'},
    {path: 'cadastrar', component: CadastroEventoComponent},
    {path: 'listar', component: ListagemEventosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
