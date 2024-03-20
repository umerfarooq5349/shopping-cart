'use client'


import styles from './card.module.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
const Card = ({ product, }) => {


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
                        <h3 className={styles.price_title}>
                            <FontAwesomeIcon icon={faDollar} color='yellow' /> {product.price}</h3>
                    </div>
                    <div className={styles.ratings}>

                        {product.rating <= 3.9 ? (
                            <div className={styles.ratings}>
                                <FontAwesomeIcon icon={faStar} color='yellow' />
                                <FontAwesomeIcon icon={faStar} color='yellow' />
                                <FontAwesomeIcon icon={faStar} color='yellow' />
                                <FontAwesomeIcon icon={faStarHalfStroke} color='yellow' />

                            </div>
                        ) : (
                            <div className={styles.ratings}>
                                <FontAwesomeIcon icon={faStar} color='yellow' />
                                <FontAwesomeIcon icon={faStar} color='yellow' />
                                <FontAwesomeIcon icon={faStar} color='yellow' />
                                <FontAwesomeIcon icon={faStar} color='yellow' />
                                <FontAwesomeIcon icon={faStarHalfStroke} color='yellow' />

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
