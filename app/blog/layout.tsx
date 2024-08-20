import Sheet from "@/app/_components/Sheet";
import BlogList from "@/app/_components/BlogList";
import { getBlogDetail, getBlogList } from "@/app/_libs/microcms";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: Props) {
  return (
    <>
      <Hero title="Blog" sub="Blog" />
      <Sheet>{children}</Sheet>
    </>
  );
}
