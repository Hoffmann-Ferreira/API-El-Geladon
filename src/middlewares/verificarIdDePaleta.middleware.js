
import Paleta from "../models/paletas.model";

const verificarIdDePaletaMiddleware = (req, res, next) => {
  const id = req.params.id;

  const paleta = Paleta.findById(id);

  if (!paleta) {
    return res
      .status(404)
      .send('Paleta não encontrada!');
  }

  next();
};

export default verificarIdDePaletaMiddleware;
