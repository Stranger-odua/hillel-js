import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';

const ProductsGrid = ({products}) => {
    const filters = useSelector(state => state.filters.filters);

    const filteredProducts = (products) => {
        if (products) {
            return products
                .filter((product) => filters.noNuts ? product.nuts === false : product)
                .filter((product) => filters.vegeterianOnly ? product.isVegeterian === true : product)
                .filter((product) => product.spiciness <= filters.spiciness);
        }
    };

    // console.log(filteredProducts(products));

    if (products) return (
        <div className="container">
            <div className="products-grid">
                <div className="products-grid__inner">
                    {
                        filteredProducts(products).map((product) => {
                            return (
                                <ProductCard
                                    key={ product.id }
                                    { ...product }
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsGrid;