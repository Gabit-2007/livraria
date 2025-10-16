import { Link } from 'react-router';
import Logo from '../../assets/logo.png';
import './styles.scss';

export default function Cabecalho() {
    return(
        <div className='cabecalho'>
        <div className='container'>
            <img src={ Logo } height={64} alt='Logo'/>
            <p>Livraria Frei</p>
            <div className='links'>
            <Link to={'/'} >Inicio</Link>
            <Link to={'/sobre'} >Sobre</Link>
            </div>
        </div>
        <span></span>
        </div>
    );
}