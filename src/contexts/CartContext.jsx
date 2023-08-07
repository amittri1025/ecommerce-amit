import React, { useContext, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

/*
Basically here , after settiup up thee context
, we are adding the cart logic , if the product already exists increase its count
otherwise add the item as a new item
*/
const CartProvider = ({ children }) => {

  //cart State
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(120);


  useEffect(()=>{
    const total = cart.reduce((acc, currItm)=>{
      return acc + currItm.price*currItm.amount;
    }, 0);

    setTotal(total);

    const itemadd = cart.reduce((acc, currItm)=>{
      return acc + currItm.amount;
    }, 0);

    setItemAmount(itemadd);
    
  }, [cart])

  const addToCart = (product, id) => {
    // when new item is added
    let newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart , single element

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  };

  // clear cart

  const clearCart = () => {
    setCart([]);
  };

  // increase amount

  const increaseAmount = (id) => {
    const cartItem = cart.find((item)=>item.id===id)
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item)=> {
      return item.id === id ;
    });

    if(cartItem){
      const newCart = cart.map((item)=>{
        if(item.id === id){
          return {...item, amount: cartItem.amount-1};
        }else{
          return item;
        }
      })
      setCart(newCart);
    }
    
      if (cartItem.amount < 2){
        removeFromCart(id); 
      }


  };
  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount, 
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
