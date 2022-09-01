import plusIcon from '../../assets/icons/plus-icon.svg';

const ProductCard = ({name, price, path}) => {
    return (
        <div className="card">
            <div className="card__top">
                <img
                    src={ `${ process.env.REACT_APP_BASE_URL }${ path }` }
                    className="card__image"
                    alt="product"
                />
                <span className="card__price">{ price }</span>
            </div>
            <div className="card__body">
                <div className="card__title">{ name }</div>
                <button type="button" className="card__button">
                    <img src={ plusIcon } alt="icon"/>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
