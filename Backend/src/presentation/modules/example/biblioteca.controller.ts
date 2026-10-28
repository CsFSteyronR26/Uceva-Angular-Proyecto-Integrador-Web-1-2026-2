import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { BibliotecaService } from "./biblioteca.service";

export class BibliotecaController {

  private readonly bibliotecaService = new BibliotecaService();

  getAllLibro = (req: Request, res: Response): void => {
    this.bibliotecaService.getAllLibro()
    .then((libros) => res.status(201).json(libros))
    .catch((error) => HandleError.error(error, res));
  };

   getAllAutor = (req: Request, res: Response): void => {
    this.bibliotecaService.getAllAutor()
    .then((autores) => res.status(201).json(autores))
    .catch((error) => HandleError.error(error, res));
  };

}
