import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { cardapio  } from "../../Context/Context"
import { updatePedidos } from "../../services/Request"

export function Atualizar(){
    const params = useParams()
    const [totalPedido, setTotalPedido] = useState(0)
    const [novoPedido, setNovoPedido] = useState(cardapio)
    const [change, setChange] = useState(0)
    const navigate = useNavigate()

    useEffect(()=>{
        const total = novoPedido.map((item)=> item.preco*Number(item.qty))
        const novoTotal = total.reduce((all, actual)=> all += actual)
        setTotalPedido(novoTotal)
    } ,[change])

    return (
        <>
        {novoPedido.map((item,index)=>{

            return(
                <div key={index}>
                    <h2>{item.nomeItem} - {item.preco}</h2>
                    <img src={item.image}></img>
                    <p>{item.ingredientes}</p>
                    <input type="number" min="0" onChange={(e)=> {
                        novoPedido[index].qty = e.target.value
                        setChange(change+1)
                    }}></input>
                </div>
            )
        })}
        <h1> Total: {totalPedido} </h1>
        <button onClick={(e)=>{
            e.preventDefault()
            const sumItens = novoPedido.map((item)=> item.qty).reduce((total, atual)=> total += Number(atual),0)
            const reqbody = {
                idCliente: 1,
                itensPedido: [JSON.stringify(novoPedido)], 
                quantidadeItens: sumItens, 
                totalPedido:totalPedido
            }
            updatePedidos(reqbody, params.id)
            .then(()=>{
                novoPedido.map((item)=> item.qty = 0)
                navigate("/pedido")
            })
        }}> Atualizar meu Pedido</button> 
        <button onClick={()=> navigate("/pedido")}> Voltar </button>
        </>
        )
}