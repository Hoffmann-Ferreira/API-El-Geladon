import paletas from '../database';

class PaletasServices {
  listarTodas() {
    return paletas;
  };

  listarUmaPaletaPorId({ id }) {
    const selecionadaPaleta = paletas.find((elem) => elem.id == id);
    return selecionadaPaleta;
  };

  criarNovaPaleta({sabor, descricao, foto, preco}) {
    const novoId = paletas.length === 0 ? 1 : paletas[paletas.length - 1].id + 1;
    
    const novaPaleta = {
      id: novoId,
      sabor,
      descricao,
      foto,
      preco,
    };

    paletas.push(novaPaleta);

    return novaPaleta;
  };
};

export default PaletasServices;
