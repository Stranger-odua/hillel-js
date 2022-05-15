// Task 1
//Вам нужно, написать функцию, которая принимает 1 параметр. При первом вызове,
// она его запоминает, при втором — суммирует переданный параметр с тем, что передали
// первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28
// function accumulator() {
//     let count;
//
//     return (number) => {
//         if ( !count) {
//             count = number;
//             return count;
//         }
//         count += number;
//
//         return count;
//     };
// }
//
// const someAcc = accumulator();
//
// console.log(someAcc(1));
// console.log(someAcc(2));
// console.log(someAcc(3));


// Task 2
//Это не все. Возьмите счетчик, который, мы писали в классе и добавьте ему
// возможность задавать начальное значение и шаг счетчика при инициализации и
// метод для сброса к начальному значению. Помните, что функция - это объект)
function counter(initialCount, step) {
    let count = initialCount;

    function calculatedResult() {
        calculatedResult.reset = function () {
            count = initialCount
        }
        return count += step
    }

    return calculatedResult
}

const someCounter = counter(100, 5);

console.log(someCounter());
console.log(someCounter());
someCounter.reset()
console.log(someCounter());
console.log(someCounter());