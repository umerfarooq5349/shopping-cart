'use client'
import styles from './cart.module.css'

import CardWithBtn from "@/components/cardwithbtn/page";
import { totalPrice } from "@/lib/utils/totalPrice";
import { faCartArrowDown, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { getProducts } from "../api/cart/addToCart";
import { deleteFromCart } from '@/lib/utils/delete';

const Cart = () => {
    const [data, setData] = useState([]);
    const [price, setPrice] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const storedData = await getProducts();
            const total_Price = await totalPrice();
            console.log("price: " + total_Price)
            setData(storedData || []);
            setPrice(total_Price)
        };
        fetchData();
    }, []);

    const handleDeleteFromCart = async (id) => {
        await deleteFromCart(id);
        const updatedData = await getProducts();
        const total_Price = await totalPrice();
        setData(updatedData || []);
        setPrice(total_Price);
    };
    return (
        <div >
            <div className={styles.constainer}>
                <div className={styles.containerHead}>
                    <h1 className={styles.title}>Cart</h1>
                    <h3>Total price: {price}</h3>
                    <h4 className={styles.total}><FontAwesomeIcon icon={faCartArrowDown} color='yellow' bounce={true} size={'lg'} /> {data.length}</h4>
                </div>
                <div className={styles.containerBody}>
                    {data.length > 0 ? (
                        data.map((product, index) => (
                            <div key={index}>
                                <CardWithBtn btn={'Remove from cart'} product={product} key={product.id} onClick={() => handleDeleteFromCart(product.id)} />

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
