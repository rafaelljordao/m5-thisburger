import React from "react";
import { useState, useEffect } from "react";
import { deletePedidos, listPedidos } from "../../services/Request";
import { useNavigate } from "react-router-dom";
import loadingBurger from "../../assets/loadingBurger.png";
import "./pedido.css";

const Pedido = () => {
  const [historico, setHistorico] = useState([]);
  const [isLoading, setIsLoading] = useState('loadingBurguer popup');
  const [hidden, setHidden] = useState('hidden');

  const navigate = useNavigate();
  function fetch() {
    listPedidos().then((response) => {
      response.map((prod) => {
        prod.itensPedido = JSON.parse(prod.itensPedido);
        prod.itensPedido = prod.itensPedido.map((item) => {
          return item.qty > 0 ? ` ${item.qty}  ${item.nomeItem}; ` : "";
        });
      });
      setHistorico(response);
      setIsLoading('hidden')
      setHidden('pedidoContainer')
    });
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="pedido">
      <div>
        <div className={isLoading}>
          <img src={loadingBurger} />
        </div>
      </div>
      <div className={hidden}>
        <ul>
          {historico.map((prod) => {
            return (
              <li className="list" key={prod.id}>
                <div className="listInfo">
                  <p className="list-itens">Itens do Pedido:</p>
                  <p> {prod.itensPedido} </p>
                  <p className="total-pedido">
                    Total: {Number(prod.totalPedido).toFixed(2)}
                  </p>
                </div>

                <div className="btn-pedido">
                  <button
                    className="btn-content"
                    onClick={() => {
                      navigate(`/pedido/${prod.id}`);
                    }}
                  >
                    Atualizar Pedido
                  </button>

                  <button
                    className="btn-content"
                    onClick={() => {
                      const confirma = confirm(
                        "Tem certeza que deseja cancelar o pedido?"
                      );
                      if (confirma) {
                        deletePedidos(prod.id).then(() => {
                          fetch();
                        });
                      }
                    }}
                  >
                    Cancelar Pedido
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pedido;
