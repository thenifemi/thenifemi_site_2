import { PageLayout } from "@/components/page-layout";

export default function WorksPage() {
  return (
    <PageLayout>
      <div>
        <h2 className="text-4xl font-semibold">Works</h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          A collection of projects and creative works showcasing my skills and
          interests.
        </p>
      </div>
    </PageLayout>
  );
}
