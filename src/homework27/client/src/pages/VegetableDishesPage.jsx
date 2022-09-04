import Carousel from '../components/Carousel';
import RibbonMenu from '../components/RibbonMenu';
import Filters from '../components/Filters';
import ProductsGrid from '../components/ProductGrid';
import { useGetVegetableDishesQuery } from '../services/products';

const VegetableDishesPage = () => {
    const {data: vegetableDishes, error, isLoading} = useGetVegetableDishesQuery();

    if (vegetableDishes) return (
        <>
            <Carousel/>
            <RibbonMenu/>
            <Filters/>
            <ProductsGrid products={ vegetableDishes }/>
        </>
    );
};

export default VegetableDishesPage;