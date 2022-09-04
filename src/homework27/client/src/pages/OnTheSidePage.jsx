import Carousel from '../components/Carousel';
import RibbonMenu from '../components/RibbonMenu';
import Filters from '../components/Filters';
import ProductsGrid from '../components/ProductGrid';
import { useGetOnTheSideDishesQuery } from '../services/products';

const OnTheSidePage = () => {
    const {data: onTheSideDishes, error, isLoading} = useGetOnTheSideDishesQuery();

    if (onTheSideDishes) return (
        <>
            <Carousel/>
            <RibbonMenu/>
            <Filters/>
            <ProductsGrid products={ onTheSideDishes }/>
        </>
    );
};

export default OnTheSidePage;