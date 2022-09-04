import './Carousel.style.css';
import angleIcon from '../../assets/icons/angle-icon.svg';
import angleLeftIcon from '../../assets/icons/angle-left-icon.svg';
import { useGetCarouselSlidesQuery } from '../../services/carousel';
import Slide from '../Slide';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSlide } from '../../reducers/carousel';

const Carousel = () => {
    const dispatch = useDispatch();
    const {data: slides, error, isLoading} = useGetCarouselSlidesQuery();
    const activeSlideId = useSelector(state => state.carousel.activeSlideId);

    if (isLoading) return <div>Йде завантаження....</div>;

    function handlerChangeSlide(e, isRightDirection) {
        let updatesSlideIndex;
        isRightDirection
            ? updatesSlideIndex = activeSlideId === slides.at(-1).id ? 0 : activeSlideId + 1
            : updatesSlideIndex = activeSlideId === 0 ? slides.at(-1).id : activeSlideId - 1;

        dispatch(setActiveSlide({activeSlideId: updatesSlideIndex}));
    }

    if (slides) return (
        <div className="container">
            <div className="carousel">
                <div className="carousel__arrow carousel__arrow_right">
                    <img
                        src={ angleIcon }
                        alt="icon"
                        onClick={ (e) => handlerChangeSlide(e, true) }/>
                </div>
                <div className="carousel__arrow carousel__arrow_left">
                    <img
                        src={ angleLeftIcon }
                        alt="icon"
                        onClick={ (e) => handlerChangeSlide(e, false) }/>
                </div>
                <div className="carousel__inner">
                    <Slide  { ...slides[activeSlideId] } />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
