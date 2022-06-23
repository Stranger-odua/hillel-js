/* eslint-disable */
// 1 task start
const collection = [1, 2, 3, 4, 5];

function mapMethod(array, callback) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

const mutateArray = mapMethod(collection, function (item) {
    return item * 2;
});

console.log(mutateArray);
// 1 task end

// 2 task start
function filterMethod(array, callback) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const filteredArray = filterMethod(collection, function (item) {
    return item < 3;
});

console.log(filteredArray);
// 2 task end

// 3 task start
const notification = [
    {
        date: '31/07/2019',
        msg: 'Some message here 1',
    },
    {
        date: '31/07/2019',
        msg: 'Some message here 2',
    },
    {
        date: '30/07/2019',
        msg: 'Some message here 3',
    },
];

const res = notification.reduce(function (acc, elem) {
    const messageDate = elem.date;
    const message = elem.msg;

    if (!acc[messageDate]) {
        acc[messageDate] = [];
    }
    acc[messageDate].push(message);

    return acc;
}, {});

console.log(res);
// 3 task end
