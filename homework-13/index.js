function findPalindrome(number) {
    let steps = 0;

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

console.log(findPalindrome(196));