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
    return(
        <div className='pedido'> 
            <div className="pedidoContainer">
            <ul>
                {
                    historico.map(prod => (
                        <li className="cartPedido" key={prod.id}>
                            <img className="imgCartProduct" src={prod.image} />
                            <p>{prod.nomeItem}</p> 
                            <p> Valor Unitário: R${Number(prod.preco)} </p>
                            <p> Quantidade: {prod.qty}</p>
                            <p> Total: {(prod.preco * prod.qty)}</p>             
                        </li>
                    ))
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