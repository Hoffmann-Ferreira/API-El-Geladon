import PaletasServices from '../services/paletas.service';

const paletasServices = new PaletasServices();

class PaletasControllers {
  listarTodas(req, res) {
    const paletas = paletasServices.listarTodas();

    res.send(paletas);
  };

  listarUmaPaletaPorId(req, res) {
    const id= +req.params.id;

    try{
      const paleta = paletasServices.listarUmaPaletaPorId({id});

      res.send(paleta);

    } catch (error) {
      res.status(error.status).send(error.message);
    };

  };

  criarNovaPaleta( req, res){
    const {sabor, descricao, foto, preco} = req.body;

    try{

      const novaPaleta =  paletasServices.criarNovaPaleta({
        sabor, 
        descricao, 
        foto, 
        preco,
      });
      
      res.status(201).send(novaPaleta);
      
    }catch (error) {
      res.status(error.status).send(error.message);
    };

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

  excluirPaleta(req, res){
    const id = +req.params.id;

    paletasServices.excluirPaleta({id});

    res.sendStatus(204);
  };

};

export default PaletasControllers;
