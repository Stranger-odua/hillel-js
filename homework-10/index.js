const myObj = {
    num: 3
};

function myFunc(num1, num2) {
    return num1 + num2 + this.num;
}

function bind(fn, ctx) {
    const args = [].slice.call(arguments, 2);

    return function () {
        return fn.apply(ctx, args);
    };
}

console.log(bind(myFunc, myObj, 1, 2)());
// console.log(bind(myFunc, myObj, 1, 2)()());