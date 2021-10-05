import { CadastroUsuarioModel } from './../../model/cadastro-usuario.model';
import { UsuarioService } from './../../services/usuario.service';
import { CargoService } from './../../services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

    form: FormGroup;

    cargos: SelectItem[] = [];

  constructor(
      private cargoService: CargoService,
      private formBuilder: FormBuilder,
      private usuarioService:UsuarioService,
      private router: Router,
      ) { }

  ngOnInit(): void {
      this.criarFormulario();
      this.obterCargos();
      console.log(this.form.getRawValue());

  }

  public criarFormulario():void{
      this.form = this.formBuilder.group({
        nome: ['admin',[Validators.required,Validators.minLength(4)]],
        email: ['teste@admin.com',[Validators.required,Validators.email]],
        cpf: ['12309887623',Validators.required],
        cargo: [null,Validators.required],
        dataNascimento: ['',Validators.required],
      });
  }

  public cadastrar(){
      if(this.form.valid){

        this.formatarData();
        console.log('Formatou!')
        this.formataCargo();

        const novoUsuario = this.form.getRawValue() as CadastroUsuarioModel;
        this.usuarioService.cadastraNovoUsuario(novoUsuario).subscribe(()=> {
        this.router.navigate(['']);

         },
        (error)=> {
            console.log(error),
            console.log(novoUsuario);
        }
        );
      }
  }

  public obterCargos(): void{
      this.cargoService.listar().subscribe((cargos: SelectItem[]) => this.cargos = cargos)
  }

  public formatarData(): void {
    let data: moment.Moment = moment.utc(this.form.value.dataNascimento).local();
    this.form.value.dataNascimento = data.format('dd/MM/YYYY');
  }

  public formataCargo(): void {
    const cargoId = this.form.value.cargo;
    this.form.value.cargo = { value: cargoId };
  }

}
