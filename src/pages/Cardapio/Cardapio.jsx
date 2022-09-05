import { CardComponent } from "../../components/CardComponent/CardComponent";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import { CartState } from "../../Context/Context";
import './Cardapio.css'

export const Cardapio = () => {
  const {
    state: { data },
  } = CartState();

  const produtos = data.products;

  console.log(produtos);

  return (
    <PageWrapper>
      <div className="cardapio">
      <h2>Produtos</h2>
      <div className="productsContainer">
        {produtos.map((prod) => (
            <div>
                <CardComponent prod = {prod} key = {prod.id}/>
            </div>
        ))}
      </div>
    </div>
    </PageWrapper>
  );
};
