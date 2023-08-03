import React, { useContext } from "react";
import {ProductContext} from "../contexts/ProductContext";

const Home = () => {
  const {products} = useContext(ProductContext);

  console.log("productson home : ", products);

  return (
    <>
      <h2>Hello fro home page</h2>
    </>
  );
};

export default Home;
