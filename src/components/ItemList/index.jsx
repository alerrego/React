
import { Item } from "../Item";
import { Row, Col } from "react-bootstrap";

const ItemList = ({items}) =>{
    return(
    < div className="cards">
    <Row>
    {items.map((item) =>
        <Col>
        <Item key={item.id} name={item.name} description={item.description} id={item.id} categoryId={item.categoryId} img={item.img}
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