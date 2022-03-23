import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../stores/cart/atom";
import { productsState } from "../stores/products/atom";
import styled from "styled-components";

const CartItem = styled.div`
  display: flex;
`;

function Cart() {
  const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);

  function handleRemove(id) {
    setCart(cart.filter((ci) => ci.id !== id));
  }

  function getProduct(ci) {
    const product = products.find((p) => p.id === ci.id);
    const quantity = ci.qty;

    return (
      <CartItem key={ci.id}>
        <h3>{product.title}</h3>
        <p>Antal: {quantity}</p>
        <button onClick={() => handleRemove(ci.id)}>X</button>
      </CartItem>
    );
  }

  return (
    <div>
      <h1>Min cart</h1>
      {cart.map(getProduct)}
    </div>
  );
}

export default Cart;
