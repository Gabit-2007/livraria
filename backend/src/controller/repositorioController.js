import { Router } from 'express';
import { getAuthentication } from '../utils/jwt.js';

import * as livroRepo from '../repository/repositorioRepository.js';

const endpoints = Router();
const autenticador = getAuthentication();


endpoints.post('/livro', autenticador, async (req, resp) => {
    let usuarioId = req.user.id;
    let capa = req.body.capa;
    let titulo = req.body.titulo;
    let autor = req.body.autor;

    let inserirLivro = await livroRepo.inserirLivro(capa, titulo, autor);

    resp.send(inserirLivro);
});


export default endpoints;