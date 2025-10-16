import './styles.scss'

export default function Cartao({ imagem, titulo, descricao, inverter }) {
    return(
    <div className='cartao'>
        <div className={`imagem ${inverter ? "inverter" : ""}`}>
            <img src={imagem}/>
        </div>
        <div className='info'>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>

    </div>
    );
}