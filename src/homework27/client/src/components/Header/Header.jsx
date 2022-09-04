import Cart from '../Cart';
import { useSelector } from 'react-redux';

const Header = () => {
    const cart = useSelector(state => state.cart.products);

    return (
        <header className="header container">
            <h1 className="heading logo">Bangkok Express</h1>
            <h3 className="subheading">Great food・Free delivery・Fair price</h3>
            {
                cart.length ? <Cart/> : <></>
            }
        </header>
    );
};

export default Header;



