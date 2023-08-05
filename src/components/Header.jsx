import React, { useContext, createContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';



export const CartContext =  createContext();

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
    <div className='bg-pink-500'>
      <div>Header</div>
      <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex flex-row relative'>
        <BsBag className='text-3xl' />
      </div>
    </div>
  )
};

export default Header;
