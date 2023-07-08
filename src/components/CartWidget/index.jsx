import {BsCart} from 'react-icons/bs'
import "./CartWidget.css"
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

const CartWidget = () =>{
    
    const {cartNotification} = useContext(CartContext)
    
    return(
        <div className="Cart-Widget">
            <a className='cart-icon'><BsCart/></a>
            <span className='cart-notification'>{cartNotification()}</span>
        </div>
    )
}

export {CartWidget}