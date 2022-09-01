import { CartState } from "../Context/Context";

export const Main = () => {
  const {
    state: { data },
  } = CartState();

  const produtos = data.products;

  console.log(produtos);

  return (
    <div className="block firstCol">
      <h2>Produtos</h2>
      <div className="productsContainer">
        {produtos.map((prod, index) => (
            <div key={index}>
                <h2>{prod.name}</h2>
                <h3>{prod.price}</h3>
                <img src={prod.image} />
            </div>
        ))}
      </div>
    </div>
  );
};
