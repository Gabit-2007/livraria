import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import CartaoI from "../../components/cartaoInicio";
import './styles.scss';

export default function Inicio(){
    return(
        <div>
        <Cabecalho/>
        <div className="main">
            <div className="pesquisa">
            <label>Buscar livro:</label>
            <input type="text" />
            </div>
        <div className="cartaoMain">
        <CartaoI
        rota="/destaques"
        imagem="Isso é um teste"
        titulo="Isso é um teste"
        autor="Isso é um teste"
        />
        <CartaoI
        imagem="Isso é um teste"
        titulo="Isso é um teste"
        autor="Isso é um teste"
        />
        <CartaoI
        imagem="Isso é um teste"
        titulo="Isso é um teste"
        autor="Isso é um teste"
        />
        <CartaoI
        imagem="Isso é um teste"
        titulo="Isso é um teste"
        autor="Isso é um teste"
        />
        <CartaoI
        imagem="Isso é um teste"
        titulo="Isso é um teste"
        autor="Isso é um teste"
        />
        <CartaoI
        imagem="Isso é um teste"
        titulo="Isso é um teste"
        autor="Isso é um teste"
        />
        </div>
        </div>
        <Rodape/>
        </div>
    );
}