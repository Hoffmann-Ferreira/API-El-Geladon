import paletas from '../database';

class PaletasServices {
  listarTodas() {
    return paletas;
  }
  listarUmaPaletaPorId({id}) {
    const selecionadaPaleta = paletas.find((elem) => elem.id == id);
    return selecionadaPaleta;
  }
}
export default PaletasServices;
