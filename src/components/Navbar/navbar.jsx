import Link from 'next/link';
import styles from './navbar.module.css'

const NavBar = () => {
    return <div>

        <div className={styles.container}>
            <div className={styles.navbar}>

                <Link href={'/'} className={styles.name}>Let's shop</Link>
                <div className={styles.links}>
                    <Link href={'/all-items'} className={styles.links}>All Items</Link>
                    <Link href={'/cart'} className={styles.links}>Cart</Link>
                </div>
            </div>
        </div>
    </div>;
};
export default NavBar;
