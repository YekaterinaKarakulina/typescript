import React from "react";

import { WithAddToCartProps } from "./AddToCart";

import { Pizza } from "./types";

import SpecialOfferCSS from "./SpecialOffer.module.css";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => (
  <div className={SpecialOfferCSS.container}>
    <h2>{pizza.name}</h2>
    <p>{pizza.description}</p>
    <p>{pizza.price}</p>
    <WithAddToCartProps>
      {({ addToCart }) => (
        <button
          type="button"
          onClick={() =>
            addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
          }
        >
          Add to Cart
        </button>
      )}
    </WithAddToCartProps>
  </div>
);

export default SpecialOffer;
