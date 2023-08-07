import React, {useContext} from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {

  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  // destruction
  const { id, title, amount, price, image } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-300 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className="max-w-[80px]" />
        </Link>
        {/* title and remove icon */}
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm font-medium uppercase 
            max-w-[240px] text-primary hover:underline
            "
            >
              {title}
            </Link>
            {/* remove button */}
            <div onClick={()=>{removeFromCart(id)}} className="text-3xl cursor-pointer">
              <IoMdClose className="text-grey-500 hover:text-red-500 transition" />
            </div>
          </div>
          {/* increment decreement and amount */}
          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px]  items-center h-full text-primary font-medium">
              <div onClick={()=>decreaseAmount(id)} className=" flex flex-1 justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="flex h-full justify-center items-center px-2">
                {amount}
              </div>
              <div onClick={()=>increaseAmount(id)} className="flex flex-1 h-full justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around">$ {price}</div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              {`$ ${parseFloat(item.price*amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

{
  /* <div className="flex flex-row justify-between py-2">
<img src={image} className="h-20" />
<p>{title}</p>
<p className="text-red-600">{amount}</p>
</div> */
}
