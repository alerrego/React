import { useParams } from "react-router-dom"
import { ItemDetail } from "../../components"
import {  useEffect, useState } from "react"
import { getItem } from "../../firebase/services"
import './index.css'

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
        <div className="container">
            <ItemDetail key={item.id} item={item}/>
        </div>
    )
}

export {ItemDetailContainer}