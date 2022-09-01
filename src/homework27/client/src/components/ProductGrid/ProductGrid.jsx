import ProductCard from '../ProductCard';
import { useGetProductsQuery } from '../../services/products';

const ProductsGrid = () => {
    const {data: products, error, isLoading} = useGetProductsQuery();

    if (products) return (
        <div className="container">
            <div className="products-grid">
                <div className="products-grid__inner">
                    {
                        products.map((product) => {
                            return (
                                // <></>

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
