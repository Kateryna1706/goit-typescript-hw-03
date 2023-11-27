
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key
    }

    getKey() {
        return this.key;
    }
}

abstract class House {
    door: boolean;
    key: Key;


    comeIn(person: Person) {
        const tenants: Person[] = [];
        if (this.door) {
            tenants.push(person)
        }

    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {

    constructor(key: Key) {
        super();
        this.key = key;
    }

    openDoor(key: Key) {
        if (key === this.key) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };