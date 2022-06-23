/* eslint-disable */
// 1
const cylinder = {
    radius: 5,
    height: 12,

    volume() {
        return Math.PI * this.radius ** 2 * this.height;
    },

    surfaceArea() {
        return 2 * Math.PI * this.radius * this.height;
    },
};
console.log(cylinder.surfaceArea());
console.log(cylinder.volume());

// 2
function getResult(number1, number2, operator) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
    }
}

console.log(getResult(9, 3, '-'));

// 3 (бонус)
function isCharPresent(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return true;
        }
    }
    return false;
}

console.log(isCharPresent('барвінок', 'і'));

// 4 (бонус)
function charIndexOf(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    }
    return -1;
}

console.log(charIndexOf('барвінок', 'і'));
