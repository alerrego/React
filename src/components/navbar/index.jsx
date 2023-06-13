import { useEffect, useState } from "react";
import { CartWidget } from "../CartWidget";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../services";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        getCategories().then((data) =>{
            setCategories(data)
        })
    }, [])

    return (
        <nav>
            <div className="NavBar">
                <h3><NavLink to={'/'}>Eagle Shop</NavLink></h3>
                <ul className="list">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
            {categories.map((category)=>
                (
                                <li>
                                <NavLink to = {`/category/${category.id}`}>{category.name}</NavLink>
                            </li>
                ))}

                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}

export { NavBar }