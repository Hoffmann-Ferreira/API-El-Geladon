import paletas from "../database";

const verificarDadosDePaletaMiddleware = (req, res, next) => {
    const { sabor, descricao, foto, preco} = req.body

    if(!sabor || !descricao || !foto || !preco) {
       return res.status(422).send("Campo em branco, favor preecher corretamente todos os campos!");

      };

    next();

};

export default verificarDadosDePaletaMiddleware;