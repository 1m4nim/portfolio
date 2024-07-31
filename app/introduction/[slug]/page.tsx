import { getIntroduction } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import NotFound from "next/navigation";
import { notFound } from "next/navigation";
import { MicroCMSQueries } from "microcms-js-sdk";

type Props = {
  params: {
    slug: MicroCMSQueries;
  };
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getIntroduction(params.slug).catch(notFound);
}
