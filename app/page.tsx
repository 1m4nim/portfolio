import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>
          <span>Minami Yamasaki</span>’ｓ portfolio
        </h1>
        <p className={styles.description}>私という存在を見ていってください</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/fungi.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
