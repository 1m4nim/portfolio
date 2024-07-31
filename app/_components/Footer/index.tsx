import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/introduction">自己紹介</Link>
          </li>

          <li className={styles.item}>
            <Link href="/blog">blog</Link>
          </li>

          <li className={styles.item}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© 2024 Minami Yamasaki</p>
    </footer>
  );
}
