'use client'
import { useEffect, useState } from "react";
import { getProducts } from "../api/cart/addToCart";
import styles from './cart.module.css'
import Card from "@/components/card/page";
import Button from "@/components/button/page";
const Cart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const storedData = await getProducts();
            setData(storedData || []);
        };

        fetchData();
    }, []);

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
                                <Card product={product}
                                    img={product.thumbnail}
                                    title={product.title}
                                    price={product.price}
                                    id={product.id}
                                    btn={'Buy Now'}
                                    onClick={() => { }}
                                >


                                </Card>

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
