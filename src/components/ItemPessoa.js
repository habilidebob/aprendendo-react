function ItemPessoa({nome, funcao, idade}) {
    return (
        <div>
            <h3>{nome}</h3>
            <p>{funcao}</p>
            <p>Idade: {idade}</p>
            <hr />
        </div>
    )
}

export default ItemPessoa