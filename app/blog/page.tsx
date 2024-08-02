import { getBlogDetail } from "@/app/_libs/microcms";
import Image from "next/image";
import styles from "./page.module.css";
import BlogList from "../_components/BlogList";

export default async function Page() {
  const { contents: blog } = await getBlogDetail();

  return <BlogList blog={blog} />;
}
