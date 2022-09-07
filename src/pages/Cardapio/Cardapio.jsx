import { CardComponent } from "../../components/CardComponent/CardComponent";
import { CartState } from "../../Context/Context";
import './Cardapio.css'

export const Cardapio = () => {
  const {
    state: { data },
  } = CartState();

  const produtos = data.products;

  console.log(produtos);

  return (
      <div className="cardapio">
      <div className="cardapioTitle">
        <h2>Confira os nossos Produtos</h2>
        <h3>Adicione ao carrinho o que te interessar! </h3>
        <h4>Os preços estão tão deliciosos quanto os hamburgueres!</h4>
      </div>
        <div className="productsContainer">
            {produtos.map((prod) => (
            <div className="product">
                <CardComponent prod = {prod} key = {prod.id}/>
            </div>
        ))}
      </div>
    </div>
  );
};
