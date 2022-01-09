/* - - - - -  Partial<T> - - - - - */
// interface A {
//   x: number;
//   y: number;
// }
// Partial<A> = {
//     x?: number
//     y?: number
// }

interface Starship {
  name: string;
  enableHyberjump: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {};

updateStarship(1, {
  name: "Explorer",
});

/* - - - - - Required<T> - - - - - */
// interface A {
//   x?: number;
//   y?: number;
// }
// Required<A> = {
//     x: number
//     y: number
// }

/* - - - - - Readonly<T> - - - - - */
// interface A {
//   x: number;
//   y: number;
// }
// Readonly<A> = {
//     readonly x: number
//     readonly y: number
// }

/* - - - - - Record<K, T> - - - - -*/
// const aRecord: Record<string, number> = {
//     apples: 10
//     oranges: 20
// }

const starships: Record<string, Starship> = {
  Explorer1: {
    name: "Explorer1",
    enableHyberjump: true,
  },
  Explorer2: {
    name: "Explorer2",
    enableHyberjump: false,
  },
};

/* - - - - - Pick<T, K> - - - - - */
// interface A {
//     x: number
//     y: number
//     z: number
// }
// Pick<A, "x" | "z"> = {
//     x: number
//     z: number
// }

type StarshipName = Pick<Starship, "name">;

/* - - - - - Omit<T, K> - - - - - */
// interface A {
//     x: number
//     y: number
//     z: number
// }
// Omit<A, "x" | "z"> = {
//     y: number
// }

type StarshipWWithoutName = Omit<Starship, "name">;

/* - - - - - Exclude<T, U> - - - - - */
// type A = string | string[] | undefined
// Exclude<A, undefined> = string | string[]

type AvailableDrinks = "Coffee" | "Tea" | "Orange juice" | "Lemonade";

let JohnsDrink: AvailableDrinks;
JohnsDrink = "Coffee";

type DrinksJaneDoesntLike = "Coffee" | "Orange juice";

let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
JanesDrink = "Tea";

/* - - - - - Extract - - - - - */ // opposite to Exclude

type DrinksJaneLikes = "Tea" | "Lemonade" | "Moxito";
let JanesDrink2: Extract<AvailableDrinks, DrinksJaneLikes>;

/* - - - - - NonNullable<T> - - - - - */
// type A = string | string[] | null | undefined
// NonNullable<A> = string | string[]

interface StarshipProperties {
  color?: "blue" | "red" | "green";
}

function paintStarship(
  id: number,
  color: NonNullable<StarshipProperties["color"]>
) {
  return {
    id,
    color,
  };
}

// paintStarship(1, undefined) *if strict null check enabled
paintStarship(1, "red");

/* - - - - - ReturnType<T> - - - - - */
// function helloWorldFn() {
//     return 'Hello World'
// }

// type HelloWorldReturnType = ReturnType<typeof helloWorldFn> // string

type PaintStarshipReturn = ReturnType<typeof paintStarship>;

/* - - - - - InstanceType<T> - - - - - */

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean;
    delete() {}
  };
}

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableCarInstance = InstanceType<typeof DeletableCar>;
type DeletableUserInstance = InstanceType<typeof DeletableUser>;

class Profile {
  car: DeletableCarInstance;
  user: DeletableUserInstance;
}

const profile = new Profile()
profile.car = new DeletableCar('Ferrari')
profile.user = new DeletableUser('John')

/* - - - - - ThisType<T> - - - - - */
interface MyObject {
    sayHello(): void
}

interface MyObjectThis {
    helloWorld(): string
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello() {
        return this.helloWorld()
    }
}

myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return 'Hello World!'
    }
})

console.log(myObject.sayHello())


