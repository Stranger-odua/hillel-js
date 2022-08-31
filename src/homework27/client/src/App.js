import './styles.css';
import angleIcon from './assets/icons/angle-icon.svg';
import angleLeftIcon from './assets/icons/angle-left-icon.svg';
import penangShrimp from './assets/carousel/penang_shrimp.png';
import chickenCashew from './assets/carousel/chicken_cashew.png';
import plusIcon from './assets/icons/plus-icon.svg';
import redCurryVega from './assets/carousel/red_curry_vega.png';
import chickenLoempias from './assets/carousel/chicken_loempias.png';
import closeIcon from './assets/icons/cross-icon.svg';

import squareMinusIcon from './assets/icons/square-minus-icon.svg';
import squarePlusIcon from './assets/icons/square-plus-icon.svg';

import laabKaiChickenSalad from './assets/products/laab_kai_chicken_salad.png';
import redCurry from './assets/products/red_curry.png';
import tomYam from './assets/products/tom_yam.png';


export default function App() {
    return (
        <div className="is-modal-open">
            <header className="header container">
                <h1 className="heading logo">Bangkok Express</h1>
                <h3 className="subheading">Great food・Free delivery・Fair price</h3>

                <button type="button" className="cart-icon cart-icon_visible">
                    <div className="cart-icon__inner">
                        <span className="cart-icon__count">5</span>
                        <span className="cart-icon__price">€55.00</span>
                    </div>
                </button>
            </header>
            <main>
                <div className="container">
                    <div className="carousel">
                        <div className="carousel__arrow carousel__arrow_right">
                            <img src={ angleIcon } alt="icon"/>
                        </div>
                        <div className="carousel__arrow carousel__arrow_left">
                            <img src={ angleLeftIcon } alt="icon"/>
                        </div>
                        <div className="carousel__inner">
                            <div className="carousel__slide">
                                <img
                                    src={ penangShrimp }
                                    className="carousel__img"
                                    alt="slide"
                                />
                                <div className="carousel__caption">
                                    <span className="carousel__price">€16.00</span>
                                    <div className="carousel__title">Penang shrimp</div>
                                    <button type="button" className="carousel__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel__slide">
                                <img
                                    src={ chickenCashew }
                                    className="carousel__img"
                                    alt="slide"
                                />
                                <div className="carousel__caption">
                                    <span className="carousel__price">€14.00</span>
                                    <div className="carousel__title">Chicken cashew</div>
                                    <button type="button" className="carousel__button">
                                        <img src={ plusIcon } alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel__slide">
                                <img
                                    src={ redCurryVega }
                                    className="carousel__img"
                                    alt="slide"
                                />
                                <div className="carousel__caption">
                                    <span className="carousel__price">€12.50</span>
                                    <div className="carousel__title">Red curry veggies</div>
                                    <button type="button" className="carousel__button">
                                        <img src={ plusIcon } alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel__slide">
                                <img
                                    src={ chickenLoempias }
                                    className="carousel__img"
                                    alt="slide"
                                />
                                <div className="carousel__caption">
                                    <span className="carousel__price">€6.50</span>
                                    <div className="carousel__title">Chicken springrolls</div>
                                    <button type="button" className="carousel__button">
                                        <img src={ plusIcon } alt="icon"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="section-heading">Our Menu</h2>
                    <div>
                        <div className="container">
                            <div className="ribbon">
                                <div className="ribbon__arrow ribbon__arrow_left">
                                    <img src={ angleIcon } alt="icon"/>
                                </div>
                                <nav className="ribbon__inner">
                                    <a href="https://google.com" className="ribbon__item ribbon__item_active">All</a>
                                    <a href="https://google.com" className="ribbon__item">Salads</a>
                                    <a href="https://google.com" className="ribbon__item">Soups</a>
                                    <a href="https://google.com" className="ribbon__item">Chicken dishes</a>
                                    <a href="https://google.com" className="ribbon__item">Beef dishes</a>
                                    <a href="https://google.com" className="ribbon__item">Seafood dishes</a>
                                    <a href="https://google.com" className="ribbon__item">Vegetable dishes</a>
                                    <a href="https://google.com" className="ribbon__item">Bits and bites</a>
                                    <a href="https://google.com" className="ribbon__item">On the side</a>
                                </nav>
                                <div
                                    className="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"
                                >
                                    <img src={ angleIcon } alt="icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="filters">
                        <div className="filters__group">
                            <label className="filters__label">Max spiciness</label>
                            <div className="filters__slider">
                                <div className="slider">
                                    <div className="slider__thumb"
                                        // style={ left: '75%' }
                                    >
                                        <span className="slider__value">3</span>
                                    </div>
                                    <div className="slider__progress"
                                        // style={ width: '75%' }
                                    ></div
                                    >
                                    <div className="slider__steps">
                                        <span></span><span></span><span></span
                                    ><span className="slider__step-active"></span><span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filters__group">
                            <div className="filters__checkbox">
                                <input
                                    className="styled-checkbox"
                                    id="nuts-checkbox"
                                    type="checkbox"
                                    value="1"
                                />
                                <label htmlFor="nuts-checkbox">
                                    <span className="filters__label">No nuts</span></label
                                >
                            </div>
                        </div>
                        <div className="filters__group">
                            <div className="filters__checkbox">
                                <input
                                    className="styled-checkbox"
                                    id="vegeterian-checkbox"
                                    type="checkbox"
                                    value="1"
                                />
                                <label htmlFor="vegeterian-checkbox">
                                    <span className="filters__label">Vegeterian only</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="products-grid">
                        <div className="products-grid__inner">
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src={ laabKaiChickenSalad }
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€10.00</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Laab kai chicken salad</div>
                                    <button type="button" className="card__button">
                                        <img src={ plusIcon } alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/som_tam_papaya_salad.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€9.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Som tam papaya salad</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/tom_yam.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€7.00</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Tom yam kai</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/tom_kha.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€7.00</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Tom kha kai</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/tom_kha.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€8.00</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Tom kha koong</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/tom_yam.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€7.00</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Tom yam vegetarian</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/tom_kha.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€7.00</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Tom kha vegetarian</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/sweet_n_sour.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€14.00</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Sweet 'n sour chicken</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/chicken_cashew.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€14.00</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Chicken cashew</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/beef_massaman.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€14.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Beef massaman</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/chu_chee.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€16.00</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Seafood chu chee</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/green_curry.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€12.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Green curry veggies</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/tofu_cashew.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€12.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Tofu cashew</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/krapau_vega.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€12.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Krapau tofu</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/kroepoek.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€2.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Prawn crackers</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/fish_cakes.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€6.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Fish cakes</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/sate.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€6.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Chicken satay</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/satesaus.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€1.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Satay sauce</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/koong_hom_pha.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€6.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Shrimp springrolls</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/mini_vega_springrolls.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€6.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Mini vegetarian spring rolls</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/chicken_loempias.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€6.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Chicken springrolls</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/fried_rice.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€7.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Thai fried rice</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/kroepoek.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€2.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Fresh prawn crackers</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/stir_fried_vegetables.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€7.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Stir fried vegetables</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/witte_rijst.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€1.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">White rice</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/fried_noodles.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€7.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Fried noodles Thai style</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/king_salad.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€7.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">King salad</div>
                                    <button type="button" className="card__button">
                                        <img src="assets/icons/plus-icon.svg" alt="icon"/>
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <img
                                        src="assets/products/satesaus.png"
                                        className="card__image"
                                        alt="product"
                                    />
                                    <span className="card__price">€1.50</span>
                                </div>
                                <div className="card__body">
                                    <div className="card__title">Satésaus</div>
                                    <button type="button" className="card__button">
                                        <img src={ plusIcon } alt="icon"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
        </div>
    );
}
