class BasicRobot {
    #name: string;
    private privateName = 'Private name'

    constructor(name: string) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

class AdvancedRobot extends BasicRobot {
    #name: string;

    constructor(name: string) {
        super(name);
        this.#name = `Advanced ${name}`
    }

    getAdvancedName() {
        return this.#name;
    }
}

const advancedRobot = new AdvancedRobot('Jack')
console.log('Parent name', advancedRobot.getName())
console.log('Subclass name', advancedRobot.getAdvancedName())

console.log('private', advancedRobot.privateName)