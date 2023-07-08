
import './index.css'

const ItemCount = ({quantity,handlerRest,handlerAdd,add}) =>{

   
    return(
        <>
        <div className="item-count">
        <button onClick={() => {handlerRest()}}>-</button>
            <p>Quantity: {quantity} </p>
            <button onClick={() => {handlerAdd()}}>+</button>
        </div>
        <button className="add-cart-btn" onClick={() => {add()}}>Add to cart</button>
        </>
    )
}

export {ItemCount}