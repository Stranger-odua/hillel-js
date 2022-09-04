import Carousel from '../components/Carousel';
import RibbonMenu from '../components/RibbonMenu';
import Filters from '../components/Filters';
import ProductsGrid from '../components/ProductGrid';
import { useGetBeefDishesQuery } from '../services/products';

const BeefDishesPage = () => {
    const {data: beefDishes, error, isLoading} = useGetBeefDishesQuery();

    if (beefDishes) return (
        <>
            <Carousel/>
            <RibbonMenu/>
            <Filters/>
            <ProductsGrid products={ beefDishes }/>
        </>
    );
};

export default BeefDishesPage;