import { Router } from "express";
import { ExampleRoutes } from "./modules/example/example.routes";
import { BibliotecaRoutes } from "./modules/example/biblioteca.routes";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    // Definir rutas
    apiRouter.use("/biblioteca", BibliotecaRoutes.routes);

    router.use("/api", apiRouter);

    return router;
  }
}