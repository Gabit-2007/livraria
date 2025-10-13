import { connection } from './connection.js';


export async function inserirLivro(capa, titulo, autor) {
    const comando = 
    `INSERT INTO repositorio (capa_url, titulo, autor) VALUES (?, ?, ?)`
    let [registros] = await connection.query(comando, [capa, titulo, autor]);
    return registros.insertId;
}
