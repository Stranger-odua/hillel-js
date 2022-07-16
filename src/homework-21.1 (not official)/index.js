/* Вам нужно написать функцию debounce(fn, timer) - она принимает функцию и время, возвращает декорированную функцию,
 которая будет вызываться не раньше, чем указанное время. То есть, в таком примере:
element.addEventListener('click', debounce(sendMail, 1000));
Сколько бы раз мы не кликнули во время этой секунды - функция не сработает, раньше, чем пройдет секунда.
 Другими словами вызов возможен только один за указанное время.
Ну и конечно на промисах */

const button = document.querySelector('button');

function debounceHandler() {
    let promisesIds = [];

    return (cbFn, timer) => {
        const promiseId = Math.random();
        promisesIds.push(promiseId);

        return new Promise(resolve => {
            setTimeout(() => {
                if (promisesIds.find(id => id === promiseId)) {
                    promisesIds = [];

                    resolve(cbFn);
                }
            }, timer);
        });
    };
}

const debounce = debounceHandler();
const someFunction = () => 'completed';
const delay = 2000;

// eslint-disable-next-line no-console
button.addEventListener('click', () => debounce(someFunction, delay).then(cbSomeFn => console.log(cbSomeFn())));
