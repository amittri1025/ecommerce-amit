# Step by step process to build this project

1. Get the github repo.
2. Open App.js and start writing routes

      ```js
      import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>;
      ```

3. Go in ProductDetails section

    - write the fetch code using </br> useEffect

      ```js
      const [products, setProducts] = useState([]);

      useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProducts(data);
        };
        fetchProducts();
      }, []);
      ```

- **Main part comes here, making the data at THE TOP
  so every componenet and page below use it..**

  **without PROP DRILLING**

- Creating a Context and Putting a central data in it.

## How to use createContext for data

Read [What are Contexts in React](https://react.dev/reference/react/createContext)

Step 1. First Create Context for a particular thing, here
I want to store Products, so **Product Context**.

File name is ```Contexts/ProductContext.jsx```

  ```js
  // here we created a context
  export const ProductContext = createContext();

  const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    // use effect portion

    return (
      <ProductContext.Provider value={products.id}>
        {children}
      </ProductContext.Provider>
    );
  };

  export default ProductProvider;
  ```

  You successfully Created a Context, Let's use it.

Step 2. To transfer this data to whole project directory , wrap
```index.js``` with our ```ProductProvider```.

```js
// products provider
import ProductProvider from "./contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <ProductProvider>
          <App />
      </ProductProvider>
);
```

***Using it in our components***

```js
  import { ProductContext } from "../contexts/ProductContext";
  const ProductDetails = () =>{

    // importing products from ProductContext
    const { products } = useContext(ProductContext);
    return (
      <>

      </>
    )
  }
```

🥳🎉 Bang Bang, Your're done 🥳🎉 