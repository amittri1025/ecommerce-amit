import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  IoMdArrowBack,
  IoMdArrowForward,
  IoMdArrowRoundForward,
  IoMdBackspace,
} from "react-icons/io";
import { FiTrash, FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";

// import components
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  // console.log(addToCart);

  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-screen shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all 
    duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-2 border-b-4">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        {/* icon  */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-3xl" />
        </div>
      </div>
      <div className="flex flex-col justify-around h-full">
        <div className="flex flex-col gap-y-2 h-[520px] lg:h-[500px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="flex flex-col flex-1 gap-y-3 py-4">
          <div className="flex w-full justify-between items-center">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span>${" "}
              {parseFloat(total).toFixed(2)}
            </div>
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 bg-red-500 hover:bg-red-600 transition-all text-white w-12 h-12 flex 
            justify-center items-center text-xl
            "
            >
              <FiTrash />
            </div>
          </div>
          <Link
            to="/"
            className="bg-gray-200 flex p-4 justify-center
          items-center text-primary w-full font-medium"
          >
            View Cart
          </Link>
          <Link
            to="/"
            className="bg-primary text-white flex p-4 justify-center
          items-center w-full font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
