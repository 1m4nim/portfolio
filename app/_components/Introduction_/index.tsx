import styles from "./index.module.css";
import Image from "next/image";
import { MicroCMSImage } from "microcms-js-sdk";
import Link from "next/link";

type Introduction = {
  name: string;
  profile: string;
  image: MicroCMSImage;
};

type Props = {
  introduction: Introduction[];
};

export default function Introduction_({ introduction }: Props) {
  if (introduction.length === 0) {
    return <p>作っているからちょっと待っててね!!!</p>;
  }
}

<Link href="/introduction" className={styles.link} />;

<Image
  className={styles.image}
  src="/icon.jpg"
  alt="No Image"
  width={1200}
  height={630}
/>;
