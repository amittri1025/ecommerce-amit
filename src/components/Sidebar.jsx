import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  IoMdArrowBack,
  IoMdArrowForward,
  IoMdArrowRoundForward,
  IoMdBackspace,
} from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";

// import components
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  // console.log(addToCart);

  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all 
    duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-2 border-b-4">
        <div className="uppercase text-sm font-semibold">Shopping Bag(0)</div>
        {/* icon  */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-3xl" />
        </div>
      </div>
      <div>
        {cart.map((item) => 
         { return <CartItem item={item} key={item.id} />}
        )}
      </div>
    </div>
  );
};

export default Sidebar;