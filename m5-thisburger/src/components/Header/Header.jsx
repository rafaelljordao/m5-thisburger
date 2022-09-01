import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <div className="mainContainer header block">
            <div>
                <Link to="/">
                    <h2>This.Burguer</h2>
                </Link>
            </div>
            <div>
                <Link to='/cart'>
                    <FaShoppingCart color="black"/>
                     Cart
                </Link>  
            </div>
        </div>
    )
}