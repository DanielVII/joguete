import './CaixaTextoHabilidade.css'

const CaixaTextoHabilidade = (props) =>{
    //props: nomeClasseCaixaTexto - tituloHabilidade - textoHabilidade
    return (
        <div className={"caixa-texto-habilidade " + props.nomeClasseCaixaTexto}>
            <span className="texto-nome-habil">
                {props.tituloHabilidade}
            </span>
            <span className="texto-acao-habil">
                {props.textoHabilidade}
            </span>
        </div>
    );
}

export default CaixaTextoHabilidade
