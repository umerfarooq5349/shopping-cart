'use client'

import { addToCart, saveProduct } from '@/app/api/cart/addToCart';
import styles from './card.module.css';
import Image from 'next/image';
import Button from '../button/page';

const Card = ({ product, btn }) => {


    return (
        <div className={styles.container}>

            <div className={styles.card} key={product.id}>
                <div className={styles.img}>
                    <Image src={product.thumbnail} alt={product.title} fill className={styles.img} />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.cardBottom}>
                    <div className={styles.price}>
                        <h3 className={styles.price_title}>$ {product.price}</h3>
                    </div>
                    <p>{product.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
