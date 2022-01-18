import React from 'react'

import Pizza from './Pizza'

import pizzas from '../data/pizzas.json'

const App = () => {
    return <ul>{pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} />)}</ul>
}

export default App
