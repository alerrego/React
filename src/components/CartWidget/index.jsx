import {BsCart} from 'react-icons/bs'
import "./CartWidget.css"

const CartWidget = () =>{
    return(
        <div className="Cart-Widget">
            <a className='cart-icon'><BsCart/></a>
            <span className='cart-notification'>2</span>
        </div>
    )
}

export {CartWidget}