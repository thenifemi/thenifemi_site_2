import { PageLayout } from "@/components/page-layout";

export default function OpinionsPage() {
  return (
    <PageLayout>
      <div>
        <h2 className="text-4xl font-semibold">Opinions</h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Personal thoughts and perspectives on various topics.
        </p>
      </div>
    </PageLayout>
  );
}
