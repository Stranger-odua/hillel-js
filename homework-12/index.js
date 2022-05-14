// Task 1
//Вам нужно, написать функцию, которая принимает 1 параметр. При первом вызове,
// она его запоминает, при втором — суммирует переданный параметр с тем, что передали
// первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28
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
//Это не все. Возьмите счетчик, который, мы писали в классе и добавьте ему
// возможность задавать начальное значение и шаг счетчика при инициализации и
// методах для сброса к начальному значению. Помните, что функция - это объект)
function advancedCounter(initialCount, step) {
    this.count = initialCount;

    return function () {
        return this.count += step;
    };
}

const createCounter = advancedCounter(100, 5);
createCounter.resetCounter = () => {
    this.count = 0
}
const resetCounter = createCounter.resetCounter.bind(advancedCounter)

console.log(createCounter());
console.log(createCounter());
resetCounter()
console.log(createCounter());
console.log(createCounter());