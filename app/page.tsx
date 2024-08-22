import styles from "./page.module.css";
import Image from "next/image";
import { getBlogList, getIntroduction } from "@/app/_libs/microcms";
import Introduction_ from "@/app/_components/Introduction_";
import BlogList from "@/app/_components/BlogList";
import { TOP_BLOG_LIMIT } from "@/app/_constants";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
  const data = await getBlogList({
    limit: TOP_BLOG_LIMIT,
  });
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
      <section className={styles.blog}>
        <h2 className={styles.blogTitle}></h2>
        <ul>
          {data.contents.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/noimage.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={styles.content}>
                  <dt className={styles.blogItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.data}>
                      <Image
                        src="/clock.png"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.blogLink}>
          <ButtonLink href="/blog">Blogを見てみる？</ButtonLink>
        </div>
      </section>
    </>
  );
}
