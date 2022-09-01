import './Carousel.style.css';
import angleIcon from '../../assets/icons/angle-icon.svg';
import angleLeftIcon from '../../assets/icons/angle-left-icon.svg';
import penangShrimp from '../../assets/carousel/penang_shrimp.png';
import chickenCashew from '../../assets/carousel/chicken_cashew.png';
import plusIcon from '../../assets/icons/plus-icon.svg';
import redCurryVega from '../../assets/carousel/red_curry_vega.png';
import chickenLoempias from '../../assets/carousel/chicken_loempias.png';

const Carousel = () => (
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
                            <img src={ plusIcon } alt="icon"/>
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
);

export default Carousel;
