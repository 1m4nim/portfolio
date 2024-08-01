import { getIntroduction } from "@/app/_libs/microcms";
import Introduction_ from "@/app/_components/Introduction_";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Page() {
  const { contents: introduction } = await getIntroduction();
  return <div>{JSON.stringify(introduction)}</div>;
}
