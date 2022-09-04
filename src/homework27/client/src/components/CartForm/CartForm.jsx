import './CartForm.style.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CartForm = () => {
    const totalOrderPrice = useSelector(state => state.cart.totalOrderPrice);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <form className="cart-form"
              onSubmit={ (e) => {
                  e.preventDefault();
                  alert('Relax, it\'s just a study project =)');
              } }
        >
            <h5 className="cart-form__title">Delivery</h5>
            <div className="cart-form__group cart-form__group_row">
                <input
                    type="text"
                    className="cart-form__input"
                    placeholder="Name"
                    required
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                />
                <input
                    type="email"
                    className="cart-form__input"
                    placeholder="Email"
                    required
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <input
                    type="tel"
                    className="cart-form__input"
                    placeholder="Phone"
                    required
                    value={ telephone }
                    onChange={ (e) => setTelephone(e.target.value) }
                />
            </div>
            <div className="cart-form__group">
                <input
                    type="text"
                    className="cart-form__input"
                    placeholder="Address"
                    required
                    value={ address }
                    onChange={ (e) => setAddress(e.target.value) }
                />
            </div>
            <div className="cart-buttons">
                <div className="cart-buttons__buttons btn-group">
                    <div className="cart-buttons__info">
                        <span className="cart-buttons__info-text">total</span>
                        <span className="cart-buttons__info-price">€{ totalOrderPrice.toFixed(2) }</span>
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
    );
};

export default CartForm;