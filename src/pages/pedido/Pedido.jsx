import React from 'react';
import { CartState } from '../../Context/Context';
import { useState, useEffect } from 'react';
import { listPedidos } from '../../services/Request';

import './pedido.css';


const Pedido = () => {
    const [historico, setHistorico] = useState([])
useEffect(() => {
    listPedidos().then((response) => {
        setHistorico(response)
        console.log(historico[0])
    })
}, [])

    const {
        state:{cart}, dispatch
    } = CartState()

    const [totalPedido, setTotalPedido] = useState(0)

    useEffect(()=> {
        setTotalPedido(cart.reduce((acc, current)=> acc + Number(current.preco) * current.qty ,0))
        console.log(cart)
    }, [cart])
    console.log(cart)
    // const itensPedido = JSON.parse(prod.itensPedido).map((atual) => {
    //     return (`${atual.nomeItem} Quantidade: ${atual.qty}`)
    // })
    // console.log(itensPedido)
    return(
        <div className='pedido'> 
            <div className="pedidoContainer">
            <ul>
                {
                    historico.map(prod => {
                        return(
                        <li className="cartPedido" key={prod.id}>
                            <img className="imgCartProduct" src={prod.image} />
                            <p>{prod.nomeItem}</p> 
                            <p> Itens do Pedido: </p>
                            <p> Quantidade: {Number(prod.quantidadeItens)}</p>
                            <p> Total: {Number(prod.totalPedido)}</p>             
                        </li>
                    )})
                }
            </ul>
            <p> Total do Pedido: {totalPedido} </p>    
            </div>
        <button> Alterar Pedido </button>
        <button> Cancelar Pedido </button>
        </div>
    )
}

export default Pedido;