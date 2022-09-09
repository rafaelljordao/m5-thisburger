import { CartState } from "../../Context/Context";
import "./CardComponent.css";

export const CardComponent = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <div className="card-img">
        <img className="prodImage" src={prod.image} />
      </div>
      <div className="ingredientes">
        Ingredientes: {prod.ingredientes.split(",").join(", ")}
      </div>
      <h3>Preço: R$ {prod.preco}</h3>
      {cart.some((p) => p.id === prod.id) ? (
        <button
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod,
            });
          }}
          className=" botao removeButton"
        >
          Remover do Carrinho
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: prod,
            });
          }}
          className=" botao addButton"
        >
          Adicionar ao carrinho
        </button>
      )}
    </div>
  );
};
