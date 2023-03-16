import React from "react";
import { useParams } from "react-router-dom";
import {
  ProductsButton,
  ProductsCard,
  ProductsContainer,
  ProductsDesc,
  ProductsImg,
  ProductsInfo,
  ProductsPrice,
  ProductsTitle,
  ProductsWrapper,
} from "../Product/ProductElements";

const ExploreDetails = ({ data }) => {
  const { name } = useParams();
  return (
    <>
      <ProductsContainer>
        <ProductsWrapper>
          {data
            .filter((dish) => dish.name === name)
            .map((dish) => (
              <ProductsCard key={dish.name}>
                  <ProductsImg src={dish.img} alt={dish.alt}/>
                <ProductsInfo>
                  <ProductsTitle>{dish.name}</ProductsTitle>
                  <ProductsDesc>{dish.desc}</ProductsDesc>
                  <ProductsPrice>{dish.price}</ProductsPrice>
                  <ProductsButton>{dish.button}</ProductsButton>
                </ProductsInfo>
              </ProductsCard>
            ))}
        </ProductsWrapper>
      </ProductsContainer>
    </>
  );
};

export default ExploreDetails;
