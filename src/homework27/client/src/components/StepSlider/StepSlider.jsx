import './StepSlider.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSpicinessFilter } from '../../reducers/filters';
import { useEffect, useRef, useState } from 'react';

const StepSlider = ({sliderSteps}) => {
    const dispatch = useDispatch();
    const sliderRef = useRef();
    const spicinessValue = useSelector(state => state.filters.filters.spiciness);
    const [dragging, setDragging] = useState(false);

    const parts = sliderSteps.length - 1;
    const toPercent = (spiciness) => spiciness / parts * 100;
    const getValueFromPercent = (percent) => percent / (100 / parts);
    const [percentProgress, setPercentProgress] = useState(toPercent(spicinessValue));

    const getPercentExtremum = (e) => {
        const percents = (e.clientX - sliderRef.current.getBoundingClientRect().left) * 100 / sliderRef.current.offsetWidth;
        return percents <= 0 ? 0 : (percents >= 100 ? 100 : percents);
    };

    const handlerSliderClick = (e) => {
        const clickX = e.clientX - sliderRef.current.getBoundingClientRect().left;
        const spiciness = Math.round(clickX * parts / sliderRef.current.offsetWidth);
        dispatch(setSpicinessFilter({spiciness}));
        setPercentProgress(toPercent(spiciness));
    };

    const handlerOnDown = () => setDragging(true);

    const handlerOnMove = (e) => {
        if (dragging) {
            setPercentProgress(getPercentExtremum(e));
            dispatch(setSpicinessFilter({spiciness: Math.round(getValueFromPercent(getPercentExtremum(e)))}));
        }
    };

    function handlerOnUp(e) {
        if (dragging) {
            const spiciness = Math.round(getValueFromPercent(getPercentExtremum(e)));
            dispatch(setSpicinessFilter({spiciness}));
            setPercentProgress(toPercent(spiciness));
            setDragging(false);
        }
    }

    useEffect(() => {
        window.addEventListener('pointerup', handlerOnUp);
        window.addEventListener('pointermove', handlerOnMove);

        return () => {
            window.removeEventListener('pointerup', handlerOnUp);
            window.removeEventListener('pointermove', handlerOnMove);
        };
    }, [dragging]);

    return (<div className={ dragging ? 'slider slider_dragging' : 'slider' }
                 ref={ sliderRef }
                 onClick={ (e) => handlerSliderClick(e) }
    >
        <div className="slider__thumb"
             style={ {left: `${ percentProgress }%`} }
             onPointerDown={ (e) => handlerOnDown(e) }
        >
            <span className="slider__value">{ spicinessValue }</span>
        </div>
        <div className="slider__progress" style={ {width: `${ percentProgress }%`} }></div>
        <div className={ dragging ? 'slider__steps slider__step-active' : 'slider__steps' }>
            { sliderSteps.map((division) => {
                return (
                    <span
                        key={ Math.random() }
                        className={ spicinessValue === division ? 'slider__step-active' : '' }
                    >
                    </span>
                );
            }) }
        </div>
    </div>);
};

export default StepSlider;