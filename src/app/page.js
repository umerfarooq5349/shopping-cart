import Image from "next/image";
import styles from "./home.module.css";
import AllItems from "./all-items/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.welcome}>Welcome</h1>
      <h4 className={styles.note}>Here u can find all the products you want</h4>
      <AllItems></AllItems>
    </div>
  );
}
