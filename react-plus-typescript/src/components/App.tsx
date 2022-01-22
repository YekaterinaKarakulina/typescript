import React, { useEffect } from "react";

import Pizza from "./Pizza";
import Cart from "./Cart";
import SpecialOffer from "./SpecialOffer";

import AppStateProvider from "./AppState";

import PizzaSVG from "../svg/pizza.svg";

import pizzas from "../data/pizzas.json";

import AppCSS from "./App.module.css";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);

  // useEffect(() => { // componentDidMount
  //   const listener = () => alert('Hello')
  //   document.addEventListener('mousedown', listener)

  //   return () => { // componentWillUnmount
  //     document.removeEventListener('mousedown', listener)
  //   }
  // }, [])

  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
