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
    const maxTime = Math.max(
        ...kit.reduce((delays, dish) => {
            delays.push(dish.time);
            return delays;
        }, [])
    );

    kit.forEach((dish, i) => {
        setTimeout(
            () => {
                dishes[i] = `${dish.name} done`;

                if (dish.time === maxTime) {
                    doSomethingWhenTimerRunsOut(dishes);
                }
            },
            dish.time,
            dishes
        );
    });
}

completeOrder(menu.pizzaMenu, cookedDishes => {
    // eslint-disable-next-line no-console
    console.log(cookedDishes);
});
