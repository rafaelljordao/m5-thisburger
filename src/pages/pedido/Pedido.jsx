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
                
                return item.qty >0 ? ` ${item.qty}  ${item.nomeItem}; `: ""
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
                        <li className="list" key={prod.id}>
                            <p className='list-itens'> Itens do Pedido: </p>
                            <p> {prod.itensPedido} </p>
                            <p className='total-pedido'> Total: {Number(prod.totalPedido)}</p>  
                            
                            <div className='btn-pedido'>
                            <button className='btn-content' onClick={()=>{
                                navigate(`/pedido/${prod.id}`)
                            }}> Atualizar Pedido </button>

                            <button className='btn-content' onClick={() => {
                                const confirma = confirm("Tem certeza que deseja cancelar o pedido?")
                                if (confirma) {
                                    deletePedidos(prod.id)
                                    .then(() => {
                                        fetch()   
                                    })}
                            }}> Cancelar Pedido </button>
                            </div>
                        </li>
                    )})
                }
            </ul>
            </div>
        </div>
    )
}

export default Pedido;