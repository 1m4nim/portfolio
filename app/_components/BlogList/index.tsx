import Image from "next/image";

import styles from "./index.module.css";
import { Blog } from "@/app/_libs/microcms";

type Props = {
  blog: Blog[];
};

export default function BlogList({ blog }: Props) {
  if (blog.length === 0) {
    return <p className={styles.construction}>工事中だよ</p>;
  }
  return (
    <ul>
      {blog.map((article) => (
        <li key={article.id} className={styles.list}>
          <div className={styles.link}>
            {article.image && (
              <Image
                className={styles.image}
                src={article.image.url}
                alt=""
                width={article.image.width}
                height={article.image.height}
              />
            )}

            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                {/* <span className={styles.tag}>{article.category.body}</span> */}
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
  );
}
