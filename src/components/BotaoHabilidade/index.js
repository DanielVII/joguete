import './BotaoHabilidade.css'

const BotaoHabilidade = (props) => {

    const querryNomeClasseCaixaTexto = "." + props.nomeClasseCaixaTexto

    const mouseInsideCaixaHabil = () => {
        document.querySelector(querryNomeClasseCaixaTexto).style.display = "flex";
    }

    const mouseOutsideCaixaHabil = () => {
        document.querySelector(querryNomeClasseCaixaTexto).style.display = "none";
    }

    return (
        <button
            type="button"
            onClick={props.acao}
            className= {props.nomeClasseBotao + " carta-habilidade"}
            onMouseEnter={mouseInsideCaixaHabil()}
            onMouseLeave={mouseOutsideCaixaHabil()}
        >
            <img
                src={props.imgBotaoHabilidade}
                alt="img-habilidade"
                className={props.nomeClasseHabilidadeImg}
            />
        </button>
    );
}

export default BotaoHabilidade
