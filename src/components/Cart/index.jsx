import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import './index.css'


const Cart = () =>{

    const {cart, totalPrice, clearCart, clearItem} = useContext(CartContext)

    return(
        <>
        <div className="container">
                {
                    cart.map((item) => (
                    <div className="card">
                        <img  src={item.img}/>
                        <h2> {item.name} </h2>
                        <h3> $ {item.price}</h3>
                        <h4> Quantity: {item.quantity} </h4>
                        <button onClick={() => {clearItem(item.id)}}>Clean item</button>
                    </div>
                    ))
                }
        </div>
        <div></div>
        <div>
        {
            cart.length > 0 ?
        <div className="finalizar">
            <div className="botones">
                <button className="clear" onClick={ () => {clearCart()}}>Clean cart </button>
                <Link to='/checkout'><button className="btn-finalizar">Finalize purchase</button></Link>
            </div>
            <p className="total">Total to pay: {totalPrice()}</p>
        </div>:
        <h2 className="empty">Cart is empty</h2>
        }
        </div>
        </>

    )
}

export {Cart}