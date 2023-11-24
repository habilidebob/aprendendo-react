import ItemPessoa from "../ItemPessoa"

function QuemSomos(){
    return(
        <div>
            <h2>Quem Somos</h2>
            <p>Você está na página quem somos, bro.</p>
            <ItemPessoa nome="Robson Soares" funcao="Cozinheiro" idade="33" />
            <ItemPessoa nome="Keila Melo" funcao="Gerente" idade="29" />
            <ItemPessoa nome="Estevao" funcao="Professor" idade="28" />
        </div>
    )
}
export default QuemSomos