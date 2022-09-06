import React from 'react';
import { CartState } from '../../Context/Context';
import { useState, useEffect } from 'react';
import { deletePedidos, listPedidos } from '../../services/Request';

import './pedido.css';


const Pedido = () => {
    const [historico, setHistorico] = useState([])
    function fetch(){
        listPedidos()
        .then((response) => {
            response.map((prod) =>{
            prod.itensPedido = JSON.parse(prod.itensPedido)
            prod.itensPedido = prod.itensPedido.map((item)=>{
                return `${item.nomeItem} Quantidade: ${item.qty} `
            })
            })
            setHistorico(response)
    }
    )
    }
useEffect(() => {
    fetch()
}, [])

    const {
        state:{cart}, dispatch
    } = CartState()

    const [totalPedido, setTotalPedido] = useState(0)

    useEffect(()=> {
        setTotalPedido(cart.reduce((acc, current)=> acc + Number(current.preco) * current.qty ,0))
        console.log(cart)
    }, [cart])
    
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
                            <p> Itens do Pedido: {prod.itensPedido} </p>
                            <p> Total: {Number(prod.totalPedido)}</p>   
                            <button> Alterar Último Pedido </button>
                            <button onClick={() => {
                                const confirma = confirm("Tem certeza que deseja cancelar o último pedido?")
                                if (confirma) {
                                    deletePedidos(prod.id)
                                    .then(() => {
                                        fetch()   
                                    })}
                            }}> Cancelar Último Pedido </button>          
                        </li>
                    )})
                }
            </ul>
            </div>
        </div>
    )
}

export default Pedido;