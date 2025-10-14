import { connection } from './connection.js';


export async function inserirLivro(capa, titulo, autor, usuarioId) {
    const comando = 
    `INSERT INTO repositorio (capa_url, titulo, autor, id_users) VALUES (?, ?, ?, ?)`
    let [registros] = await connection.query(comando, [capa, titulo, autor, usuarioId]);
    return registros.insertId;
}


export async function ListarLivros() {
    let [resultados] = 
        await connection.query(
            `SELECT * FROM repositorio`
        )

    return resultados
}