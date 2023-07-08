
import { CartWidget } from "../CartWidget";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="NavBar">
                <h3><NavLink to={'/'}>Eagle Shop</NavLink></h3>
                <ul className="list">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/T-Shirts'}>T-Shirts</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/Accesories'}>Accesories</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/Shoes'}>Shoes</NavLink>
                    </li>
                </ul>
                <NavLink to={'/cart'}><CartWidget/></NavLink>
            </div>
        </nav>
    )
}

export { NavBar }