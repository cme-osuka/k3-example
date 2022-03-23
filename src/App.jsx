import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MyErrorBoundary from "./components/MyErrorBoundary";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productsState } from "./stores/products/atom";

// Utan Codesplitting
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { authState } from "./stores/auth/atom";
/*import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";*/

// Med Codesplitting
const Cart = React.lazy(() => import("./pages/Cart"));
const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const SingleProduct = React.lazy(() => import("./pages/SingleProduct"));

// Saker vi behöver för Lazy-loading
// 1. Suspense med Fallback
// 2. React.lazy för att kunna hämta filerna dynamiskt
// 3. I vår React.lazy kallar vi import()

function App() {
  const auth = useRecoilValue(authState);
  const setProducts = useSetRecoilState(productsState);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Hämtar produkterna med fetch
      .then((res) => res.json()) // Omvandlar JSON-svaret till javascript-objekt med res.json()
      .then((json) => setProducts(json)); // Sätter produkter till vårt resultat
  }, []);

  return (
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading..</div>}>
        <Navbar />
        <Routes>
          {!auth.token ? (
            <Route path="*" element={<Login />} />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
            </>
          )}
        </Routes>
      </Suspense>
    </MyErrorBoundary>
  );
}

export default App;
