/* Вам нужно написать функцию debounce(fn, timer) - она принимает функцию и время, возвращает декорированную функцию,
 которая будет вызываться не раньше, чем указанное время. То есть, в таком примере:
element.addEventListener('click', debounce(sendMail, 1000));
Сколько бы раз мы не кликнули во время этой секунды - функция не сработает, раньше, чем пройдет секунда.
 Другими словами вызов возможен только один за указанное время.
Ну и конечно на промисах */

const button = document.querySelector('button');

function debounceHandler() {
    let areSomePromiseIsPending = false;

    return (cbFn, timer) => {
        if (!areSomePromiseIsPending) {
            areSomePromiseIsPending = !areSomePromiseIsPending;

            return new Promise(resolve => {
                setTimeout(() => {
                    areSomePromiseIsPending = !areSomePromiseIsPending;
                    resolve(cbFn);
                }, timer);
            });
        } else {
            return new Promise((resolve, reject) => reject('You need to wait a bit'));
        }
    };
}

const debounce = debounceHandler();
const someFunction = () => 'completed';
const delay = 2000;

button.addEventListener('click', () =>
    debounce(someFunction, delay).then(
        // eslint-disable-next-line no-console
        cbSomeFn => console.log(cbSomeFn()),
        // eslint-disable-next-line no-console
        error => console.log(error)
    )
);
