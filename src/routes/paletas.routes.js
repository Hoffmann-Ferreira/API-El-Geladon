import { Router } from "express";
import PaletasControllers from "../controllers/Paletas.controllers";

const paletasRouter = Router();
const paletasControllers = new PaletasControllers();


paletasRouter.get("/listar-todas", paletasControllers.listarTodas);
paletasRouter.get("/paleta/:id", paletasControllers.listarUmaPaletaPorId);

export default paletasRouter;