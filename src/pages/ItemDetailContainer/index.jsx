import { useParams } from "react-router-dom"
import { ItemDetail } from "../../components"
import { useEffect, useState } from "react"
import { getItem } from "../../firebase/services"

const ItemDetailContainer = () =>{
    const {id} = useParams()

    const [item,setItem] = useState();

    useEffect(() =>{
        getItem(id).then((data) =>
        {
            setItem(data);
        })
    },[])

    if(!item) return <div>Cargando...</div>

    return(
        <div className="card">
            <ItemDetail key={item.id} name={item.name} id={item.id} description={item.description} categoryId={item.categoryId} img={item.img} />
        </div>
    )
}

export {ItemDetailContainer}