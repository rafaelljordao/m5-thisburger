import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { cardapio  } from "../../Context/Context"
import { updatePedidos } from "../../services/Request"
import "./Atualizar.css"

export function Atualizar(){
    const params = useParams()
    const [totalPedido, setTotalPedido] = useState(0)
    const [novoPedido, setNovoPedido] = useState(cardapio)
    const [change, setChange] = useState(0)
    const navigate = useNavigate()

    console.log(novoPedido[0].ingredientes)

    useEffect(()=>{
        const total = novoPedido.map((item)=> item.preco*Number(item.qty))
        const novoTotal = total.reduce((all, actual)=> all += actual)
        setTotalPedido(novoTotal)
    } ,[change])

    return (
        <>
        <main className="mainAtualizar">
            <div className="containerAtualizar">
                {novoPedido.map((item,index)=>{
                    return(
                        <div className="cardAtualização" key={index}>
                            <h2>{item.nomeItem} - R$ {item.preco}</h2>
                            <img src={item.image}></img>
                            <p>{item.ingredientes.split(",").join(", ")}</p>
                            <div>
                                <label> Quantidade: </label>
                            <input className="quantidade" type="number" min="0" onChange={(e)=> {
                                novoPedido[index].qty = e.target.value
                                setChange(change+1)
                            }}></input>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="attfinal">
                <h1> Total: R$ {totalPedido} </h1>
                <div className="buttonDivAtt">
                    <button className="btnatt" onClick={(e)=>{
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
                    <button className="btnatt" onClick={()=> navigate("/pedido")}> Voltar </button>
                </div>
            </div>
        </main>
        </>
        )
}