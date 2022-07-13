/* eslint-disable */
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

// Решение 1
function completeOrder1(kit, doSomethingWhenTimerRunsOut) {
    const dishes = [];

    kit.forEach((dish, i) => {
        setTimeout(() => {
            doSomethingWhenTimerRunsOut(dishes, dish, i);
        }, dish.time);
    });
}

completeOrder1(menu.pizzaMenu, (cookedDishes, cookedDish, index) => {
    cookedDishes[index] = `${cookedDish.name} done`;
    console.log(cookedDishes);
});

// Решение 2
function completeOrder2(kit) {
    const dishes = [];

    const doSomethingWhenTimerRunsOut = (cookedDishes, cookedDish, index) => {
        cookedDishes[index] = `${cookedDish.name} done`;
        console.log(cookedDishes);
    };

    kit.forEach((dish, i) => {
        setTimeout(() => {
            doSomethingWhenTimerRunsOut(dishes, dish, i);
        }, dish.time);
    });
}

completeOrder2(menu.pizzaMenu);
