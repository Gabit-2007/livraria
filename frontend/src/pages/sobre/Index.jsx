import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import './styles.scss'

export default function Sobre() {
    return(
        <div>
            <Cabecalho />
            <div className='main'>
            <p>Bem-vindo à nossa tela de sobre! Aqui você encontrará informações sobre a nossa livraria, nossa missão de promover a leitura e o amor pelos livros, além de detalhes sobre nossa equipe apaixonada e os eventos que realizamos. Explore e descubra tudo o que temos a oferecer!</p>
           </div>
           <Rodape />
        </div>
    )
}