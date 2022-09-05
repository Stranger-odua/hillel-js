import './Filters.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNutsFilter, setVegeterianFilter } from '../../reducers/filters';
import StepSlider from '../StepSlider';
import { handlerOnMove } from '../StepSlider/StepSlider';

const Filters = () => {
    const dispatch = useDispatch();
    const noNuts = useSelector(state => state.filters.filters.noNuts);
    const vegeterianOnly = useSelector(state => state.filters.filters.vegeterianOnly);

    const sliderSteps = [0, 1, 2, 3, 4];

    const handlerSetNutsFilter = (e) => dispatch(setNutsFilter({noNuts: e.target.checked}));
    const handlerSetVegeterianFilter = (e) => dispatch(setVegeterianFilter({vegeterianOnly: e.target.checked}));

    return (
        <div className="container">
            <div className="filters">
                <div className="filters__group">
                    <label className="filters__label">Max spiciness</label>
                    <div className="filters__slider">

                        <StepSlider sliderSteps={ sliderSteps }/>

                    </div>
                </div>
                <div className="filters__group">
                    <div className="filters__checkbox">
                        <input
                            className="styled-checkbox"
                            id="nuts-checkbox"
                            type="checkbox"
                            checked={ noNuts }
                            value={ noNuts }
                            onChange={ (e) => handlerSetNutsFilter(e) }
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
                            checked={ vegeterianOnly }
                            value={ vegeterianOnly }
                            onChange={ (e) => handlerSetVegeterianFilter(e) }
                        />
                        <label htmlFor="vegeterian-checkbox">
                            <span className="filters__label">Vegeterian only</span>
                        </label>
                    </div>
                </div>
            </div>
            <button
                style={ {color: '#fff'} }
                onClick={ (e) => {
                    console.log('click DELETE');
                    window.mousemove = null;
                    window.onmousemove = null;
                } }
            >
                DELETE
            </button>
        </div>
    );
};

export default Filters;
