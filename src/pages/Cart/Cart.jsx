import { useEffect, useState } from "react";
import { CartState } from "../../Context/Context";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { createPedidos } from "../../services/Request";
import "./Cart.css";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(0);

  const handleKeyDown = (event) => {
    if (
      event.key == "e" ||
      event.key == "0" ||
      event.key == "Backspace" ||
      event.key == "." ||
      event.key == "-" ||
      event.key == "+" ||
      event.key == "-" ||
      event.key == "," ||
      !event.key == /^[0-9\b]+$/
    ) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, current) => acc + Number(current.preco) * current.qty,
        0
      )
    );
  }, [cart]);

  return (
    <div className="cartPage">
      <h1>Carrinho</h1>
      <div className="container">
        <div className="productContainer">
          <ul>
            {cart.map((prod) => (
              <li className="cartProduct" key={prod.id}>
                <img className="imgCartProduct" src={prod.image} />
                <p>{prod.nomeItem}</p>
                R${Number(prod.preco)}
                <input
                  value={prod.qty}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => {
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: prod.id,
                        qty: Number(e.target.value),
                      },
                    });
                  }}
                  className="numberImput"
                  type="number"
                  min="1"
                />
                <span
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    });
                  }}
                >
                  <FaTrashAlt />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="subTotal">
          <span>Subtotal: ({cart.length} itens)</span>
          <span>Total: R${total.toFixed(2)}</span>
          <Link to="/pedido">
            <button
              className="buttonFinalizar"
              onClick={() =>
                createPedidos({
                  idCliente: 1,
                  itensPedido: JSON.stringify(cart),
                  quantidadeItens: cart.length,
                  totalPedido: total,
                })
              }
            >
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
