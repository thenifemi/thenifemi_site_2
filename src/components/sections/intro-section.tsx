"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export function IntroSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section>
      <p className="text-2xl text-foreground/80 mb-2">
        <span className="text-foreground">Nifemi</span> here!
      </p>

      <p className="text-2xl text-foreground/80">
        Software engineer with over 7 years of{" "}
        <Link
          href="#experience"
          className="hover:text-foreground transition-colors text-2xl"
        >
          <Highlighter
            action="underline"
            color="currentColor"
            strokeWidth={1}
            padding={-6}
          >
            experience
          </Highlighter>
        </Link>
        . Over the years, I&apos;ve built a variety of apps and games for both
        iOS and Android, and I&apos;ve also worked on several web applications.
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1 cursor-pointer"
        >
          {expanded ? "Read less" : "Read more"}
          <ChevronRight
            className={`w-4 h-4 transition-transform ${
              expanded ? "rotate-270" : " rotate-90"
            }`}
          />
        </button>
      </div>

      {expanded && (
        <div className="mt-2 space-y-4 text-2xl text-foreground/80 animate-in fade-in slide-in-from-top-2 duration-300">
          <p>
            In addition to my professional work, I also have a passion for
            open-source projects. I&apos;ve authored and contributed to a number
            of them, and I&apos;m always excited to collaborate with other
            developers. I love open-source, learning in public, and sharing what
            I learn with others.
          </p>

          <p>
            When I&apos;m not working on code, I like to stay active by
            swimming, cycling, and hitting the gym. I also enjoy spending time
            outdoors, whether that&apos;s hiking through nature trails or
            relaxing in a nearby park. And, of course, I have some favorite
            hobbies that I enjoy indoors, such as reading books, watching
            movies/series and playing FIFA.
          </p>

          <p>
            Last but not least, huge dog and cat lover and I adore spending time
            with my family. Whether that&apos;s going out to a dog park or just
            hanging out with my loved ones, it&apos;s always the highlight of my
            day.
          </p>
        </div>
      )}
    </section>
  );
}
