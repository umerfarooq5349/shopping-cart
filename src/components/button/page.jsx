import styles from './button.module.css'

const Btn = ({ btn, onClick }) => {
    return (<div>
        <button className={styles.button} onClick={onClick}>
            {btn}

        </button>
    </div>);
};
export default Btn;