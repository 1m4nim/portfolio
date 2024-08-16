import styles from "./page.module.css";
import Image from "next/image";
import { getIntroduction } from "@/app/_libs/microcms";
import Introduction_ from "@/app/_components/Introduction_";
import { Blog } from "@/app/_libs/microcms";
import BlogList from "@/app/_components/BlogList";

// const data: { contents: Blog[] } = {
//   contents: [
//     {
//       id: "1",
//       title: "はじめまして！！！",
//       category: {
//         body: "もっと勉強してもっとプログラミングができるようになりたい",
//       },
//       publishedAt: "2024/08/01",
//       createdAt: "2024/08/011",
//     },
//   ],
// };

export default async function Home() {
  const data = await getIntroduction({});
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>
            <span>Minami Yamasaki</span>’ｓ portfolio
          </h1>
          <p className={styles.description}>私という存在を見ていってください</p>
        </div>
        <section className={styles.introduction}>
          <h2 className={styles.introductionTitle}></h2>
        </section>
        <Image
          className={styles.bgimg}
          src="/fungi.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
    </>
  );
}
