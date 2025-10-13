import express from 'express'
import loginController from './controller/loginController.js'
import repositorioController from './controller/repositorioController.js'

export function adicionarRotas(api) {
  api.use(loginController);
  api.use(repositorioController);
  api.use('/public/storage', express.static('public/storage'));
}

