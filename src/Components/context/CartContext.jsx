import { createContext, useState } from "react"

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let product = cart.find(prod => prod.id === item.id);
            product.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}])
        }
    }
    
    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    }
    
    const clear = () => {
        setCart([]);
    }
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }
    
    const getSumProducts = () => {
        return cart.reduce((acum, items) => acum += items.quantity * items.precio, 0)
    }

    const getCountProducts = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, getSumProducts, getCountProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

