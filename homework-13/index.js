function findPalindrome(number) {
    let steps = 0;

    function search(number) {
        number = BigInt(number)

        if (number < 0) {
            return `Number can't be smaller than 0`;
        }

        if (isPalindrome(number)) {
            return {
                result: number,
                steps,
            };
        }

        function isPalindrome(number) {
            let num = number.toString()
            if (num.length === 1) return true;
            if (num.length === 2) return num[0] === num[1];
            if (num[0] === num.slice(-1)) return isPalindrome(num.slice(1, -1));
            return false;
        }

        ++steps
        const reverseNumber = BigInt(number.toString().split('').reverse().join(''));
        const nextNumber = number + reverseNumber
        return search(nextNumber)
    }

    return search(number)
}

console.log(findPalindrome(9));
console.log(findPalindrome(12));
console.log(findPalindrome(59));
console.log(findPalindrome(88));
console.log(findPalindrome(96));
console.log(findPalindrome(79));
console.log(findPalindrome(167));
console.log(findPalindrome(89));
// console.log(findPalindrome(196));