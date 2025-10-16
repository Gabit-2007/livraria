import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import Cartao from '../../components/cartao';
import './styles.scss'

export default function Inicio(){
    return(
        <div>
        <Cabecalho />
        <div className='main'>
        <p>Seja bem-vindo à nossa livraria! Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o amor pelos livros e criar um espaço acolhedor para todos os amantes da literatura. Conheça nossa equipe dedicada e fique por dentro dos eventos emocionantes que promovemos. Venha explorar um mundo de histórias e conhecimento!</p>
        <Cartao
        imagem="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2017/11/21151223/classic-justice-league.jpg"
        titulo="Livros de super heróis"
        descricao="Em nossa livraria você vai encontrar livros de diversos heróis da atualidade!"
        />
        <Cartao
        imagem="https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2022/03/receitas_chocolate_zona_sul_destaque_gotas_brownie.jpg"
        titulo="Livros de receitas"
        descricao="Se quer cozinhar algo gostoso, compre livros de receitas com tudo que precisa saber!"
        inverter
        />
        </div>
        <Rodape />
        </div>
    );
}