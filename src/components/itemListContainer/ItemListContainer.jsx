import "./ItemListContainer.css";

const ItemListContainer = (props) =>{
    return(
        <div className="ItemListContainer">
            <h1>{props.texto}</h1>
        </div>
    )
}

export {ItemListContainer};