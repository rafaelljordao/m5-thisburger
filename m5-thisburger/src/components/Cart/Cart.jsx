import { useEffect, useState } from "react";
import { CartState } from "../Context/Context"
import { FaTrashAlt } from "react-icons/fa";
import './Cart.css'

export const Cart = () => {

    const {state: { cart }, dispatch } = CartState()

    const [total, setTotal] = useState();

    useEffect(()=> {
        setTotal(cart.reduce((acc, current)=> acc + Number(current.price) * current.qty ,0))
    }, [cart])

    return(
    <div className="cartPage">
        <div className="productContainer">
            <ul>
                {
                    cart.map(prod => (
                        <li className="cartProduct" key={prod.id}>
                            <img className="imgCartProduct" src={prod.image} />
                            <p>{prod.name}</p> 
                            R${prod.price}
                            <input 
                            value={prod.qty} 
                            onChange={(e) => {
                                dispatch({
                                    type: "CHANGE_CART_QTY",
                                    payload: {
                                        id: prod.id,
                                        qty: e.target.value,
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
            <button>Finalizar Compra</button>
        </div>

    </div>)
}