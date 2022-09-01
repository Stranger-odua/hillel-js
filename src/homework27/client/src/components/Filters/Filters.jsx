import './Filters.style.css';

const Filters = () => (
    <div className="container">
        <div className="filters">
            <div className="filters__group">
                <label className="filters__label">Max spiciness</label>
                <div className="filters__slider">
                    <div className="slider">
                        <div className="slider__thumb"
                            // style={ left: '75%' }
                        >
                            <span className="slider__value">3</span>
                        </div>
                        <div className="slider__progress"
                            // style={ width: '75%' }
                        ></div
                        >
                        <div className="slider__steps">
                            <span></span><span></span><span></span
                        ><span className="slider__step-active"></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filters__group">
                <div className="filters__checkbox">
                    <input
                        className="styled-checkbox"
                        id="nuts-checkbox"
                        type="checkbox"
                        value="1"
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
                        value="1"
                    />
                    <label htmlFor="vegeterian-checkbox">
                        <span className="filters__label">Vegeterian only</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
);

export default Filters;
