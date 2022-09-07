import { useEffect, useState } from "react";
import { CartState } from "../../Context/Context";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { createPedidos, listPedidosById } from "../../services/Request";
import './Cart.css'

export const Cart = () => {
    const {state: { cart }, dispatch } = CartState()
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        setTotal(cart.reduce((acc, current)=> acc + Number(current.preco) * current.qty ,0))
        console.log(cart)
    }, [cart])


    return (
    <div className="cartPage">
        <div className="productContainer">
            <ul>
                {
                    cart.map(prod => (
                        <li className="cartProduct" key={prod.id}>
                            <img className="imgCartProduct" src={prod.image} />
                            <p>{prod.name}</p> 
                            R${Number(prod.preco)}
                            <input 
                            value={prod.qty} 
                            onChange={(e) => {
                                dispatch({
                                    type: "CHANGE_CART_QTY",
                                    payload: {
                                        id: prod.id,
                                        qty: Number(e.target.value),
                                    }
                                })
                            }}
                            className="numberImput" 
                            type="number" 
                            min="0"/>
                            <span onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod
                                })
                                }}><FaTrashAlt/>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="subTotal">
            <span>Subtotal: ({cart.length} itens)</span>
            <span>Total: R${total}</span>
            <Link to="/pedido">
            <button onClick={() => createPedidos({idCliente:1, itensPedido:JSON.stringify(cart), quantidadeItens:cart.length, totalPedido:total})}>Finalizar Compra</button>
            </Link>
        </div>
    </div>)
}