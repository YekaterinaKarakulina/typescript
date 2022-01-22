import React from "react";

import { useStateDispatch } from "./AppState";

import { Pizza } from "./types";

import SpecialOfferCSS from './SpecialOffer.module.css'

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
    const dispatch = useStateDispatch();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
        },
      },
    });
  };

  return (
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default SpecialOffer;
