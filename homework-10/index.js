function bind(fn, ctx) {
    const parentArgs = [].slice.call(arguments, 2);

    return function () {
        const childArgs = [].slice.call(arguments);

        return fn.apply(ctx, [parentArgs, childArgs]);
    };
}

function foo(a, b) {
    console.log(a, b, this);
}

const obj = {
    number: 42
};

bind(foo, obj, 4, 5)();
bind(foo, obj, 4)(5);
bind(foo, obj)(4, 5);