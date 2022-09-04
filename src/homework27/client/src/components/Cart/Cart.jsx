import './Cart.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCartModalShow } from '../../reducers/cart';

const Cart = () => {
    const dispatch = useDispatch();
    const totalPrice = useSelector(state => state.cart.totalOrderPrice);
    const dishesInsideCart = useSelector(state => state.cart.dishesInsideCart);

    function handlerShowCartModal() {
        dispatch(setCartModalShow(true));
    }

    return (
        <button type="button" className="cart-icon cart-icon_visible" onClick={ handlerShowCartModal }>
            <div className="cart-icon__inner">
                <span className="cart-icon__count">{ dishesInsideCart }</span>
                <span className="cart-icon__price">€{ totalPrice.toFixed(2) } </span>
            </div>
        </button>
    );
};

export default Cart;