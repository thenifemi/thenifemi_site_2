import { Header } from "@/components/header";
import { ReactNode } from "react";

interface PageLayoutProps {
    children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="py-12 px-6 md:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}
