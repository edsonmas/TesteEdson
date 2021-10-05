import { SelectItem } from 'primeng';
import { CargoModel } from './cargo.model';

export class UsuarioListagemModel{
    id: number;
    nome: string;
    statusAtivo: boolean;
    email: string;
    cargo: SelectItem;
}
