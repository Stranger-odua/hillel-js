import closeIcon from '../../assets/icons/cross-icon.svg';
import redCurry from '../../assets/products/red_curry.png';
import squareMinusIcon from '../../assets/icons/square-minus-icon.svg';
import squarePlusIcon from '../../assets/icons/square-plus-icon.svg';
import tomYam from '../../assets/products/tom_yam.png';

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__inner">
                <div className="modal__header">
                    <button type="button" className="modal__close">
                        <img src={ closeIcon } alt="close-icon"/>
                    </button>
                    <h3 className="modal__title">Your order</h3>
                </div>
                <div className="modal__body">
                    <div>
                        <div className="cart-product">
                            <div className="cart-product__img">
                                <img src={ redCurry } alt="product"/>
                            </div>
                            <div className="cart-product__info">
                                <div className="cart-product__title">Penang shrimp</div>
                                <div className="cart-product__price-wrap">
                                    <div className="cart-counter">
                                        <button
                                            type="button"
                                            className="cart-counter__button cart-counter__button_minus"
                                        >
                                            <img
                                                src={ squareMinusIcon }
                                                alt="minus"
                                            />
                                        </button>
                                        <span className="cart-counter__count">3</span>
                                        <button
                                            type="button"
                                            className="cart-counter__button cart-counter__button_plus"
                                        >
                                            <img src={ squarePlusIcon } alt="plus"/>
                                        </button>
                                    </div>
                                    <div className="cart-product__price">€48.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-product">
                            <div className="cart-product__img">
                                <img src={ tomYam } alt="product"/>
                            </div>
                            <div className="cart-product__info">
                                <div className="cart-product__title">Tom yam kai</div>
                                <div className="cart-product__price-wrap">
                                    <div className="cart-counter">
                                        <button
                                            type="button"
                                            className="cart-counter__button cart-counter__button_minus"
                                        >
                                            <img
                                                src={ squareMinusIcon }
                                                alt="minus"
                                            />
                                        </button>
                                        <span className="cart-counter__count">1</span>
                                        <button
                                            type="button"
                                            className="cart-counter__button cart-counter__button_plus"
                                        >
                                            <img src={ squarePlusIcon } alt="plus"/>
                                        </button>
                                    </div>
                                    <div className="cart-product__price">€7.00</div>
                                </div>
                            </div>
                        </div>
                        <form className="cart-form">
                            <h5 className="cart-form__title">Delivery</h5>
                            <div className="cart-form__group cart-form__group_row">
                                <input
                                    type="text"
                                    className="cart-form__input"
                                    placeholder="Name"
                                    required
                                    value="Santa Claus"
                                />
                                <input
                                    type="email"
                                    className="cart-form__input"
                                    placeholder="Email"
                                    required
                                    value="john@gmail.com"
                                />
                                <input
                                    type="tel"
                                    className="cart-form__input"
                                    placeholder="Phone"
                                    required
                                    value="+1234567"
                                />
                            </div>
                            <div className="cart-form__group">
                                <input
                                    type="text"
                                    className="cart-form__input"
                                    placeholder="Address"
                                    required
                                    value="North, Lapland, Snow Home"
                                />
                            </div>
                            <div className="cart-buttons">
                                <div className="cart-buttons__buttons btn-group">
                                    <div className="cart-buttons__info">
                                        <span className="cart-buttons__info-text">total</span>
                                        <span className="cart-buttons__info-price">€55.00</span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="cart-buttons__button btn-group__button button"
                                    >
                                        order
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
