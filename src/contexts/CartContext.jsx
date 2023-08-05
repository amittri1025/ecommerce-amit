import React, {useContext ,createContext, useEffect, useState} from 'react';

export const CartContext = createContext();

/*
Basically here , after settiup up thee context
, we are adding the cart logic , if the product already exists increase its count
otherwise add the item as a new item
*/
const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) =>{
    
    // when new item is added 
    let newItem = {...product, amount:1};

    const cartItem = cart.find((item)=>{
      return item.id === id;
    });

    // if cart item is already in the cart

    if(cartItem){
      const newCart = [...cart].map((item)=>{
        if(item.id===id){
          return {...item, amount:cartItem.amount+1};
        }else{
          return item;
        }
      });
        setCart(newCart);
    }else{
      setCart([...cart, newItem])
    } 
  };
  
  const removeFromCart = (id) =>{  
  
    const newCart = cart.filter((item)=>{
      return item.id !== id;
    })

    setCart(newCart);
  }


  
  return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>{children}</CartContext.Provider>;
};  

export default CartProvider;
