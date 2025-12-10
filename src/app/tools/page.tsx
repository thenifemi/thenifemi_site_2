import { PageLayout } from "@/components/page-layout";

export default function ToolsPage() {
  return (
    <PageLayout>
      <div>
        <h2 className="text-4xl font-semibold">Tools</h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          A curated list of tools and resources I use frequently.
        </p>
      </div>
    </PageLayout>
  );
}
