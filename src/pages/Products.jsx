import React from "react";
import { useRecoilValue } from "recoil";
import { productsState } from "../stores/products/atom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAccessDenied } from "../hooks/useAccessDenied";

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Product = styled(Link)`
  width: 130px;
  margin: 12px;
  border: 1px solid black;
  padding: 12px;
  display: flex;
  flex-direction: column;

  img {
    height: 80px;
    width: 80px;
    object-fit: contain;
  }
`;

function Products() {
  useAccessDenied();
  const products = useRecoilValue(productsState);

  return (
    <ProductWrapper>
      {products.map((product) => (
        <Product key={product.id} to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
        </Product>
      ))}
    </ProductWrapper>
  );
}

export default Products;
