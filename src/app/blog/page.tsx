import { PageLayout } from "@/components/page-layout";

export default function BlogPage() {
    return (
        <PageLayout>
            <h2 className="text-4xl font-semibold text-white">Blog</h2>
            <p className="text-xl md:text-2xl text-[#a8a8a8] leading-relaxed">
                Articles, Technical notes, and thoughts on the intersection of
                technology and business.
            </p>
        </PageLayout>
    );
}
