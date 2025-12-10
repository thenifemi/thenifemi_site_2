import { PageLayout } from "@/components/page-layout";

export default function InvestmentsPage() {
  return (
    <PageLayout>
      <div>
        <h2 className="text-4xl font-semibold">Investments</h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Companies and projects I am invested in.
        </p>
      </div>
    </PageLayout>
  );
}
