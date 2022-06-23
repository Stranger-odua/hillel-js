/* eslint-disable */
// 1 task start
const collection = ['ivan', 'serj', 'olga', 'petr', 'oleg', 'serj'];

function insertElementIntoArray(indexEl, item) {
    const collectionResult = [];
    const tmpArrRightPart = [];

    for (let i = 0; i < indexEl; i++) {
        collectionResult[collectionResult.length] = collection[i];
    }

    collectionResult[collectionResult.length] = item;

    for (let i = indexEl; i < collection.length; i++) {
        tmpArrRightPart[tmpArrRightPart.length] = collection[i];
    }

    for (let i = 0; i < tmpArrRightPart.length; i++) {
        collectionResult[collectionResult.length] = tmpArrRightPart[i];
    }

    return collectionResult;
}

console.log('task 1');
console.log(insertElementIntoArray(2, 'alex'));
// 1 task end

// 2 task start
function indexOf(element) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === element) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(element) {
    for (let i = collection.length; i--; ) {
        if (collection[i] === element) {
            return i;
        }
    }
    return -1;
}

function includes(item, indexEl = 0) {
    for (let i = indexEl; i < collection.length; i++) {
        if (typeof collection[i] === 'number' && isNaN(collection[i]) && typeof item === 'number' && isNaN(item)) {
            return true;
        }

        if (collection[i] === item) {
            return true;
        }
    }
    return false;
}

console.log('task 2');
console.log(indexOf('serj'));
console.log(lastIndexOf('serj'));
console.log(includes('ivan', 2));
// 2 task end
