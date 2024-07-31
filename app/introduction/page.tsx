import { getIntroduction } from "@/app/_libs/microcms";

export default async function Page() {
  const { contents: introduction } = await getIntroduction();

  return <div>{JSON.stringify(introduction)}</div>;
}
