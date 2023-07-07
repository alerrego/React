import './index.css'

const ItemCount = () =>{
    return(
        <div className="item-count">
            <button>+</button>
            <p>Quantity: </p>
            <button>-</button>
        </div>
    )
}

export {ItemCount}