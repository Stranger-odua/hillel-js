import Carousel from '../components/Carousel';
import RibbonMenu from '../components/RibbonMenu';
import Filters from '../components/Filters';
import ProductsGrid from '../components/ProductGrid';
import { useGetSaladsQuery } from '../services/products';

const SaladsPage = () => {
    const {data: salads, error, isLoading} = useGetSaladsQuery();

    if (salads) return (
        <>
            <Carousel/>
            <RibbonMenu/>
            <Filters/>
            <ProductsGrid products={ salads }/>
        </>
    );
};

export default SaladsPage;