const myObj = {
    num: 3
};

function myFunc(num1, num2) {
    return num1 + num2 + this.num;
}

// версия 1 на основе метода call от ментора
function bind(fn, ctx, ...args) {
    const uuid = Date.now();
    ctx[uuid] = fn;
    const fnResult = ctx[uuid](...args);
    delete ctx[uuid];

    return () => fnResult;
}

// версия 2 без использования rest и spread
// function bind(fn, ctx) {
//     const args = [].slice.call(arguments, 2);
//     const uuid = Math.random().toString().slice(2);
//     ctx[uuid] = fn;
//     const fnResult = ctx[uuid].apply(ctx, args);
//     delete ctx[uuid];
//
//     return () => fnResult;
// }

// версия 3 без использования rest и spread и с копированием исходного объекта контекста,
// вместо его мутации и последующего удаления добавленного свойства
// function bind(fn, ctx) {
//     const args = [].slice.call(arguments, 2);
//     const copyCtxObj = Object.assign({}, ctx);
//     const uuid = Math.random().toString().slice(2);
//     copyCtxObj[uuid] = fn;
//     const fnResult = copyCtxObj[uuid].apply(copyCtxObj, args);
//
//     return () => fnResult;
// }

console.log(bind(myFunc, myObj, 1, 2)());