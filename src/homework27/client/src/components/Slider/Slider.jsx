import './Slider.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSpicinessFilter } from '../../reducers/filters';
import { useState } from 'react';

const Slider = ({sliderSteps}) => {
    const dispatch = useDispatch();
    const spicinessValue = useSelector(state => state.filters.filters.spiciness);
    const [dragging, setDragging] = useState(false);

    const parts = sliderSteps.length - 1;
    const percents = spicinessValue / parts * 100;

    const handlerSliderClick = (e) => {
        let clickX = e.clientX - e.target.getBoundingClientRect().left;
        dispatch(setSpicinessFilter({spiciness: Math.round(clickX * parts / e.target.offsetWidth)}));
    };

    const handlerOnPointerDown = (e) => {
        e.preventDefault();
        setDragging(true);

        document.onpointermove = () => {
            dispatch(setSpicinessFilter({spiciness: Math.round(percents * parts / 100)}));
        };

        document.onpointerup = () => {
            document.onpointermove = null;
            setDragging(false);
            document.onpointerup = null;
        };
    };

    return (
        <div className={ dragging ? 'slider slider_dragging' : 'slider' }
             onClick={ (e) => handlerSliderClick(e) }
        >
            <div className="slider__thumb"
                 style={ {left: `${ percents }%`} }
                 onPointerDown={ (e) => handlerOnPointerDown(e) }
            >
                <span className="slider__value">{ percents }</span>
            </div>

            <div className="slider__progress"
                 style={ {width: `${ percents }%`} }
            >
            </div>

            <div className={ dragging ? 'slider__steps slider__step-active' : 'slider__steps' }>
                {
                    sliderSteps.map((division) => {
                        return (
                            <span
                                key={ Math.random() }
                                className={ spicinessValue === division ? 'slider__step-active' : '' }
                            >
                        </span>);
                    })
                }
            </div>
        </div>
    );
};

export default Slider;