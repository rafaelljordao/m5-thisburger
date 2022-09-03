import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../../Context/Context";
import './Header.css'

export const Header = () => {



const {state: {cart},
    
} = CartState()



    return(
        <div className="header">
            <div>
                <Link to="/cardapio">
                    <h2 className="thisburger">This.Burguer</h2>
                </Link>
            </div>
            <div className="cart">
                <Link to='/cart'>
                    <FaShoppingCart color="black"/>
                    <span className="cartNumber">{cart.length}</span>
                </Link>  
            </div>
        </div>
    )
}