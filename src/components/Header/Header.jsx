import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CartState } from "../../Context/Context";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = (props) => {
  const {
    state: { cart },
  } = CartState();

  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <Link to="/">home</Link>
        <Link to='/cardapio'>cardápio</Link>
        <Link to="/" >quem somos</Link>
        <Link to="/pedido">pedidos</Link>
        <div className="cart">
          <Link to="/carrinho">
            <FaShoppingCart />
            <span className="cartNumber">{cart.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header
