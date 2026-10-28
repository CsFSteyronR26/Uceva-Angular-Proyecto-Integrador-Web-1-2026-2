import { Component, OnInit, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Biblioteca } from './services/biblioteca';
import { Autor, Libro} from './interfaces/biblioteca.interface'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  private biblioteca = inject(Biblioteca);
  libros: Libro[] = [];
  autores: Autor[] = [];

  ngOnInit(): void {
    // Obtener la lista de libros
    this.biblioteca.getLibros().subscribe({
      next: (data) => this.libros = data,
      error: (err) => console.error('Error al cargar libros:', err)
    });

    // Obtener la lista de autores
    this.biblioteca.getAutores().subscribe({
      next: (data) => this.autores = data,
      error: (err) => console.error('Error al cargar autores:', err)
    });
  }
}
