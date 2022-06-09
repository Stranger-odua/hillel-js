const films = [
	{
		name: 'Back to the future',
		category: ['fantasy', 'comedy', 'adventure'],
		year: 1985,
	},
	{
		name: 'Titanic',
		category: ['drama'],
		year: 1991,
	},
	{
		name: 'Green mile',
		category: ['drama', 'fantasy'],
		year: 1999,
	},
];

function GroupFilmsByCategory(films) {
	this.groupedFilms = films.reduce((filmsList, film) => {
		const categories = film['category'];

		categories.forEach((category) => {
			if ( !filmsList[category]) {
				filmsList[category] = [];
			}
			filmsList[category].push(film);
		});

		return filmsList;
	}, {});

	this.groupedFilms[Symbol.iterator] = function () {
		const values = Object.values(this).flat();
		const uniqueValues = values.reduce((filmsList, film) => {
			if ( !filmsList.includes(film)) {
				filmsList.push(film);
			}

			return filmsList;
		}, []);

		let valueIndex = 0;

		return {
			next() {
				if (valueIndex === uniqueValues.length) {
					return {done: true};
				}

				return {
					done: false,
					value: uniqueValues[valueIndex++],
				};
			},
		};
	};

	return this.groupedFilms;
}

const groupedFilmsByCategory = new GroupFilmsByCategory(films);

console.log('groupedFilmsByCategory: ', groupedFilmsByCategory);

for (const film of groupedFilmsByCategory) {
	console.log('film: ', film);
}