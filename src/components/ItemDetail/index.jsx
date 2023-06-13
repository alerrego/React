import { Card,Button } from "react-bootstrap"

const ItemDetail = ({ id, name, description, categoryId, img }) => {
    return (
        <div className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )

}

export { ItemDetail }