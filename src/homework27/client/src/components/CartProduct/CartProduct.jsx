import './CartProduct.style.css';
import squareMinusIcon from '../../assets/icons/square-minus-icon.svg';
import squarePlusIcon from '../../assets/icons/square-plus-icon.svg';
import { BASE_URL } from '../../constants';
import { useDispatch } from 'react-redux';
import { addProduct, subtractProduct } from '../../reducers/cart';

const CartProduct = ({id, name, price, count, priceInAll, imgPath}) => {
    const dispatch = useDispatch();

    function handlerAddProduct() {
        dispatch(addProduct({id, name, price, imgPath}));
    }

    function handlerSubtractProduct() {
        dispatch(subtractProduct({id, name, price, imgPath}));
    }
    
    return (
        <div className="cart-product">
            <div className="cart-product__img">
                <img src={ `${ BASE_URL }/${ imgPath }` } alt="product"/>
            </div>
            <div className="cart-product__info">
                <div className="cart-product__title">{ name }</div>
                <div className="cart-product__price-wrap">
                    <div className="cart-counter">
                        <button
                            type="button"
                            className="cart-counter__button cart-counter__button_minus"
                            onClick={ handlerSubtractProduct }
                        >
                            <img
                                src={ squareMinusIcon }
                                alt="minus"
                            />
                        </button>
                        <span className="cart-counter__count">{ count }</span>
                        <button
                            type="button"
                            className="cart-counter__button cart-counter__button_plus"
                            onClick={ handlerAddProduct }
                        >
                            <img src={ squarePlusIcon } alt="plus"/>
                        </button>
                    </div>
                    <div className="cart-product__price">€{ priceInAll.toFixed(2) }</div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;