import { PageLayout } from "@/components/page-layout";

export default function BlogPage() {
  return (
    <PageLayout>
      <div>
        <h2 className="text-4xl font-semibold">Blog</h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Articles, Technical notes, and thoughts on the intersection of
          technology and business.
        </p>
      </div>
    </PageLayout>
  );
}
