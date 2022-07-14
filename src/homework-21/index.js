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

function completeOrder(kit, doSomethingWhenTimerRunsOut) {
    const dishes = [];

    kit.forEach((dish, i) => {
        setTimeout(() => {
            doSomethingWhenTimerRunsOut(dishes, dish, i);
        }, dish.time);
    });
}

completeOrder(menu.pizzaMenu, (cookedDishes, cookedDish, index) => {
    cookedDishes[index] = `${cookedDish.name} done`;
    console.log(cookedDishes);
});
