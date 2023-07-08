import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { useForm } from "react-hook-form";
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import {db} from '../../firebase/config'

import './index.css'


const CheckOut =  () =>{

    const [id,setId] = useState("")

    const {cart,totalPrice,clearCart} = useContext(CartContext)

    const {register,handleSubmit} = useForm();


    const send =  (data) => {
        const order = {
            client: data,
            total: totalPrice()
        }

        console.log(order)

        const ordersRef = collection(db,"orders")

        addDoc(ordersRef, order)

        .then((doc) =>{
            setId(doc.id)
            clearCart()
        })
    }

    if (id) {
        return (
            <>
                <div className="buy">
                    <h2>Thanks for buying</h2>
                    <p>Your buy id is: {id}</p>
                </div>
            </>
        )
    }

    return(
        <div className="form-buy">
            <h1>Finalize buy</h1>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="Name" {...register("name")} />
                <input type="email" placeholder="Email" {...register("email")} />
                <input type="phone" placeholder="phone" {...register("phone")} />

                <button type="submit">Buy</button>
            </form>
        </div>
        
    )
}

export {CheckOut}