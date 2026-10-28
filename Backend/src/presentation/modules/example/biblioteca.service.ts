import { pool } from "../../../config/database";
import { Libro } from "../../../domain/interfaces/libro.interface";
import { Autor } from "../../../domain/interfaces/autor.interface";

export class BibliotecaService{

  public async getAllLibro(): Promise<Libro[]> {
    const sql = `SELECT * FROM libros;`;
    const result = await pool.query(sql);
    return result.rows;
  }

   public async getAllAutor(): Promise<Autor[]> {
    const sql = `SELECT * FROM autores;`;
    const result = await pool.query(sql);
    return result.rows;
  }
}
