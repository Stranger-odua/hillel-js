function getFibonacci() {
	const cache = new Map();

	return (n) => {
		function* fibonacciGen() {
			let prev = 0,
				next = 1,
				count = 0,
				results = [];

			if (cache.has(n) && cache.get(n).length === n) {
				// console.log(`Вызов с аргументом ${ n } есть в кеше, возвращаем значения из кеша`);
				const cacheResults = cache.get(n);
				for (; count <= n; count++) {
					yield cacheResults[count];
				}
			} else if ( !cache.has(n)) {
				// console.log(`Вызова с аргументом ${ n } нет в кеше, проводим расчет`);
				for (; count < n; count++) {
					yield prev;
					prev = next - prev;
					next = prev + next;

					results.push(prev);
					cache.set(n, results);
				}
			} else {
				// console.log(`Вызов с аргументом ${ n } есть в кеше, но генератор не закончен. Расчитанные значения возвращаем из кеша, неизвестные считаем и добавляем в кеш`);
				for (; count < n; count++) {
					yield prev;
					prev = next - prev;
					next = prev + next;

					if (count === cache.get(n).length) {
						// console.log('Добавляем в кеш');
						results = cache.get(n);
						results.push(prev);
						cache.set(n, results);
					}
				}
			}
		}

		return fibonacciGen();
	};
}

const fibo = getFibonacci();

const firstSeq = fibo(5);
for (let i = 0; i < 4; i++) {
	console.log('firstSeq ', firstSeq.next().value);
}

const secondSeq = fibo(5);
for (let i = 0; i < 6; i++) {
	console.log('secondSeq ', secondSeq.next().value);
}
