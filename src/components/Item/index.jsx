import { Card,Button } from "react-bootstrap"
import './index.css'

const Item = ({item,add,onItemClicked,textButton,textButton2}) =>{
    return(
        <div className="card">
            <Card>
            <Card.Img className="img" variant="top" src={item.img}/>
            <Card.Body>
                <Card.Title><h2 className="title">{item.name}</h2></Card.Title>
                <Card.Text>
                        <h4 className="price">$ {item.price}</h4>
                </Card.Text>
                <div className="buttons">
                <Button className="button" variant="primary" onClick={onItemClicked}>
                    {textButton}
                </Button>
                <Button className="button" variant="primary" onClick={() => {add(item)}}>
                    {textButton2}
                </Button>
                </div>
            </Card.Body>
            </Card>
        </div>
    )
}

export {Item}