import plusIcon from '../../assets/icons/plus-icon.svg';
import { BASE_URL } from '../../constants';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../reducers/cart';

const ProductCard = ({name, price, imgPath, id}) => {
    const dispatch = useDispatch();

    const handlerClick = () => dispatch(addProduct({name, price, imgPath, id}));

    return (
        <div className="card">
            <div className="card__top">
                <img
                    src={ `${ BASE_URL }${ imgPath }` }
                    className="card__image"
                    alt="product"
                />
                <span className="card__price">€{ price.toFixed(2) }</span>
            </div>
            <div className="card__body">
                <div className="card__title">{ name }</div>
                <button type="button" className="card__button" onClick={ handlerClick }>
                    <img src={ plusIcon } alt="icon"/>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
