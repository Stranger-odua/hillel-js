// Task 1
function counter() {
    let count;

    return (number) => {
        if ( !count) {
            count = number;
            return count;
        }
        count += number;

        return count;
    };
}

const additionNums = counter();

console.log(additionNums(1));
console.log(additionNums(2));
console.log(additionNums(3));



// Task 2
function advancedCounter(initialCount, step) {
    this.count = initialCount;

    return function () {
        return this.count += step;
    };
}

const createCounter = advancedCounter(100, 5);
let reset = createCounter.resetCounter = () => {
    this.count = 0
}
const resetCounter = reset.bind(advancedCounter)

console.log(createCounter());
console.log(createCounter());
resetCounter()
console.log(createCounter());
console.log(createCounter());