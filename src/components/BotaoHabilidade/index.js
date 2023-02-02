import './BotaoHabilidade.css'

const BotaoHabilidade = (props) => {

    // const mouseInsideCaixaHabil = () => {
    //     document.querySelector(props.nomeClasseCaixaTexto).style.display = "flex";
    // }

    // const mouseOutsideCaixaHabil = () => {
    //     document.querySelector(props.nomeClasseCaixaTexto).style.display = "none";
    // }

    return (
        <button
            type="button"
            onClick={props.acao}
            className= {props.nomeClasseBotao + " carta-habilidade"}
            // onMouseEnter={mouseInsideCaixaHabil()}
            // onMouseLeave={mouseOutsideCaixaHabil()}
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
