/* eslint-disable */
const lines = +prompt('Пожалуйста, введите необходимую высоту ёлочки');
const star = '*';
let stars = '';
const space = ' ';
let leftSpaces = '';
let text = '';

if (lines > 1 && lines <= 15) {
    for (let line = 0; line < lines; line++) {
        stars += star + space;

        while (leftSpaces.length < lines - stars.length / 2) {
            leftSpaces += space;
        }

        text += leftSpaces + stars + '\n';
        leftSpaces = '';
    }

    alert(text);
} else if (lines > 15) {
    alert('Максимальная высота ёлочки: 15 !');
} else {
    alert('Минимальная высота ёлочки: 1 !');
}
