
function MeApresente({nome}){
    return(
        <div>
            <h1>Olá {nome}!</h1>
            <p>O {nome} é super especial!</p>
            <p>O {nome} também é show! Não seja hide.</p>
        </div>
    )
}

// Valores padrões, em caso de omissão:
MeApresente.defaultProps = {
    nome: "Sem nome"
}

export default MeApresente