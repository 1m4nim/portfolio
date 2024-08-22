import Image from "next/image";
import type { Blog } from "@/app/_libs/microcms";
import Date from "../Date";
import styles from "./index.module.css";

type Props = {
  data: Blog;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.meta}>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.image && (
        <Image
          src={data.image.url}
          alt=""
          className={styles.thumbnail}
          width={data.image.width}
          height={data.image.height}
        />
      )}
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: data.body,
        }}
      />
    </main>
  );
}
