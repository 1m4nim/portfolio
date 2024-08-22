import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
//import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/return.png"
          alt="戻る"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li>
            <Link href="/introduction">自己紹介</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
