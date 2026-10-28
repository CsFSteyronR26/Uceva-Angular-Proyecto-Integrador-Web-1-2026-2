export interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
  edad?: number;
}

export interface Libro {
  id: number;
  titulo: string;
  publicacion: number;
  autor_id: number;
}