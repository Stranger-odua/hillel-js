/* eslint-disable */
function bind(fn, ctx) {
    const bindArgs = [].slice.call(arguments, 2);

    return function () {
        const args = bindArgs.concat([].slice.call(arguments));

        return fn.apply(ctx, args);
    };
}

function foo(a, b) {
    console.log(a, b, this);
}

const obj = {
    number: 42,
};

bind(foo, obj, 4, 5)();
bind(foo, obj, 4)(5);
bind(foo, obj)(4, 5);
