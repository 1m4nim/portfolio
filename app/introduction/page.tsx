import { getIntroduction } from "@/app/_libs/microcms";
import Introduction_ from "@/app/_components/Introduction_";

export default async function Page() {
  const { contents: introduction } = await getIntroduction();

  return <Introduction_ introduction={introduction} />;
}
