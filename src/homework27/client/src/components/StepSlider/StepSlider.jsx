import './StepSlider.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDragging, setSpicinessFilter } from '../../reducers/filters';
import { useEffect, useRef, useState } from 'react';

const StepSlider = ({sliderSteps}) => {
    const dispatch = useDispatch();
    const sliderRef = useRef();
    const spicinessValue = useSelector(state => state.filters.filters.spiciness);
    const dragging = useSelector(state => state.filters.stepSlider.dragging);
    const parts = sliderSteps.length - 1;
    const [percentProgress, setPercentProgress] = useState(spicinessValue / parts * 100);
    const toPercent = (spiciness) => spiciness / parts * 100;

    const getExtremum = (e) => {
        const percents = (e.clientX - sliderRef.current.getBoundingClientRect().left) * 100 / sliderRef.current.offsetWidth;
        return percents <= 0 ? 0 : (percents >= 100 ? 100 : percents);
    };

    const handlerSliderClick = (e) => {
        const clickX = e.clientX - sliderRef.current.getBoundingClientRect().left;
        const spiciness = Math.round(clickX * parts / sliderRef.current.offsetWidth);
        dispatch(setSpicinessFilter({spiciness}));
        setPercentProgress(toPercent(spiciness));
    };

    const handlerOnDown = () => dispatch(setDragging({dragging: true}));

    const handlerOnMove = (e) => {
        if (dragging) {
            // const clickX = e.clientX - sliderRef.current.getBoundingClientRect().left;
            // const spiciness = Math.round(clickX * parts / sliderRef.current.offsetWidth);
            setPercentProgress(getExtremum(e));
            dispatch(setSpicinessFilter({spiciness: Math.round(getExtremum(e) / 25)}));
        }
    };

    function handlerOnUp(e) {
        if (dragging) {
            console.log('UP');
            dispatch(setDragging({dragging: false}));
            console.log({dragging});
            // const clickX = e.clientX - sliderRef.current.getBoundingClientRect().left;
            // const spiciness = Math.round(clickX * parts / sliderRef.current.offsetWidth);
            // setPercentProgress(toPercent(spiciness));
            // setPercentProgress(getExtremum(e));
            // dispatch(setSpicinessFilter({spiciness}));

            // setPercentProgress(getExtremum(e));
            // dispatch(setSpicinessFilter({spiciness: Math.round(getExtremum(e) / 25)}));
        }
    }

    useEffect(() => {
        window.addEventListener('mouseup', (e) => handlerOnUp(e));
        return () => window.removeEventListener('mouseup', (e) => handlerOnUp(e));
    }, [dragging]);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => handlerOnMove(e));
        return () => window.removeEventListener('mousemove', (e) => handlerOnMove(e));
    }, [dragging]);

    return (
        <div className={ dragging ? 'slider slider_dragging' : 'slider' }
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

export default StepSlider;