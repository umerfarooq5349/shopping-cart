
import styles from './all-items.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, } from '@fortawesome/free-solid-svg-icons';
import Card from '@/components/card/page';
import { getAllProducts } from '../api/getAllProducts/getAllProducts';
import { saveProduct } from '../api/cart/addToCart';


const AllProducts = async () => {

    const product = await getAllProducts();
    console.log(product.products[0].title);


    return (
        <div className={styles.container}>

            {product.products.map(product => (

                <Card product={product}
                    img={product.thumbnail}
                    title={product.title}
                    price={product.price}
                    id={product.id}
                    btn={'Add to Cart'}

                ></Card>

            ))}
        </div >
    );
};
export default AllProducts;


