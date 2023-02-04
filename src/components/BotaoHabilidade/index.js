import './BotaoHabilidade.css'

const BotaoHabilidade = (props) => {

    return (
        <button
            type="button"
            onClick={props.acao}
            className= {props.nomeClasseBotao + " carta-habilidade"}
            onMouseEnter={() => {
                document.getElementById(props.idCarta).getElementsByClassName(props.nomeClasseCaixaTexto)[0].style.display = "flex"}
            }
            onMouseLeave={() => {
                document.getElementById(props.idCarta).getElementsByClassName(props.nomeClasseCaixaTexto)[0].style.display = "none"
            }}
        >
            <img
                src={props.imgBotaoHabilidade}
                alt="img-habilidade"
                className="img-habilidade"
            />
        </button>
    );
}

export default BotaoHabilidade
