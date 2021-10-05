import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
    public readonly BASE_URL: string = '/cargos'

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<SelectItem[]>{
      return this.httpClient.get<SelectItem[]>(`${environment.apiUrl}${this.BASE_URL}`);
  }
}
