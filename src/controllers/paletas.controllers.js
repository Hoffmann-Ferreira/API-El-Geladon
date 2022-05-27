import PaletasServices from '../services/paletas.service';

const paletasServices = new PaletasServices();

class PaletasControllers {
  async listarTodas(req, res) {
    try {
      const paletas = await paletasServices.listarTodas();

      res.send(paletas);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async listarUmaPaletaPorId(req, res) {
    const id = req.params.id;

    const paleta = await paletasServices.listarUmaPaletaPorId({ id });

    res.send(paleta);
  }

  async criarNovaPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;

    const novaPaleta = await paletasServices.criarNovaPaleta({
      sabor,
      descricao,
      foto,
      preco,
    });

    res.status(201).send(novaPaleta);
  }

  async atualizarPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;
    const id = req.params.id;

    const paletaAtualizada = await paletasServices.atualizarPaleta({
      sabor,
      descricao,
      foto,
      preco,
      id,
    });

    res.send(paletaAtualizada);
  }

 async excluirPaleta(req, res) {
    const id = req.params.id;

   const paleta = await paletasServices.excluirPaleta({ id });

    res.sendStatus(204).send(paleta);
  }
}

export default PaletasControllers;
