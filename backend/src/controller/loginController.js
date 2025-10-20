import * as repo from '../repository/loginRepository.js';
import { generateToken } from '../utils/jwt.js'
import { Router } from "express";
const endpoints = Router();


endpoints.post('/usuario', async (req, resp) => {
  let novoLogin = req.body;

  let id = await repo.criarConta(novoLogin);
  resp.send({ novoId: id });
})

endpoints.post('/usuario/login', async (req, resp) => {
  let user = req.body.user;
  let senha = req.body.senha;

  let credenciais = await repo.validarCredenciais(user, senha);
  if (!credenciais) {
    resp.status(401).send({ erro: 'Credenciais inválidas' });
  }
  else {
    let token = generateToken(credenciais);
    resp.send({
      token: token
    });
  }
})



export default endpoints;