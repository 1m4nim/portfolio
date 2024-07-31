import { notFound } from "next/navigation";
import { getBlogDetail } from "@/app/_libs/microcms";
import { getIntroduction } from "@/app/_libs/microcms";

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
}
