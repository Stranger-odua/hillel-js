const baseUrl = 'http://localhost:3000/';

function onClickHandler(e) {
    e.preventDefault();
    // window.location.assign(window.location.host + '/all');
    // window.location.href = `${ window.location.host }/all`;
    // window.location.replace(`all`);
}

export default function All() {
    console.dir(window.location);
    // return <a href={ '/all' }>Посилання</a>;
    // return <a href={ '/all' } onClick={ onClickHandler }>Посилання</a>;
}

