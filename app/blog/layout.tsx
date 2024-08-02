import Sheet from "../_components/Sheet";

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
