const menu = {
    burgerMenu: [
        {
            name: 'Burger',
            time: 2000,
        },
        {
            name: 'Cola',
            time: 500,
        },
        {
            name: 'Ff',
            time: 1000,
        },
    ],
    pizzaMenu: [
        {
            name: 'Pizza',
            time: 3000,
        },
        {
            name: 'Pepsi',
            time: 500,
        },
        {
            name: 'souse',
            time: 500,
        },
    ],
};

function createOrder(kit, doneCallback) {
    const doneDishes = [];

    function cookDishes(dish, index, callback) {
        setTimeout(() => {
            callback({
                value: `${dish.name} done`,
                index,
            });
        }, dish.time);
    }

    function getResultData({ value, index }) {
        doneDishes[index] = value;

        if (doneDishes.filter(dish => !!dish).length === kit.length) {
            doneCallback(doneDishes);
        }
    }

    kit.forEach((dish, index) => cookDishes(dish, index, getResultData));
}

createOrder(menu.pizzaMenu, res => {
    // eslint-disable-next-line no-console
    console.log(res);
});
