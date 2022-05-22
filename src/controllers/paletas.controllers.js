import PaletasServices from '../services/paletas.service';

const paletasServices = new PaletasServices();

class PaletasControllers {
  listarTodas(req, res) {
    const paletas = paletasServices.listarTodas();

    res.send(paletas);
  };

  listarUmaPaletaPorId(req, res) {
    const id= +req.params.id;

    const paleta = paletasServices.listarUmaPaletaPorId({id});

    res.send(paleta);
  };

  criarNovaPaleta( req, res){
    const {sabor, descricao, foto, preco} = req.body;

    const novaPaleta =  paletasServices.criarNovaPaleta({
      sabor, 
      descricao, 
      foto, 
      preco,
    });
    
    res.status(201).send(novaPaleta);
  };

  atualizarPaleta(req, res) {
    const {sabor, descricao, foto, preco} = req.body;
    const id= +req.params.id;

    const paletaAtualizada = paletasServices.atualizarPaleta({
      sabor, 
      descricao,
      foto,
      preco,
      id,
    });
    
    res.send(paletaAtualizada);
  };

};

export default PaletasControllers;
