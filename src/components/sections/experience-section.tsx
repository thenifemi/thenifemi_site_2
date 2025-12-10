"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download } from "lucide-react";
import { WorkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface Role {
  title: string;
  duration: string;
  period: string;
}

interface Experience {
  company: string;
  location: string;
  totalDuration: string;
  logo: string;
  roles: Role[];
}

const experiences: Experience[] = [
  {
    company: "Fetchly Labs",
    location: "Denver, Colorado, United States",
    totalDuration: "1 yr 2 mos",
    logo: "/logos/fetchly.jpeg",
    roles: [
      {
        title: "Software Architect",
        duration: "7 mos",
        period: "Jun 2025 — Present",
      },
      {
        title: "Senior Software Engineer",
        duration: "8 mos",
        period: "Nov 2024 — Jun 2025",
      },
    ],
  },
  {
    company: "tem mimo",
    location: "",
    totalDuration: "1 yr 8 mos",
    logo: "/logos/mimo_logo.png",
    roles: [
      {
        title: "Founder & Principal Software Engineer",
        duration: "1 yr 8 mos",
        period: "May 2024 — Present",
      },
    ],
  },
  {
    company: "ArcTouch",
    location: "San Francisco, California, United States",
    totalDuration: "1 yr 4 mos",
    logo: "/logos/arctouch.png",
    roles: [
      {
        title: "Senior Software Engineer",
        duration: "1 yr 4 mos",
        period: "Aug 2023 — Nov 2024",
      },
    ],
  },
  {
    company: "Fetchly Labs",
    location: "Texas, United States",
    totalDuration: "2 yrs",
    logo: "/logos/fetchly.jpeg",
    roles: [
      {
        title: "Software Engineer",
        duration: "2 yrs",
        period: "Sep 2021 — Aug 2023",
      },
    ],
  },
  {
    company: "Null Bug",
    location: "Francisco Beltrão, Paraná, Brazil",
    totalDuration: "1 yr 3 mos",
    logo: "/logos/nullbug.jpeg",
    roles: [
      {
        title: "Software Developer",
        duration: "1 yr 3 mos",
        period: "Dec 2020 — Feb 2022",
      },
    ],
  },
  {
    company: "Rocket Software",
    location: "Blumenau, Santa Catarina, Brazil",
    totalDuration: "2 yrs 4 mos",
    logo: "/logos/R.png",
    roles: [
      {
        title: "Mobile Application Developer",
        duration: "2 yrs 4 mos",
        period: "Jun 2019 — Sep 2021",
      },
    ],
  },
  {
    company: "Protech Advance",
    location: "",
    totalDuration: "3 mos",
    logo: "/logos/nck.jpeg",
    roles: [
      {
        title: "Web Development Intern",
        duration: "3 mos",
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
    <section id="experience" className="mt-16">
      <Card className="bg-transparent border-0 md:bg-white/5 md:border md:border-white/10">
        <CardHeader className="pb-4 px-0 md:px-6 flex flex-row justify-between gap-4">
          <CardTitle className="flex items-center gap-3 text-xl font-medium text-white">
            <HugeiconsIcon icon={WorkIcon} className="w-5 h-5 text-white/60" />
            Work Experience
          </CardTitle>

          <Button
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-lg"
          >
            Download resumé
            <Download className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6 px-0 md:px-6">
          {visibleExperiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10  bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 mt-0.5">
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
                  <div>
                    <h3 className="text-white font-medium text-xl">{exp.company}</h3>
                    {exp.location && (
                      <p className="text-white/40 text-lg">{exp.location}</p>
                    )}
                  </div>
                  <span className="text-white/80 text-xl whitespace-nowrap">
                    {exp.totalDuration}
                  </span>
                </div>

                {/* Roles */}
                <div className={`mt-2 ${exp.roles.length > 1 ? "border-l-2 border-white/10 pl-4 space-y-3" : ""}`}>
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      <p className="text-white/80 text-xl">{role.title}</p>
                      <p className="text-white/40 text-lg">{role.period} · {role.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {!showAllExperiences && experiences.length > 3 && (
            <button
              onClick={() => setShowAllExperiences(true)}
              className="w-full py-3 text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2 text-lg cursor-pointer"
            >
              See {experiences.length - 3} more
              <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          )}

          {showAllExperiences && (
            <button
              onClick={() => setShowAllExperiences(false)}
              className="w-full py-3 text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2 text-lg cursor-pointer"
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
