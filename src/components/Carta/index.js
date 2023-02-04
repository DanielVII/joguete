import './Carta.css'

import CaixaTextoHabilidade from '../CaixaTextoHabilidade';
import BotaoHabilidade from '../BotaoHabilidade';

const Carta = (props) => {
    /*
    props:
        srcImgCarta - titulosHabilidades - textoshabilidades

        srcImgsBotao - acaoUm - acaoDois
    */
    const classNameCaixatxt = {
        um: "texto-habilidade-um",
        dois: "texto-habilidade-dois",
    };

    const classNameBotao = {
        um: "botao-habilidade-um",
        dois: "botao-habilidade-dois",
    };

    return (
        <div className="carta" id={props.idCarta}>
            <img
                src={props.srcImgCarta}
                alt="imagem da carta"
                className="img-principal"
            />


            <CaixaTextoHabilidade
                nomeClasseCaixaTexto={classNameCaixatxt.um}
                tituloHabilidade={props.titulosHabilidades.um}
                textoHabilidade={props.textoshabilidades.um}
            />

            <CaixaTextoHabilidade
                nomeClasseCaixaTexto={classNameCaixatxt.dois}
                tituloHabilidade={props.titulosHabilidades.dois}
                textoHabilidade={props.textoshabilidades.dois}
            />

            <BotaoHabilidade
                acao={props.acaoUm}
                imgBotaoHabilidade={props.srcImgsBotao.um}
                nomeClasseCaixaTexto={classNameCaixatxt.um}
                nomeClasseBotao={classNameBotao.um}
                idCarta={props.idCarta}
            />

            <BotaoHabilidade
                acao={props.acaoDois}
                imgBotaoHabilidade={props.srcImgsBotao.dois}
                nomeClasseCaixaTexto={classNameCaixatxt.dois}
                nomeClasseBotao={classNameBotao.dois}
                idCarta={props.idCarta}
            />
        </div>
    );

}

export default Carta
