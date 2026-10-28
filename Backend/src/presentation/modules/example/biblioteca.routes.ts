import { Router } from "express";
import { BibliotecaController } from "./biblioteca.controller";

export class BibliotecaRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new BibliotecaController();

    router.get("/libros", controller.getAllLibro);
    router.get("/autores", controller.getAllAutor);

    return router;
  }
}