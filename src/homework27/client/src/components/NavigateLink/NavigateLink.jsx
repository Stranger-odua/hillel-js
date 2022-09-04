import { NavLink } from 'react-router-dom';
import './NavigateLink.style.css';

const NavigateLink = ({to, category}) => {
    function changeClassnames(isActive) {
        return isActive ? `ribbon__item ribbon__item_active` : `ribbon__item`;
    }

    return (
        <NavLink to={ to === '/' ? '/' : `/${ to }` }
                 className={ ({isActive}) => changeClassnames(isActive) }>{ category }</NavLink>
    );
};

export default NavigateLink;