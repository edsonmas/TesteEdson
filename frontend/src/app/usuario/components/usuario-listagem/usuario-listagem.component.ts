import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioListagemModel } from '../../model/usuario-listagem.model';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.scss']
})
export class UsuarioListagemComponent implements OnInit {

    usuarios: UsuarioListagemModel[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
      this.listarUsuarios();
  }

  public listarUsuarios(): void{

    this.usuarioService.listarUsuarios().subscribe((usuarios: UsuarioListagemModel[]) => this.usuarios = usuarios)
    console.log("AqUI!");
}


}
