// -- // -- / interface / -- // -- //
interface Cart {
  calculateTotal(): number;
}
// -- // -- // -- // -- //

interface Cart {
  x: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: { discountCode: number }) {
    if (options && options.discountCode) {
      // apply discount
    }
    return 1;
  },
};

// -- // -- / namespace / -- // -- //
namespace MyNameSpace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}
// -- // -- // -- // -- //

namespace MyNameSpace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNameSpace.x;
MyNameSpace.getX();

const someInterface: MyNameSpace.SomeInterface = {
  x: 1,
  y: 2,
};

// -- // -- // -- // -- //

function someFunction() {
  return 10;
}

namespace someFunction {
  export const someProperty = 10;
}

someFunction.someProperty === 10;

// -- // -- // -- // -- //

enum Vegetables {
    Tomato = 'tomato',
    Onion = 'onion'
  }
  
  namespace Vegetables {
    export function makeSalad() {
      return Vegetables.Tomato + Vegetables.Onion;
    }
  }
  
  const salad = Vegetables.makeSalad();

// -- // -- // -- // -- //

class Salad {}

namespace Salad {
  export const availableDressings = ['olive oil', 'yoghurt'];
}

Salad.availableDressings.includes('olive oil');

