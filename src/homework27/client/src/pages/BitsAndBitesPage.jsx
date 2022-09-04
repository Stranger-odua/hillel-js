import Carousel from '../components/Carousel';
import RibbonMenu from '../components/RibbonMenu';
import Filters from '../components/Filters';
import ProductsGrid from '../components/ProductGrid';
import { useGetBitsAndBitesQuery } from '../services/products';

const BitsAndBitesPage = () => {
    const {data: bitsAndBites, error, isLoading} = useGetBitsAndBitesQuery();

    if (bitsAndBites) return (
        <>
            <Carousel/>
            <RibbonMenu/>
            <Filters/>
            <ProductsGrid products={ bitsAndBites }/>
        </>
    );
};

export default BitsAndBitesPage;