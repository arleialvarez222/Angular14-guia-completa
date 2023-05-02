import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  key = '7b7ddd4be41d45b7911a4fffaaab504e';

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=${this.key}`;
    return this.http.get(url);
  }
}
