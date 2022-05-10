const mult = (a, b) => a * b;

function simpleCache(fn) {
    const cache = [];

    return (...args) => {
        const foundArguments = cache.find((item) => item.arguments.every((val, i) => val === args[i]));
        const newCacheItem = {
            arguments: args,
            result: fn(...args)
        };

        if (foundArguments) {
            return foundArguments.result;
        } else {
            if (cache.length >= 10) {
                cache.splice(0, 1);
                cache.push(newCacheItem);
                return newCacheItem.result;
            } else {
                cache.push(newCacheItem);
                return newCacheItem.result;
            }
        }
    };
}

const baz = simpleCache(mult);

console.log(baz(3, 1));
console.log(baz(3, 1));
console.log(baz(3, 2));
console.log(baz(3, 3));
console.log(baz(3, 4));
console.log(baz(3, 5));
console.log(baz(3, 6));
console.log(baz(3, 7));
console.log(baz(3, 8));
console.log(baz(3, 9));
console.log(baz(3, 10));
console.log(baz(3, 11));
console.log(baz(3, 12));
console.log(baz(3, 12));