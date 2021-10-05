import { UsuarioCadastroComponent } from './components/usuario-cadastro/usuario-cadastro.component';
import { UsuarioListagemComponent } from './components/usuario-listagem/usuario-listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', component: UsuarioListagemComponent},
    {path: 'cadastrar', component: UsuarioCadastroComponent},
    {path: 'listar', component: UsuarioListagemComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
