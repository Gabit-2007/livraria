import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import CartaoI from "../../components/cartaoInicio";
import React, {useState, useEffect} from "react";
import api from "../../api";
import './styles.scss';

export default function Inicio(){
    const [dados, setDados] = useState([]);

    async function carregarDados() {
        await api.get('/livros')
            .then(resposta => setDados(resposta.data))
        
    }

    useEffect(() => {
    carregarDados();
    }, []);

    return(
        <div>
        <Cabecalho/>
        <div className="main">
            <div className="pesquisa">
            <label>Buscar livro:</label>
            <input type="text" />
            </div>
        <div className="cartaoMain">
            {
                dados.map(evento => {
                    return <CartaoI
                    rota="/destaques"
                    imagem={evento.imagem}
                    titulo={evento.titulo}
                    autor={evento.autor}
                    />
                })
            }
        </div>
        </div>
        <Rodape/>
        </div>
    );
}