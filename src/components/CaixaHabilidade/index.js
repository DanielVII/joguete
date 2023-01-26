const CaixaHabilidade = (props) => {
    return (
        <button
            type="button"
            onClick={this.props.acaoArma}
            className="carta-habilidade carta_habil-arma"
            onMouseEnter={() => this.props.inside(this.nomeClasse)}
            onMouseLeave={() => this.props.outside(this.nomeClasse)}
        >
            <img
                src={props.imgArma}
                alt="img-habilidade"
                className={props.nomeClass}
                id={props.idArma}
            />
        </button>
    );
}

export default CaixaHabilidade
