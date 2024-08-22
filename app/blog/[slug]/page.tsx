import { notFound } from "next/navigation";
import { getBlogDetail } from "@/app/_libs/microcms";
import { getIntroduction } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";
import Article from "@/app/_components/Article";
import { MicroCMSQueries } from "microcms-js-sdk";

type Props = {
  params: {
    slug: string;
  };

  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/blog">Blog一覧へ</ButtonLink>
      </div>
    </>
  );
}
