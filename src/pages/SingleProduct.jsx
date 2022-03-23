import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { productsState } from "../stores/products/atom";
import styled from "styled-components";
import { cartState } from "../stores/cart/atom";

const Container = styled.div`
  display: flex;

  img {
    max-width: 300px;
  }
`;

function SingleProduct() {
  const params = useParams(); // /products/1
  const products = useRecoilValue(productsState);
  const product = products.find((p) => p.id === parseInt(params.productId));
  const [cart, setCart] = useRecoilState(cartState);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  function handleAddToCart() {
    const newCartItem = {
      id: product.id,
      qty: 1,
    };

    setCart([...cart, newCartItem]);
  }

  return (
    <Container>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </Container>
  );
}

export default SingleProduct;
