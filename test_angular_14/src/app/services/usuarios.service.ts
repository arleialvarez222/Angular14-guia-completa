import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'https://gorest.co.in/public/v2/users';
  token = 'ea791c38ca8cf3225f4602998bdeab4af074f4408587ee6391b6e70c737fd391';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(`${this.url}?access-token=${this.token}`);
  }

  getUsuarioByid(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}?access-token=${this.token}`);
  }
}
