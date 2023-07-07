import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container} from 'react-bootstrap';
import { ItemList} from '../../components/index'
import { getItems } from '../../firebase/services/index'
import './index.css'

const ItemListContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate();



    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems()
        if (id) {
            getItems().then((item)=>{
                setItems((item.filter(pro => pro.category === id)));
            })
        }else {
            getItems().then((item) => setItems(item))
        }
    }, [id])


    return (
        <>     
        <Container className="container">
            <ItemList items={items.map(item =>({
                ...item,
                onItemClicked: () => navigate(`/itemDetail/${item.id}`),
                textButton: "Ver detalle",
                textButton2: 'Comprar'
            }))}/>
        </Container>
        </>
    )
}

export { ItemListContainer };