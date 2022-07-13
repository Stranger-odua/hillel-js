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

// Решение с использованием замыкания
function completeOrder(kit) {
    const dishes = [];

    const doSomethingWhenTimerRunsOut = cookedDishes => {
        // eslint-disable-next-line no-console
        console.log(cookedDishes);
    };

    kit.forEach(dish => {
        dishes.push(`${dish.name} done`);

        setTimeout(() => {
            doSomethingWhenTimerRunsOut(dishes, dish.name);
        }, dish.time);
    });
}

completeOrder(menu.pizzaMenu);

// Решение с использованием коллбека
function completeOrder1(kit, doSomethingWhenTimerRunsOut) {
    const dishes = [];

    kit.forEach(dish => {
        dishes.push(`${dish.name} done`);

        setTimeout(() => {
            doSomethingWhenTimerRunsOut(dishes);
        }, dish.time);
    });
}

// eslint-disable-next-line no-console
completeOrder1(menu.pizzaMenu, cookedDishes => console.log(cookedDishes));
