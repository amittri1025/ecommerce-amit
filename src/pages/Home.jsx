import React , {useContext} from 'react';
import {ProductContext} from './ProductDetails';


const Home = () => {

  const products = useContext(ProductContext);
  console.log(products);

  return (

    <>
      <h2>Hello fro home page</h2>
      
    </>
  )
  


};

export default Home;
