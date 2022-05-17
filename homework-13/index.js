function findPalindrome(number) {
    let steps = 0;

    if (number < 10) {
        return {
            result: BigInt(number),
            steps,
        };
    }

    if (number < 0) {
        return `Can't be smaller than 0`
    }

    function search() {
        try {
            number = BigInt(number);
            let firstPart = number;
            let reversePart = 0n;

            const cutLastSymbol = (num) => BigInt(num.toString().slice(0, -1));

            while (firstPart > reversePart) {
                reversePart *= 10n;
                reversePart += firstPart % 10n;
                firstPart = cutLastSymbol(firstPart);
            }

            const arePartsIsEqual = firstPart === reversePart || firstPart === cutLastSymbol(reversePart)

            if (arePartsIsEqual) {
                return {
                    result: number,
                    steps,
                };
            }

            const reverseNumber = BigInt(number.toString().split('').reverse().join(''));
            number += reverseNumber;
            ++steps;
            return search(number);
        } catch (e) {
            return e.message;
        }
    }

    return search();
}

console.log(findPalindrome(9));
console.log(findPalindrome(12));
console.log(findPalindrome(59));
console.log(findPalindrome(96));
console.log(findPalindrome(79));
console.log(findPalindrome(167));
console.log(findPalindrome(89));

// console.log(findPalindrome(196));