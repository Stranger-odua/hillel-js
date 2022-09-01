import ProductsGrid from '../ProductGrid';
import Carousel from '../Carousel';
import Filters from '../Filters';
import RibbonArrow from '../RibbonArrow';


const Main = () => {
    return (
        <main>
            <Carousel/>
            <RibbonArrow/>
            <Filters/>
            <ProductsGrid/>
        </main>
    );
};

export default Main;
