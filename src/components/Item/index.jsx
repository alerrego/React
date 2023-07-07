import { Card,Button } from "react-bootstrap"
import './index.css'

const Item = ({name,description,img,id,onItemClicked,addItem,textButton,textButton2}) =>{
    return(
        <div className="card">
            <Card>
            <Card.Img className="img" variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                        {description}
                </Card.Text>
                <Button variant="primary" onClick={onItemClicked}>
                    {textButton}
                </Button>
                <Button variant="primary" onClick={onItemClicked}>
                    {textButton2}
                </Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export {Item}