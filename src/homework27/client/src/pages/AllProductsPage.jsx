import Carousel from '../components/Carousel';
import RibbonMenu from '../components/RibbonMenu';
import Filters from '../components/Filters';
import ProductsGrid from '../components/ProductGrid';
import { useGetAllProductsQuery } from '../services/products';

const AllProductsPage = () => {
    const {data: products, error, isLoading} = useGetAllProductsQuery();

    return (
        <>
            <Carousel/>
            <RibbonMenu/>
            <Filters/>
            <ProductsGrid products={ products }/>
        </>
    );
};

export default AllProductsPage;