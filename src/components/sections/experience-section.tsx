"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Download } from "lucide-react";
import { ArrowUp02Icon, WorkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Highlighter } from "@/components/ui/highlighter";

interface Role {
  title: string;
  duration: string;
  period: string;
}

interface Experience {
  company: string;
  website: string;
  location: string;
  totalDuration: string;
  logo: string;
  roles: Role[];
}

const experiences: Experience[] = [
  {
    company: "Fetchly Labs",
    website: "https://fetch.ly",
    location: "Denver, Colorado",
    totalDuration: "1 year, 2 months",
    logo: "/logos/fetchly.jpeg",
    roles: [
      {
        title: "Software Architect",
        duration: "7 months",
        period: "Jun 2025 — Present",
      },
      {
        title: "Senior Software Engineer",
        duration: "8 months",
        period: "Nov 2024 — Jun 2025",
      },
    ],
  },
  {
    company: "tem mimo",
    website: "https://temmimo.com",
    location: "Curitiba, Paraná",
    totalDuration: "1 year, 8 months",
    logo: "/logos/mimo_logo.png",
    roles: [
      {
        title: "Founder & Principal Software Engineer",
        duration: "1 year, 8 months",
        period: "May 2024 — Present",
      },
    ],
  },
  {
    company: "ArcTouch",
    website: "https://arctouch.com",
    location: "San Francisco, California",
    totalDuration: "1 year, 4 months",
    logo: "/logos/arctouch.png",
    roles: [
      {
        title: "Senior Software Engineer",
        duration: "1 year, 4 months",
        period: "Aug 2023 — Nov 2024",
      },
    ],
  },
  {
    company: "Fetchly Labs",
    website: "https://fetch.ly",
    location: "Denver, Colorado",
    totalDuration: "2 years, 4 months",
    logo: "/logos/fetchly.jpeg",
    roles: [
      {
        title: "Software Engineer",
        duration: "2 years, 4 months",
        period: "Sep 2021 — Aug 2023",
      },
    ],
  },
  {
    company: "Null Bug",
    website: "https://nullbug.dev",
    location: "Francisco Beltrão, Paraná",
    totalDuration: "1 year, 3 months",
    logo: "/logos/nullbug.jpeg",
    roles: [
      {
        title: "Software Developer",
        duration: "1 year, 3 months",
        period: "Dec 2020 — Feb 2022",
      },
    ],
  },
  {
    company: "Rocket Software",
    website: "#",
    location: "Blumenau, Santa Catarina",
    totalDuration: "2 years, 4 months",
    logo: "/logos/R.png",
    roles: [
      {
        title: "Mobile Application Developer",
        duration: "2 years, 4 months",
        period: "Jun 2019 — Sep 2021",
      },
    ],
  },
  {
    company: "Protech Advance",
    website: "#",
    location: "Surulere, Lagos",
    totalDuration: "3 months",
    logo: "/logos/nck.jpeg",
    roles: [
      {
        title: "Web Development Intern",
        duration: "3 months",
        period: "Jul 2018 — Sep 2018",
      },
    ],
  },
];

export function ExperienceSection() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const visibleExperiences = showAllExperiences
    ? experiences
    : experiences.slice(0, 3);

  return (
    <section id="experience">
      <Card className="bg-transparent border-0 md:bg-foreground/5 md:border md:border-border">
        <CardHeader className="pb-4 px-0 md:px-6 flex flex-row justify-between gap-4">
          <CardTitle className="flex items-center gap-3 text-2xl font-medium text-foreground">
            <HugeiconsIcon
              icon={WorkIcon}
              className="w-5 h-5 text-foreground/60"
            />
            Work Experience
          </CardTitle>

          {useMemo(
            () => (
              <Highlighter
                action="underline"
                color="currentColor"
                strokeWidth={2}
              >
                <button className="text-foreground/80 hover:text-foreground text-xl flex items-center gap-2 cursor-pointer">
                  Download resumé
                  <Download className="w-4 h-4" />
                </button>
              </Highlighter>
            ),
            []
          )}
        </CardHeader>

        <CardContent className="space-y-6 px-0 md:px-6">
          {visibleExperiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-foreground/10 flex items-center justify-center overflow-hidden flex-shrink-0 mt-0.5">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={exp.website}
                        target="_blank"
                        className="text-foreground font-medium text-2xl cursor-pointer"
                      >
                        {exp.company}
                      </a>

                      <span className="text-foreground/80 text-xl whitespace-nowrap ml-auto">
                        {exp.totalDuration}
                      </span>
                    </div>

                    {exp.location && (
                      <p className="text-foreground/40 text-xl">
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Roles */}
                <div
                  className={`mt-2 ${
                    exp.roles.length > 1
                      ? "border-l-2 border-border pl-4 space-y-3"
                      : ""
                  }`}
                >
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex}>
                      {/* Show arrow between roles (before all roles except the first) */}
                      {exp.roles.length > 1 && roleIndex > 0 && (
                        <div className="flex items-center justify-start py-2 pb-4">
                          <HugeiconsIcon
                            icon={ArrowUp02Icon}
                            className="w-4 h-4 text-foreground/60"
                          />
                          <span className="text-foreground/60 text-xl">
                            promoted to
                          </span>
                        </div>
                      )}
                      <div className="relative">
                        <p className="text-foreground/80 text-2xl">
                          {role.title}
                        </p>
                        <p className="text-foreground/40 text-xl">
                          {exp.roles.length > 1
                            ? `${role.period} · ${role.duration}`
                            : role.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {!showAllExperiences && experiences.length > 3 && (
            <button
              onClick={() => setShowAllExperiences(true)}
              className="w-full py-2 text-foreground/60 hover:text-foreground transition-colors flex items-center justify-center gap-2 text-xl cursor-pointer"
            >
              See {experiences.length - 3} more
              <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          )}

          {showAllExperiences && (
            <button
              onClick={() => setShowAllExperiences(false)}
              className="w-full py-2 text-foreground/60 hover:text-foreground transition-colors flex items-center justify-center gap-2 text-xl cursor-pointer"
            >
              See less
              <ChevronRight className="w-5 h-5 -rotate-90" />
            </button>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
