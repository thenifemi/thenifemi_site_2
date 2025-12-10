"use client";

import Link from "next/link";

import {
  Linkedin02Icon,
  GithubIcon,
  Mail01Icon,
  CopyrightIcon,
  LaurelWreathLeft03Icon,
  LaurelWreathRight03Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Download } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

const socialLinks = [
  {
    icon: Linkedin02Icon,
    text: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/nifemii/",
  },
  {
    icon: GithubIcon,
    text: "Collaborate on GitHub",
    href: "https://github.com/thenifemi",
  },
  {
    icon: Mail01Icon,
    text: "hello@thenifemi.com",
    href: "mailto:hello@thenifemi.com",
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-14 py-12 px-6 mt-16 border-t border-white/10">
      {/* Nifemi with Wreaths */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6">
        <Link
          href="/"
          className="group flex items-center gap-1 text-xl text-white hover:text-white/80 transition-colors"
        >
          <HugeiconsIcon
            icon={LaurelWreathLeft03Icon}
            size={18}
            strokeWidth={1}
            className="text-white group-hover:text-amber-400 transition-colors"
          />
          <span>Nifemi</span>
          <HugeiconsIcon
            icon={LaurelWreathRight03Icon}
            size={18}
            strokeWidth={1}
            className="text-white group-hover:text-amber-400 transition-colors"
          />
        </Link>

        {/* Download Resume */}
        <Highlighter action="underline" color="#fff" strokeWidth={2}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-lg flex items-center gap-2 cursor-pointer"
          >
            Download resumé
            <Download className="w-4 h-4" />
          </a>
        </Highlighter>
      </div>

      {/* Social Links */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {socialLinks.map((link) => (
          <a
            key={link.text}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <HugeiconsIcon icon={link.icon} size={20} strokeWidth={1.5} />
            <span className="text-xl">{link.text}</span>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="flex items-center gap-2 text-[#a8a8a8] text-base">
        <HugeiconsIcon icon={CopyrightIcon} size={16} strokeWidth={1.5} />
        <span>{currentYear} Purple Engineering.</span>
      </div>
    </footer>
  );
}
