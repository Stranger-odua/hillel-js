import closeIcon from '../../assets/icons/cross-icon.svg';
import { setCartModalShow } from '../../reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from '../CartProduct';
import CartForm from '../CartForm';

const Modal = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    function handlerShowCartModal() {
        dispatch(setCartModalShow(false));
    }

    return (
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__inner">
                <div className="modal__header">
                    <button type="button" className="modal__close" onClick={ handlerShowCartModal }>
                        <img src={ closeIcon } alt="close-icon"/>
                    </button>
                    <h3 className="modal__title">Your order</h3>
                </div>
                <div className="modal__body">
                    <div>
                        {
                            products.map((product) => {
                                return (
                                    <CartProduct
                                        key={ product.id }
                                        { ...product }
                                    />
                                );
                            })
                        }
                        <CartForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
