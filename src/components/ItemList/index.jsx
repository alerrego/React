
import { useContext } from "react";
import { Item } from "../Item";
import { Row, Col } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";

const ItemList = ({items}) =>{

    const {addItem} = useContext(CartContext)

    const add = (item) =>{
        addItem(item,1)
    }
    
    return(
    < div className="cards">
    <Row>
    {items.map((item) =>
        <Col>
        <Item key={item.id} item = {item}
        add = {add}
        onItemClicked={item.onItemClicked}
        textButton={item.textButton}
        textButton2={item.textButton2}
        />
        </Col>
    )}
    </Row>
    </div>
    )
}

export {ItemList}