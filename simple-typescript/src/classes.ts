class Robot {
    // protected name: string

    // constructor(name: string) {
    //     this.name = name
    // } 
    _color: string

    private static availableColors = ['green', 'yellow']
    static isColorSvailable(color: string) {
        return Robot.availableColors.includes(color)
    }

    constructor(protected _name: string) {}

    askName() {
        console.log(`My name is ${this.name}`)
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`)
    }

    set name(name: string) {
        this._name = 'PREFIX' + name
    }

    get name() {
        return this._name + 'SUFFIX'
    }

    set color(color: string) {
        if (!Robot.isColorSvailable(color)) {
            throw new Error(`Color ${color} is not available`)
        }
        this._color = color
    }
}

class FlyingRobot extends Robot {
    private readonly jetpackSize: number

    constructor(name: string, jetpackSize: number) {
        super(name)
        this.jetpackSize = jetpackSize
    }

    move(distance: number) {
        console.log(`${this.name} is flying`)
        super.move(distance)
    }
}

const robot = new Robot('John')
robot.askName()

const flyingRobot = new FlyingRobot('Jim', 2)
flyingRobot.move(10)
console.log(`Flying robot jetpack size is ${flyingRobot.jetpackSize}`)

flyingRobot.name = 'Kevin'
console.log(flyingRobot.name)

class Person {
    constructor(
        public name: string,
        protected email: string,
        private salary: number
    ) {}
}

class Employee extends Person {
    getEmployeeInfo() {
        return `${this.name} ${this.email} ${this.salary}`
    }
}

const jack = new Employee('Jack', 'jack@example.com', 1000)
console.log(jack.getEmployeeInfo())