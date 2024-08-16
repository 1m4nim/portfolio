import Sheet from "@/app/_components/Sheet";
import BlogList from "@/app/_components/BlogList";
import { getBlogDetail, getBlogList } from "@/app/_libs/microcms";

type Props = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: Props) {
  return (
    <>
      <Sheet>{children}</Sheet>
    </>
  );
}
