import './Slide.style.css';
import plusIcon from '../../assets/icons/plus-icon.svg';
import { BASE_URL } from '../../constants';
import { addProduct } from '../../reducers/cart';
import { useDispatch } from 'react-redux';

const Slide = ({name, price, imgPath, id}) => {
    const dispatch = useDispatch();

    function handlerClick() {
        dispatch(addProduct({name, price, imgPath, id}));
    }

    return (
        <div className="carousel__slide">
            <img
                src={ `${ BASE_URL }${ imgPath }` }
                className="carousel__img"
                alt="slide"
            />
            <div className="carousel__caption">
                <span className="carousel__price">€{ price.toFixed(2) }</span>
                <div className="carousel__title">{ name }</div>
                <button type="button" className="carousel__button" onClick={ handlerClick }>
                    <img src={ plusIcon } alt="icon"/>
                </button>
            </div>
        </div>
    );
};

export default Slide;