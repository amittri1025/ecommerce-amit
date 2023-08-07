import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();
      data?setIsLoading(false):setIsLoading(false);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  console.log("from products; ", products); 

  return (
    <ProductContext.Provider value={{products, isLoading}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider; 

