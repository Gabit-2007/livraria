import { connection } from "./connection.js";


export async function validarCredenciais(user, senha) {
  const comando = `
    SELECT id,
           usuario,
           senha
      FROM users
     WHERE usuario = ?
       and senha = MD5(?)
  `;

  const [registros] = await connection.query(comando, [user, senha]);
  return registros[0];
}

export async function criarConta(novoLogin) {
  const comando = `
    INSERT INTO users (usuario, senha)
               VALUES (?, MD5(?));
  `;

  const [info] = await connection.query(comando, [
    novoLogin.user,
    novoLogin.senha
  ]);
  return info.insertId;
}