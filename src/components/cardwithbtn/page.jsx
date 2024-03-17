
import Card from '../card/page';
import styles from './cardWithBtn.module.css';
import Button from '../button/page';
const CardWithBtn = ({ product, btn, onClick }) => {
    return (
        <div className={styles.card}>
            <Card
                product={product}
                img={product.thumbnail}
                title={product.title}
                price={product.price}
                id={product.id}
                btn={btn}
                rating={product.rating}
            />
            <Button btn={btn} onClick={onClick} />
        </div>
    );
};

export default CardWithBtn;
