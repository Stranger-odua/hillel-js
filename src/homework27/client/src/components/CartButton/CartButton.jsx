import './CartButton.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCartModalShow } from '../../reducers/cart';
import { useEffect, useRef } from 'react';

const CartButton = () => {
    const dispatch = useDispatch();
    const buttonRef = useRef();
    const totalPrice = useSelector(state => state.cart.totalOrderPrice);
    const dishesInsideCart = useSelector(state => state.cart.dishesInsideCart);

    const onScroll = () => {
        const elPosition = buttonRef.current.getBoundingClientRect();
        const buttonStyle = buttonRef.current.style;
        if (elPosition.top <= window.scrollY) {
            buttonStyle.position = 'fixed';
            buttonStyle.right = '15%';
            buttonStyle.zIndex = 100;
        } else {
            buttonStyle.position = 'absolute';
            buttonStyle.right = 0;
            buttonStyle.zIndex = 'auto';
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [buttonRef]);

    useEffect(() => buttonRef.current.classList.add('shake'), [dishesInsideCart]);

    const handlerShowCartModal = () => dispatch(setCartModalShow({showModal: true}));

    return (
        <button
            type="button"
            className={ dishesInsideCart ? 'cart-icon cart-icon_visible' : 'cart-icon' }
            ref={ buttonRef }
            onClick={ handlerShowCartModal }
            onAnimationEnd={ () => buttonRef.current.classList.remove('shake') }
        >
            <div className="cart-icon__inner">
                <span className="cart-icon__count">{ dishesInsideCart }</span>
                <span className="cart-icon__price">€{ totalPrice.toFixed(2) } </span>
            </div>
        </button>
    );
};

export default CartButton;