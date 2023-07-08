import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    //Logica del carrito, hooks,etc...
    const [cart, setCart] = useState([]);


    const cartNotification = ()  => {
        return cart.reduce((acc,items) => acc + items.quantity,0) 
    }

    const totalPrice = () =>{
        return cart.reduce((acc,items) => acc + items.price * items.quantity,0)
    }
    
    const clearCart = () =>{
        setCart([])
    }


    const clearItem = (id) =>{
        setCart(cart.filter(item => item.id !== id ))
    }

    const addItem = (item,quantity) =>{
        
        const newCart = [...cart]

        const itemAdded = {...item, quantity}
        
        const isInCart = cart.find((pro) => pro.id === itemAdded.id)
        
        if(isInCart){
            isInCart.quantity += quantity
        }else{
            newCart.push(itemAdded)
        }
        setCart(newCart)
        console.log(cart)
    }
    return (
    <CartContext.Provider value={{addItem,clearItem,clearCart,cart,cartNotification,totalPrice}}>
        {children}
    </CartContext.Provider>
    )
}
