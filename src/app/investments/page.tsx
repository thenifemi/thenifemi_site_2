import { PageLayout } from "@/components/page-layout";

export default function InvestmentsPage() {
    return (
        <PageLayout>
            <h2 className="text-4xl font-semibold text-white">Investments</h2>
            <p className="text-xl md:text-2xl text-[#a8a8a8] leading-relaxed">
                Companies and projects I am invested in.
            </p>
        </PageLayout>
    );
}
