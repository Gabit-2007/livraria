import Logo from '../../assets/logo.png';
import './styles.scss';


export default function Rodape() {
    return(
        <div className='cont'>
        <div className='rodape'>
            <div>
            <img src={ Logo } height={64} alt='Logo'/>
            </div>
            <div>
                <h2>Contato</h2>
                <p>(11) 91234-5678</p>
                <p>livraria@frei.com.br</p>
            </div>
            <div>
                <h2>Desenvolvido por</h2>
                <p>Gabriela Alves</p>
                <p>@Justt.Gabiii</p>
            </div>
            <div>
                <h2>Turma</h2>
                <p>Informática D</p>
            </div>
        </div>
         <h2 className='pezinho'>2025 @ Instituto Nossa Senhora de Fátima</h2>
        </div>
    );
}