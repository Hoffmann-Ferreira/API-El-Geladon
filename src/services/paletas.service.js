import paletas from "../database";

class PaletasServices {
    ListarTodas() {
        return paletas;

    }
    listarUmaPaletaPorId(id){
        const selecionadaPaleta = paletas.find((paleta) => paleta.id == idParam);
        return selecionadaPaleta;

    }
};
export default PaletasServices;