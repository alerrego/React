import { Card} from "react-bootstrap"
import { ItemCount } from "../ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import './index.css'

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext)

    const [quantity, setQuantity] = useState(1);
    const handlerAdd = () =>{
        quantity < item.stock && setQuantity(quantity + 1)
    }
    const handlerRest = () =>{
        quantity > 1 &&  setQuantity(quantity - 1)
    }
    const add = () =>{
        addItem(item,quantity)
    }
    return (
        <div className="card-detail">
            <Card style={{ width: '18rem' }}>
                <div>
                <Card.Img variant="top" src={item.img} />
                </div>
                <div>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <h3>{item.description}</h3>
                        <h3>Precio: {item.price}$</h3>
                    </Card.Text>
                    <ItemCount quantity={quantity} handlerAdd={handlerAdd} handlerRest={handlerRest} add={add}/>
                </Card.Body>
                </div>
            </Card>
        </div>
    )

}

export { ItemDetail }