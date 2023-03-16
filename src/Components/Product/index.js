import React from "react";
import { Link } from "react-router-dom";
import {
  ProductsButton,
  ProductsDesc,
  ProductsPrice,
  ProductsCard,
  ProductsContainer,
  ProductsHeading,
  ProductsInfo,
  ProductsWrapper,
  ProductsTitle,
  ProductsImg,
} from "./ProductElements";

const Product = ({ heading, data }) => {
  return (
    <>
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper >
        {data.map((product, index) => {
          return (
            <Link to={`/details/${product.name}`}>
            <ProductsCard key={index}>
              <ProductsImg src={product.img} alt={product.alt} />
              <ProductsInfo >
                <ProductsTitle>{product.name}</ProductsTitle>
                <ProductsDesc>{product.desc}</ProductsDesc>
                <ProductsPrice>{product.price}</ProductsPrice>
                <ProductsButton>{product.button}</ProductsButton>
              </ProductsInfo>
            </ProductsCard>
            </Link>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
   
    </>
  );
};

export default Product;
