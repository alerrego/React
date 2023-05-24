import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css";

const NavBar = () => {
    return (
        <nav>
            <div className="NavBar">
                <h3>Eagle Shop</h3>
                <ul className="list">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Products</a>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}

export { NavBar }