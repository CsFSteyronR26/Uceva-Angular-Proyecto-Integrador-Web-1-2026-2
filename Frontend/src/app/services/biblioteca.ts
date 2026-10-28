import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor, Libro} from '../interfaces/biblioteca.interface'
@Injectable({
  providedIn: 'root',
})
export class Biblioteca {
  private apiUrl = 'http://localhost:3000/api/biblioteca';

  constructor(private http: HttpClient) {}

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.apiUrl}/libros`);
  }

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.apiUrl}/autores`);
  }
  
}
