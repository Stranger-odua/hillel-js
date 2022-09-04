import Carousel from '../components/Carousel';
import RibbonMenu from '../components/RibbonMenu';
import Filters from '../components/Filters';
import ProductsGrid from '../components/ProductGrid';
import { useGetSeafoodDishesQuery } from '../services/products';

const SeafoodDishesPage = () => {
    const {data: seafoodDishes, error, isLoading} = useGetSeafoodDishesQuery();

    if (seafoodDishes) return (
        <>
            <Carousel/>
            <RibbonMenu/>
            <Filters/>
            <ProductsGrid products={ seafoodDishes }/>
        </>
    );
};

export default SeafoodDishesPage;