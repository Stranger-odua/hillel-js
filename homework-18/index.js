/*
* 1. Сделайте 5 квадратов и каждый по клику меняет цвет (синий->зеленый->желтый).
* Последовательность такая:
*
* пустой квадрат
* клик
* цвет заливки синий
* клик
* цвет заливки зеленый
* клик
* цвет заливки желтый
* клик
* цвет заливки синий
* и т. д.
*
* при клике по любому из них, он переставляется в конец
*/

const list = [1, 2, 3, 4, 5];
const squaresList = createSquares(list);

function createSquares(arr) {
	const ul = document.createElement('ul');

	arr.forEach((el) => {
		const li = document.createElement('li');
		li.innerText = el.toString();
		ul.append(li);
	});
	return ul;
}

squaresList.addEventListener('click', (e) => {
	e.stopPropagation();
	const target = e.target;
	const classList = target.classList;
	const colorClassNamesArr = ['blue', 'green', 'yellow'];
	const indexOfAvailableColorClassName = colorClassNamesArr.findIndex((el) => classList.contains(el));

	function addOrChangeColorClassName(foundIndex) {
		if (foundIndex !== -1) {
			const indexOfNewColorClassName = (foundIndex + 1 === colorClassNamesArr.length) ? 0 : foundIndex + 1;
			classList.remove(colorClassNamesArr[foundIndex]);
			classList.add(colorClassNamesArr[indexOfNewColorClassName]);
		} else {
			classList.add('blue');
		}
		target.parentNode.appendChild(target);
	}

	if (target.nodeName === 'LI') {
		addOrChangeColorClassName(indexOfAvailableColorClassName);
	}
});

document.body.prepend(squaresList);


/*
* 2. Сделайте табличку 3х3. Каждая ячейка должна быть заполнена случайным числом от 1 до 100.
* По клику на ячейку под таблицей должно выводиться число из ячейки. Все должно быть сделано JS-ом.
* Для обработки клика используйте делегирование - у вас должен быть один обработчик клика для этой таблицы.
 */

function createTable(rowsCount, colCount) {
	const table = document.createElement('table');

	function fillCellsAndRows() {
		const row = document.createElement('tr');

		for (let i = 0; i < colCount; i++) {
			const cell = document.createElement('td');
			cell.classList.add('cell');
			cell.textContent = Math.floor(1 + Math.random() * 100).toString();
			row.append(cell);
		}

		table.append(row);
		rowsCount--;

		if (rowsCount === 0) return table;
		return fillCellsAndRows(rowsCount);
	}

	return fillCellsAndRows();
}

function eventListenerHandler({target}) {
	const areFoundOldClickedNumber = document.querySelector('.clickedNumber');
	if (areFoundOldClickedNumber) {
		areFoundOldClickedNumber.remove();
	}

	const clickedNumber = document.createElement('div');
	clickedNumber.classList.add('clickedNumber');
	clickedNumber.innerText = target.innerText;

	tableWithRandomNumbers.after(clickedNumber);
}

const tableWithRandomNumbers = createTable(3, 3);
tableWithRandomNumbers.addEventListener('click', eventListenerHandler);

squaresList.after(tableWithRandomNumbers);