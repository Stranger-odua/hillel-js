/*
 * Написать функцию generateList(array) принимает массив из чисел и массивов чисел, например [1,2,3] нужно сгенерировать список из элементов
 * <ul>
 * 	<li>1</li>
 * 	<li>2</li>
 * 	<li>3</li>
 * </ul>
 *
 * [1,2, [1.1,1.2,1.3] ,3]
 *
 * если в массиве встречается массив то делать вложенный список, для проверки на массив используйте Array.isArray()
 *
 * <ul>
 * 	<li>1</li>
 * 	<li>2</li>
 * 	<li>
 * 		<ul>
 * 			<li>1.1</li>
 * 			<li>1.2</li>
 * 			<li>1.3</li>
 * 		</ul>
 * 	</li>
 * 	<li>3</li>
 * </ul>
 */

const list = [1, 2, [1.1, 1.2, 1.3], 3];

const generateList = (list) => {
	const ul = document.createElement('ul');
	list.forEach((elementOfList) => {
		const li = document.createElement('li');
		if (Array.isArray(elementOfList)) {
			const innerUl = generateList(elementOfList);
			li.append(innerUl)
			ul.append(li);
		} else {
			li.textContent = elementOfList;
			ul.append(li);
		}
	});
	return ul;
};

const elementsList = generateList(list);
document.body.prepend(elementsList);



/*
 * Вывести таблицу 10 × 10, заполненную числами от 1 до 100
*/

function createTable(rowsCount, colCount) {
	const table = document.createElement('table');
	let elementCount = 1;

	function fillCellsAndRows() {
		const row = document.createElement('tr');

		for (let i = 0; i < colCount; i++) {
			const cell = document.createElement('td');
			cell.textContent = elementCount.toString();
			row.append(cell);
			elementCount++;
		}

		table.append(row);
		rowsCount--;

		if (rowsCount === 0) return table;
		return fillCellsAndRows(rowsCount);
	}
	return fillCellsAndRows();
}

const myTable = createTable(10, 10);

const script = document.querySelector('script');
script.before(myTable);
