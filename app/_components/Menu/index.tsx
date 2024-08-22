// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import styles from "./index.module.css";
// import cx from "classnames";

// export default function Menu() {
//   const [isOpen, setOpen] = useState<boolean>(false);
//   const open = () => setOpen(true);
//   const close = () => setOpen(false);
//   return (
//     <div>
//       <nav className={cx(styles.nav, isOpen && styles.open)}>
//         <ul className={styles.items}>
//           <li>
//             <Link href="/introduction">自己紹介</Link>
//           </li>

//           <li>
//             <Link href="/blog">blog</Link>
//           </li>

//           <li>
//             <Link href="/contact">お問い合わせ</Link>
//           </li>
//         </ul>
//         <button className={cx(styles.button, styles.close)} onClick={close}>
//           <Image
//             src="/close.png"
//             alt="閉じる"
//             width={50}
//             height={50}
//             priority
//           />
//         </button>
//       </nav>

//       <button className={styles.button} onClick={open}>
//         <Image src="/menu3.png" alt="メニュー" width={50} height={50} />
//       </button>
//     </div>
//   );
// }
