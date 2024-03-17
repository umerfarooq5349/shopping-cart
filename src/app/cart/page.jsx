'use client'
import { useEffect, useState } from "react";
import { getProducts } from "../api/cart/addToCart";
import styles from './cart.module.css'

import CardWithBtn from "@/components/cardwithbtn/page";

const Cart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const storedData = await getProducts();
            setData(storedData || []);
        };
        fetchData();
    }, []);

    const handleClick = () => {
        console.log('handleClick')
    }
    return (
        <div >
            <div className={styles.constainer}>
                <div className={styles.containerHead}>
                    <h1 className={styles.title}>Cart</h1>
                    <h4 className={styles.total}>Total products in my cart: {data.length}</h4>
                </div>
                <div className={styles.containerBody}>
                    {data.length > 0 ? (
                        data.map((product, index) => (
                            <div key={index}>
                                <CardWithBtn btn={'Buy Now'} product={product} key={product.id} onClick={handleClick}>

                                </CardWithBtn>
                            </div>
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Cart;
