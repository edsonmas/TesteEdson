import { Observable } from 'rxjs';
import { UsuarioListagemModel } from './../model/usuario-listagem.model';
import { CadastroUsuarioModel } from './../model/cadastro-usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    public readonly BASE_URL: string = '/usuarios'

  constructor(private http: HttpClient) { }

  public cadastraNovoUsuario(novoUsuario: CadastroUsuarioModel){
      return this.http.post(`${environment.apiUrl}${this.BASE_URL}`, novoUsuario as CadastroUsuarioModel)
  }

  public listarUsuarios(){
    return this.http.get<UsuarioListagemModel[]>(`${environment.apiUrl}${this.BASE_URL}`);
}
}
