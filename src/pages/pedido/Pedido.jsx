import React from 'react';
import { CartState } from '../../Context/Context';
import { useState, useEffect } from 'react';
import { deletePedidos, listPedidos } from '../../services/Request';
import './pedido.css';
import { useNavigate } from 'react-router-dom';


const Pedido = () => {
    const [historico, setHistorico] = useState([])
    const navigate = useNavigate()
    function fetch(){
        listPedidos()
        .then((response) => {
            console.log(response)
            response.map((prod) =>{
            prod.itensPedido = JSON.parse(prod.itensPedido)
            prod.itensPedido = prod.itensPedido.map((item)=>{
                
                return item.qty >0 ? `${item.nomeItem} Quantidade: ${item.qty} `: ""
            })
            })
            setHistorico(response)
    }
    )
    }
useEffect(() => {
    fetch()
}, [])

    return(
        <div className='pedido'> 
            <div className="pedidoContainer">
            <ul>
                {
                    historico.map((prod) => {
                        return(
                        <li className="cartPedido" key={prod.id}>
                            <img className="imgCartProduct" src={prod.image} />
                            <p>{prod.nomeItem}</p> 
                            <p> Itens do Pedido: {prod.itensPedido} </p>
                            <p> Total: {Number(prod.totalPedido)}</p>  
                            
                            <button onClick={()=>{
                                navigate(`/pedido/${prod.id}`)
                            }}> Alterar Pedido </button>


                            <button onClick={() => {
                                const confirma = confirm("Tem certeza que deseja cancelar o pedido?")
                                if (confirma) {
                                    deletePedidos(prod.id)
                                    .then(() => {
                                        fetch()   
                                    })}
                            }}> Cancelar Pedido </button>      
                        </li>
                    )})
                }
            </ul>
            </div>
        </div>
    )
}

export default Pedido;