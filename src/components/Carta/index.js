import './Carta.css'

const Carta = (props) => {
    
        const classNameCaixatxt = [
            "caixa-texto-habil-passiva",
            "caixa-texto-habil-arma",
            "caixa-texto-habil-um",
            "caixa-texto-habil-dois",
        ];

        const classNameBotao = [
            "carta_habil-passiva",
            "carta_habil-arma",
            "carta_habil-um",
            "carta_habil-dois",
        ];
        
        const inside = (nomeClasse) => {
            document.querySelector(nomeClasse).style.display = "flex";
        }
    
        const outside = (nomeClasse) => {
            document.querySelector(nomeClasse).style.display = "none";
        }

        return (
            <div className="carta">
                <img
                    src={props.imgCarta}
                    alt="imagem da carta"
                    className="carta_img"
                />

                {this.classNameCaixatxt.map((classeCaixa, index) => {
                    return (
                        <div
                            className={"caixa-texto-habil " + classeCaixa}
                            key={index}
                        >
                            <span className="nome-habil">
                                {this.props.tituloHabilidade[index]}
                            </span>
                            <span className="acao-habil">
                                {this.props.textoHabilidade[index]}
                            </span>
                        </div>
                    );
                })}

                <HabilPassiva
                    acaoPassiva={this.props.acaoPassiva}
                    imgPassiva={this.props.imgsBotao[0]}
                    idPassiva={this.props.idsImgBotao[0]}
                    inside={this.inside.bind(this)}
                    outside={this.outside.bind(this)}
                />

                <HabilArma
                    acaoArma={this.props.acaoArma}
                    imgArma={this.props.imgsBotao[1]}
                    idArma={this.props.idsImgBotao[1]}
                    inside={this.inside.bind(this)}
                    outside={this.outside.bind(this)}
                />

                <HabilUm
                    acaoUm={this.props.acaoUm}
                    imgUm={this.props.imgsBotao[2]}
                    idUm={this.props.idsImgBotao[2]}
                    inside={this.inside.bind(this)}
                    outside={this.outside.bind(this)}
                />

                <HabilDois
                    acaoDois={this.props.acaoDois}
                    imgDois={this.props.imgsBotao[3]}
                    idDois={this.props.idsImgBotao[3]}
                    inside={this.inside.bind(this)}
                    outside={this.outside.bind(this)}
                />
            </div>
        );
    
}
