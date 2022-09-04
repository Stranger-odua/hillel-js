import Carousel from '../components/Carousel';
import RibbonMenu from '../components/RibbonMenu';
import Filters from '../components/Filters';
import ProductsGrid from '../components/ProductGrid';
import { useGetChickenDishesQuery } from '../services/products';

const ChickenDishesPage = () => {
    const {data: chickenDishes, error, isLoading} = useGetChickenDishesQuery();

    if (chickenDishes) return (
        <>
            <Carousel/>
            <RibbonMenu/>
            <Filters/>
            <ProductsGrid products={ chickenDishes }/>
        </>
    );
};

export default ChickenDishesPage;