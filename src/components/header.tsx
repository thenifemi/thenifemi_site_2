"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Highlighter } from "@/components/ui/highlighter";
import {
  LaurelWreathLeft03Icon,
  LaurelWreathRight03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navLinks = [
  { name: "Nifemi", href: "/" },
  { name: "Works", href: "/works" },
  { name: "Blog", href: "/blog" },
  { name: "Investments", href: "/investments" },
  { name: "Opinions", href: "/opinions" },
  { name: "Tools", href: "/tools" },
] as const;

// Reusable NavLink component
interface NavLinkProps {
  name: string;
  href: string;
  isActive: boolean;
  showWreaths?: boolean;
}

function NavLink({ name, href, isActive, showWreaths = false }: NavLinkProps) {
  return (
    <Highlighter
      action="underline"
      strokeWidth={2}
      isActive={isActive}
      color="currentColor"
    >
      <Link
        href={href}
        className={`group flex items-center gap-1 text-xl hover:text-foreground transition-colors duration-200 ${
          isActive ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {showWreaths && (
          <HugeiconsIcon
            icon={LaurelWreathLeft03Icon}
            size={18}
            strokeWidth={1}
            className="text-amber-400"
          />
        )}
        {name}
        {showWreaths && (
          <HugeiconsIcon
            icon={LaurelWreathRight03Icon}
            size={18}
            strokeWidth={1}
            className="text-amber-400"
          />
        )}
      </Link>
    </Highlighter>
  );
}

export function Header() {
  const pathname = usePathname();

  // Split for mobile layout: first row (0-2), second row (3-5)
  const firstRowLinks = navLinks.slice(0, 3);
  const secondRowLinks = navLinks.slice(3);

  return (
    <header className="sticky top-0 z-50 flex flex-col items-center pt-6 pb-4 px-6 bg-background">
      <nav className="flex flex-col md:flex-row items-center gap-2 sm:gap-3 md:gap-10">
        {/* Mobile: First Row | Desktop: All in one row */}
        <div className="flex items-center gap-10 md:contents">
          {firstRowLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
              isActive={pathname === link.href}
              showWreaths={link.name === "Nifemi"}
            />
          ))}
        </div>

        {/* Mobile: Second Row | Desktop: Continues in same row */}
        <div className="flex items-center gap-10 md:contents">
          {secondRowLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
              isActive={pathname === link.href}
            />
          ))}

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
