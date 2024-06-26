"use client";

import LineCard from "@portfolio/components/LineCard";
import useCustomNavigation from "@portfolio/hooks/useCustomNavigation";

export default function EducationPage() {
  useCustomNavigation("/", "/experience");
  return (
    <main className="flex lg:flex-row flex-col h-full lg:items-start items-center justify-between">
      <div className="flex flex-col lg:max-w-[400px] xl:text-center xl:gap-6 gap-4 lg:mt-12 mt-4 lg:mb-0 mb-12">
        <p className="text-[#374151] lg:text-start text-center xl:text-[36px] text-[28px] font-[700]">
          Academic journey
        </p>
        <p className="text-[#6B7280] xl:text-[16px] text-[14px] lg:text-start text-center font-[500]">
          Investing in education is key to my professional growth. This section
          highlights my academic achievements and how they contribute to my
          qualifications.
        </p>
      </div>
      <div className="flex flex-col items-end justify-between gap-6">
        <LineCard
          number="01"
          title="Baccalaureate in Mathematics"
          subtitle="Institute : Tunisian Secondary school"
          content="My academic journey began with a strong foundation in mathematics. My Baccalaureate in Mathematics improved my analytical and problem-solving skills and provided to me a deep understanding of core mathematical concepts."
        />
        <LineCard
          number="02"
          title="Computer sciences preparatory cycle"
          subtitle="Institute : National Institute of Applied Sciences and Technologies"
          content="Following my Baccalaureate, I embarked on a preparatory cycle of mathematics, physics, and informatics. This intensive program allowed me to go deeper into these scientific disciplines and introduced me to the fundamentals of physics and computer science."
        />
        <LineCard
          number="03"
          title="Software Engineering Courses"
          subtitle="Institute : National Institute of Applied Sciences and Technologies"
          content="Building on the theoretical knowledge gained during my preparatory cycle, I pursued coursework in software engineering.  These courses equipped me with the practical skills necessary to design, develop, and implement software solutions."
        />
      </div>
    </main>
  );
}
