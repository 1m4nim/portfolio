import { getBlogList } from "@/app/_libs/microcms";
import Image from "next/image";
import styles from "./page.module.css";
import BlogList from "@/app/_components/BlogList";

export default async function Page() {
  const { contents: blog } = await getBlogList();

  return <BlogList blog={blog} />;
}
