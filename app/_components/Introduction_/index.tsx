import styles from "./index.module.css";
import Image from "next/image";
import { MicroCMSImage } from "microcms-js-sdk";

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
