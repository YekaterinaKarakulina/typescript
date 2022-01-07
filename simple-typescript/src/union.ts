// Example 1
function someFn(myArgument: number | string | boolean) {
    if (typeof myArgument === 'string') {
        let x = myArgument.toUpperCase()
    } else if (typeof myArgument === 'number') {
        myArgument.toFixed();
    } else {
        // boolean
    }
}

// Example 2
interface Dog {
    barking(): {}
    walk(): {}
}

interface Cat {
    meowing(): {}
    walk(): {}
}

function callMyPet(pet: Dog | Cat) {
    pet.walk()
    if ((<Dog>pet).barking) {
        (<Dog>pet).barking()
    } else {
        (<Cat>pet).meowing()
    }
}

function isDog(someObj: Dog | Cat): someObj is Dog {
    return (<Dog>someObj).barking !== undefined
}

function callMyPet2(pet: Dog | Cat) {
    pet.walk()
    if (isDog(pet)) {
        pet.barking()
    } else {
        pet.meowing()
    }
}

// Example 3
class Foo {
    foo: number;
    commonProp: string;
}

class Bar {
    bar: number;
    commonProp: string;
}

function fooBarFunction(obj: Foo | Bar) {
    if (obj instanceof Foo) {
        obj.foo
    } else {
        obj.bar
    }
}