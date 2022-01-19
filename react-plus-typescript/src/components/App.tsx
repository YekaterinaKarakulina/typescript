import React from "react";

import Pizza from "./Pizza";

import pizzas from "../data/pizzas.json";

import AppCSS from "./App.module.css";

const App = () => {
  return (
    <div className={AppCSS.container}>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default App;
