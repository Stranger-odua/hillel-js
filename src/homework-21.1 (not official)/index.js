/* Вам нужно написать функцию debounce(fn, timer) - она принимает функцию и время, возвращает декорированную функцию,
 которая будет вызываться не раньше, чем указанное время. То есть, в таком примере:
element.addEventListener('click', debounce(sendMail, 1000));
Сколько бы раз мы не кликнули во время этой секунды - функция не сработает, раньше, чем пройдет секунда.
 Другими словами вызов возможен только один за указанное время.
Ну и конечно на промисах */

const button = document.querySelector('button');

function debounceHandler() {
    let promisesIds = [];

    return (fn, timer) => {
        const promiseId = Math.random();
        promisesIds.push(promiseId);

        const res = () => {
            if (promisesIds.find(id => id === promiseId)) {
                promisesIds = [];

                fn(timer);
            }
        };

        return new Promise(resolve => {
            setTimeout(() => resolve(res), timer);
        });
    };
}

const debounce = debounceHandler();

function someFunction(runTime) {
    // eslint-disable-next-line no-console
    console.log(`completed through ${runTime}ms`);
}

const delay = 2000;
button.addEventListener('click', () => debounce(someFunction, delay).then(cbSomeFn => cbSomeFn()));
