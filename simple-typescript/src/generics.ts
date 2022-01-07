// Generic Functions
function genericFunction<T>(x: T): T {
    return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// Generic Interfaces
interface GenericInterface<T> {
    (a:T): T;
    someProp: T;
}

interface GenericInterface<T> {
    <U>(a: U): U;
    someProp: T;
}

// Generic Classes
class GenericClass<P> {
    constructor(public prop: P) {}

    getProps(): P {
        return this.prop;
    }
}

// Example - cakes

interface Expirable {
    expiryDate: Date;
}
interface ChocolateCake extends Expirable {}
interface VanilaCake  extends Expirable{}

const chocolateCakes: ChocolateCake[] = [
    { expiryDate: new Date() }
]

const vanilaCakes: VanilaCake[] = [
    { expiryDate: new Date() }
]

// interface GetExpiredItemsFunction {
//     <Item extends Expirable>(items: Array<Item>): Array<Item>;
// }
// const getExpiredItems: GetExpiredItemsFunction = (items) => {
const getExpiredItems = <Item extends Expirable>(items: Array<Item>) => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate)
};

const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocolateCakes)
const expiredVanilaCakes = getExpiredItems<VanilaCake>(vanilaCakes)

// Example - shopping cart

interface ShoppingCart<ItemId, Item> {
    items: Array<Item>
    addItem(this: ShoppingCart<ItemId, Item>, item: Item): void
    getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined
}

interface Item {
    id: number
    price: number
}

const cart: ShoppingCart<number, Item> = {
    items: [],
    addItem(item) {
        this.items.push(item)
    },
    getItemById(id) {
        return this.items.find(item => item.id === id)
    }
}
