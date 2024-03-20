// components/CardWithBtn.jsx
import styles from './cardWithBtn.module.css';
import Card from '@/components/card/page';

import Btn from '../button/page';

const CardWithBtn = ({ product, btn, onClick }) => {
    return (
        <div className={styles.card}>
            <Card
                product={product}
                img={product.thumbnail}
                title={product.title}
                price={product.price}
                id={product.id}

                rating={product.rating}
            />
            <Btn btn={btn} onClick={onClick} />
        </div>
    );
};

export default CardWithBtn;
