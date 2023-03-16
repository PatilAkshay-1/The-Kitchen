import React from "react";
import { FeatureButton, FeatureContainer } from "./FeatureElments";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the day</h1>
      <p>Todays special Pizza has a thin crust and cheese toppings</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
