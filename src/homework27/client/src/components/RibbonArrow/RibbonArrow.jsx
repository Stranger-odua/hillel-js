import './RibbonArrow.style.css';
import angleIcon from '../../assets/icons/angle-icon.svg';

const RibbonArrow = () => (
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
);

export default RibbonArrow;
