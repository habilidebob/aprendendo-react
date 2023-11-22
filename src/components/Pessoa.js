import PropTypes from 'prop-types'
import './Pessoa.components.css'

function Pessoa({nome, img, idade, profissao}) {
    return (
    <div className="fundo">
            <h1>Perfil de {nome}</h1>
            <img src={img} alt={nome} />
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

// Tipos e valores obrigatórios:
Pessoa.propTypes = {
    nome: PropTypes.string.isRequired, // texto é obrigatório
    idade: PropTypes.number.isRequired // número
}



// Valores padrões em caso de omissão:
Pessoa.defaultProps = {
    img: "https://placehold.co/200",
    profissao: "Desempregado"
}



export default Pessoa