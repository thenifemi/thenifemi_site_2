"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Highlighter } from "@/components/ui/highlighter";
import { LaurelWreathLeft03Icon, LaurelWreathRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const navLinks = [
    { name: "Works", href: "/works" },
    { name: "Blog", href: "/blog" },
    { name: "Investments", href: "/investments" },
    { name: "Opinions", href: "/opinions" },
    { name: "Tools", href: "/tools" },
];

export function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <header className="sticky top-0 z-50 flex flex-col items-center pt-6 pb-4 px-6 bg-background">
            {/* Navigation Links */}
            <nav className="flex flex-col md:flex-row items-center gap-2 sm:gap-3 md:gap-10">
                {/* Mobile: First Row - Nifemi, Works, Blog */}
                {/* Desktop: All in one row */}
                <div className="flex items-center gap-10 md:contents">
                    {/* Nifemi (Home) with gold underline */}
                    <Link
                        href="/"
                        className={`text-xl hover:text-white transition-colors duration-200 ${isHome ? 'text-white' : 'text-[#a8a8a8]'}`}
                    >
                        {isHome ? (
                            <Highlighter action="underline" color="#fbbf24" strokeWidth={2}>
                                <div className="flex items-center gap-1">
                                    <HugeiconsIcon
                                        icon={LaurelWreathLeft03Icon}
                                        size={18}
                                        color="#fff"
                                        strokeWidth={1}
                                    />
                                    Nifemi
                                    <HugeiconsIcon
                                        icon={LaurelWreathRight03Icon}
                                        size={18}
                                        color="#fff"
                                        strokeWidth={1}
                                    />
                                </div>
                            </Highlighter>
                        ) : (
                            <div className="flex items-center gap-1">
                                <HugeiconsIcon
                                    icon={LaurelWreathLeft03Icon}
                                    size={18}
                                    color="#fff"
                                    strokeWidth={1}
                                />
                                Nifemi
                                <HugeiconsIcon
                                    icon={LaurelWreathRight03Icon}
                                    size={18}
                                    color="#fff"
                                    strokeWidth={1}
                                />
                            </div>
                        )}
                    </Link>
                    {navLinks.slice(0, 2).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-xl hover:text-white transition-colors duration-200 ${pathname === link.href ? 'text-white' : 'text-[#a8a8a8]'}`}
                        >
                            {pathname === link.href ? (
                                <Highlighter action="underline" color="#a8a8a8" strokeWidth={2}>
                                    {link.name}
                                </Highlighter>
                            ) : (
                                link.name
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile: Second Row - Investments, Opinions, Tools */}
                {/* Desktop: Continues in same row */}
                <div className="flex items-center gap-10 md:contents">
                    {navLinks.slice(2, 5).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-xl hover:text-white transition-colors duration-200 ${pathname === link.href ? 'text-white' : 'text-[#a8a8a8]'}`}
                        >
                            {pathname === link.href ? (
                                <Highlighter action="underline" color="#a8a8a8" strokeWidth={2} >
                                    {link.name}
                                </Highlighter>
                            ) : (
                                link.name
                            )}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}


