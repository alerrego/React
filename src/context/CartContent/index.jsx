import { createContext, useState } from "react";

const CartContext = createContext([])

const CartProvider = ({children}) =>{

    //Logica del carrito, hooks,etc...
    const [cart, setCart] = useState([]);

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.find(item => item.id === id) ? true : false;
    }

    const clearItem = (id) =>{
        setCart(cart.filter(item => item.id !== id ))
    }

    const addItem = (item,quantity) =>{
        if (isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, quantity : product.quantity + quantity } : product
            }))
        } else{
            setCart([...cart, {...item, quantity}])
        }
    }
    return (
    <CartContext.Provider value={{addItem,isInCart,clearItem,clearCart}}>
        {children}
    </CartContext.Provider>
    )
}

export {CartProvider}