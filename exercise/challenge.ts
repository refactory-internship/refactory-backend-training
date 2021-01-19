// Here's a similar example which uses a class:

class AddNumbers {
    private n: number;

    constructor(start = 0) {
        this.n = start;
    }

    public add(inc = 1) {
        this.n = this.n + inc;
        return this;
    }

    public print() {
        console.log(this.n);
        return this;
    }
}

// Here it is in action:

new AddNumbers(2).add(3).add().print().add(1);