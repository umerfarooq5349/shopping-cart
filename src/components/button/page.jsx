import styles from './button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
const Btn = ({ btn, onClick }) => {
    return (<div>
        <button className={styles.button} onClick={onClick}>
            {btn}
            {/* <FontAwesomeIcon icon={faCartArrowDown} color='#28282b' size={'2x'} className={styles.icon} /> */}

        </button>
    </div>);
};
export default Btn;