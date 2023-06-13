import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItems } from "../../services/index";
import { Container} from 'react-bootstrap';
import { ItemList, NavBar } from '../../components/index'
import './index.css'

const ItemListContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate();


    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems()
        if (id) {
            getItems().then((item)=>{
                setItems((item.filter(pro => pro.categoryId === id)));
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
            }))}/>
        </Container>
        </>
    )
}

export { ItemListContainer };