'use client'
import styles from './all-items.module.css'

import { getAllProducts } from '../api/getAllProducts/getAllProducts';
import CardWithBtn from '@/components/cardwithbtn/page';
import { saveProduct } from '../api/cart/addToCart';

const AllProducts = async () => {
    const product = await getAllProducts();
    const handleSaveProduct = (id) => {
        saveProduct(id);
    };
    return (
        <div className={styles.container}>
            {product.products.map(product => (
                <CardWithBtn
                    btn={'Add to cart'}
                    onClick={() => handleSaveProduct(product.id)}
                    product={product}
                    key={product.id} />
            ))}
        </div >
    );
};
export default AllProducts;