import './Carta.css'

import CaixaTextoHabilidade from '../CaixaTextoHabilidade';
import BotaoHabilidade from '../BotaoHabilidade';

const Carta = (props) => {
    /*
    props:
        srcImgCarta - titulosHabilidades - textoshabilidades

        srcImgsBotao - acaoPassiva - acaoArma - acaoUm - acaoDois
    */
    const classNameCaixatxt = {
        passiva: "caixa-texto-habil-passiva",
        arma: "caixa-texto-habil-arma",
        um: "caixa-texto-habil-um",
        dois: "caixa-texto-habil-dois",
    };

    const classNameBotao = {
        passiva: "carta-habil-passiva",
        arma: "carta-habil-arma",
        um: "carta-habil-um",
        dois: "carta-habil-dois",
    };

    return (
        <div className="carta">
            <img
                src={props.srcImgCarta}
                alt="imagem da carta"
                className="carta-img-principal"
            />

            <CaixaTextoHabilidade
                nomeClasseCaixaTexto={classNameCaixatxt.passiva}
                tituloHabilidade={props.titulosHabilidades.passiva}
                textoHabilidade={props.textoshabilidades.passiva}
            />

            <CaixaTextoHabilidade
                nomeClasseCaixaTexto={classNameCaixatxt.arma}
                tituloHabilidade={props.titulosHabilidades.arma}
                textoHabilidade={props.textoshabilidades.arma}
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
                acao={props.acaoPassiva}
                imgBotaoHabilidade={props.srcImgsBotao.passiva}
                nomeClasseCaixaTexto={classNameCaixatxt.passiva}
                nomeClasseBotao={classNameBotao.passiva}
            />

            <BotaoHabilidade
                acao={props.acaoArma}
                imgBotaoHabilidade={props.srcImgsBotao.arma}
                nomeClasseCaixaTexto={classNameCaixatxt.arma}
                nomeClasseBotao={classNameBotao.arma}
            />

            <BotaoHabilidade
                acao={props.acaoUm}
                imgBotaoHabilidade={props.srcImgsBotao.um}
                nomeClasseCaixaTexto={classNameCaixatxt.um}
                nomeClasseBotao={classNameBotao.um}
            />

            <BotaoHabilidade
                acao={props.acaoDois}
                imgBotaoHabilidade={props.srcImgsBotao.dois}
                nomeClasseCaixaTexto={classNameCaixatxt.dois}
                nomeClasseBotao={classNameBotao.dois}
            />
        </div>
    );

}

export default Carta
