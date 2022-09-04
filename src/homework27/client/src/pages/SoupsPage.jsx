import Carousel from '../components/Carousel';
import RibbonMenu from '../components/RibbonMenu';
import Filters from '../components/Filters';
import ProductsGrid from '../components/ProductGrid';
import { useGetSoupsQuery } from '../services/products';

const SoupsPage = () => {
    const {data: soups, error, isLoading} = useGetSoupsQuery();

    if (soups) return (
        <>
            <Carousel/>
            <RibbonMenu/>
            <Filters/>
            <ProductsGrid products={ soups }/>
        </>
    );
};

export default SoupsPage;