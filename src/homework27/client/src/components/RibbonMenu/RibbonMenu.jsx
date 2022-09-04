import NavigateLink from '../NavigateLink';
import angleIcon from '../../assets/icons/angle-icon.svg';
import { useGetCategoriesQuery, useGetPathsQuery } from '../../services/ribbonArrow';
import './RibbonMenu.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeShowingCategories } from '../../reducers/ribbonMenu';

const RibbonMenu = () => {
    const dispatch = useDispatch();
    const position = useSelector(state => state.ribbonMenu.position);
    const {data: categories, categoriesError, categoriesIsLoading} = useGetCategoriesQuery();
    const {data: paths, pathsError, pathsIsLoading} = useGetPathsQuery();

    const handlerOnArrowClick = (e) => {
        let isPressedArrow;
        e.target.parentNode.classList.contains('ribbon__arrow')
            ? isPressedArrow = e.target.parentNode.classList.contains('ribbon__arrow_left')
            : isPressedArrow = e.target.classList.contains('ribbon__arrow_left');

        dispatch(changeShowingCategories({
            isClickedLeftArrow: isPressedArrow,
        }));
    };

    if (categories && paths) return (
        <div className="container">
            <h2 className="section-heading">Our Menu</h2>
            <div>
                <div className="container">
                    <div className="ribbon">
                        <div
                            onClick={ (e) => handlerOnArrowClick(e) }
                            className={ position !== 'left'
                                ? 'ribbon__arrow ribbon__arrow_left ribbon__arrow_visible'
                                : 'ribbon__arrow ribbon__arrow_left' }
                        >
                            <img src={ angleIcon } alt="icon"/>
                        </div>
                        <nav className="ribbon__inner"
                             style={ position === 'left'
                                 ? {justifyContent: 'flex-start'}
                                 : (position === 'right' ? {justifyContent: 'flex-end'} : {justifyContent: 'center'}) }
                        >
                            {
                                categories.map((category, i) => {
                                    return (
                                        <NavigateLink
                                            key={ category }
                                            category={ category }
                                            to={ paths[i] }
                                        />
                                    );
                                })
                            }
                        </nav>
                        <div
                            onClick={ (e) => handlerOnArrowClick(e) }
                            className={ position !== 'right'
                                ? 'ribbon__arrow ribbon__arrow_right ribbon__arrow_visible'
                                : 'ribbon__arrow ribbon__arrow_right' }
                        >
                            <img src={ angleIcon } alt="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RibbonMenu;
