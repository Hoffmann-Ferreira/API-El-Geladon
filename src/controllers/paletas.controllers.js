import PaletasServices from '../services/paletas.service';

const paletasServices = new PaletasServices();

class PaletasControllers {
  listarTodas(req, res) {
    const paletas = paletasServices.listarTodas();

    res.send(paletas);
  }

  listarUmaPaletaPorId(req, res) {
    const idParam = +req.params.id;

    const paleta = paletasServices.listarUmaPaletaPorId(idParam);
    res.send(paleta);
  }
}

export default PaletasControllers
