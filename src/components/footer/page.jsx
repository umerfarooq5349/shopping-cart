import Link from 'next/link';
import styles from './footer.module.css'

const Footer = () => {
    return <div>
        <div className={styles.container}>
            <div className={styles.footer}>
                <Link href={'/'} className={styles.name}>Let's shop</Link>
                <div className={styles.details}>
                    <p >All rights reserved</p>
                </div>
            </div>
        </div>
    </div>;
};
export default Footer;
