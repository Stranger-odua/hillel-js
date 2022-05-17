function findPalindrome(number) {
    let steps = 0;

    function search() {
        let firstPart = number;
        let reversePart = 0;

        while (firstPart > reversePart) {
            reversePart *= 10;
            reversePart += firstPart % 10;
            firstPart = Math.trunc(firstPart / 10);
        }

        if (firstPart === reversePart || firstPart === Math.trunc(reversePart / 10)) {
            return {
                result: number,
                steps,
            };
        }

        const reverseNumber = Number(number.toString().split('').reverse().join(''));
        number += reverseNumber;
        ++steps;

        if (number > 2 ** 53 - 1 || reverseNumber > 2 ** 53 - 1) {
            return `restriction: "Number" type value can't be bigger than 2 ** 53 - 1`;
        }

        try {
            return search(number);
        } catch (e) {
            return `Error, ${e.message}, call stack overflow on ${steps} iteration`;
        }
    }

    return search();
}

console.log(findPalindrome(196));