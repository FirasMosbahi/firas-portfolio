"use client";

import LineCard from "@portfolio/components/LineCard";
import useCustomNavigation from "@portfolio/hooks/useCustomNavigation";

export default function ExperiencePage() {
  useCustomNavigation("/education", "/projects");
  return (
    <main className="flex lg:flex-row flex-col lg:items-start items-center justify-between">
      <div className="flex flex-col lg:text-start text-center max-w-[400px] gap-6 mt-12">
        <p className="text-[#374151] text-[36px] font-[700]">
          Professional Experiences
        </p>
        <p className="text-[#6B7280] text-[16px] font-[500]">
          Building on my educational foundation, I have gained valuable hands-on
          experience through various professional roles. Explore the experiences
          that shaped my professional journey
        </p>
      </div>
      <div className="flex flex-col mt-24 items-end justify-between gap-12">
        <LineCard
          number="01"
          title="Back-end developer"
          subtitle="Company : Lovester (2023 - 2024)"
          content="As a backend developer i have been focused on building strong , secure and highly performant APIs guaranteeing secure communications between micro-services , databases and client application."
        />
        <LineCard
          number="02"
          title="Full stack developer"
          subtitle="Company : Nexaminds"
          content="As a full-stack developer, I have successfully designed and implemented end-to-end solutions for web applications from n building a secure and highly available server side application to building a modern and responsive client side applications."
        />
      </div>
    </main>
  );
}
