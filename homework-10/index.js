const myObj = {
    num: 3
};

function myFunc(number) {
    return number ** this.num;
}


function bind(fn, ctx, ...args) {
    ctx.fn = fn;

    return () => {
        return ctx.fn(...args);
    };
}


const myFuncWithNewCtx = bind(myFunc, myObj, 5);
console.log(myFuncWithNewCtx());