import './styles.scss';
import { Link } from 'react-router';


export default function CartaoI({ rota, imagem, titulo, autor}) {
    return(
        <div className='cartaoI'>
            <Link to={rota}>
            <button>
            <img src={imagem} alt="capa" />
            <h1>{titulo}</h1>
            <p>{autor}</p>
            </button>
            </Link>
        </div>
    );
}