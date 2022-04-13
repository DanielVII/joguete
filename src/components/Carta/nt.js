{this.classNameBotao.map((classeBotao, index) => {
    return (
        <button
            key={index}
            type="button"
            className={"carta_habilidade " + classeBotao}
            onMouseEnter={() =>
                this.inside("." + this.classNameCaixatxt[index])
            }
            onMouseLeave={() =>
                this.outside(
                    "." + this.classNameCaixatxt[index]
                )
            }
        >
            <img
                src={this.props.imgsBotao[index]}
                alt="img-habilidade"
                onClick={this._handleClick}
                className="carta_img-habilidade"
                id={this.props.idsImgBotao[index]}
            />
        </button>
    );
})}