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

  atualizarPaleta({sabor, descricao, foto, preco, id}) {
    const paletaAtualizada = {
      id,
      sabor,
      descricao,
      foto,
      preco,
    };

    const paletaIndex = paletas.findIndex((elem) => elem.id === id);

    paletas[paletaIndex] = paletaAtualizada;

    return paletaAtualizada;
  };

  excluirPaleta({id}) {
    const paletaIndex = paletas.findIndex((elem) => elem.id === id);

    paletas.splice(paletaIndex, 1);
  };

};

export default PaletasServices;
