import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MyErrorBoundary from "./components/MyErrorBoundary";
// Utan Codesplitting
import Navbar from "./components/Navbar";
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
  return (
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading..</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </MyErrorBoundary>
  );
}

export default App;
