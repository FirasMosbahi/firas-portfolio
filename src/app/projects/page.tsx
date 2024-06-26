"use client";

import ProjectCard from "@portfolio/components/ProjectCard";
import useCustomNavigation from "@portfolio/hooks/useCustomNavigation";

export default function ProjectsPage() {
  useCustomNavigation("/experience", "/");
  return (
    <main className="flex lg:flex-row mx-auto flex-col h-full lg:items-start items-center justify-between">
      <div className="flex flex-col lg:text-start text-center max-w-[400px] gap-6 mt-12">
        <p className="text-[#374151] text-[36px] font-[700]">Projects</p>
        <p className="text-[#6B7280] text-[16px] font-[500]">
          Here, you will find a selection of my creations that showcase my
          skills and experience in software development. Feel free to explore
          them and see what I am capable of!
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-4 mt-12">
        <ProjectCard
          name="Store Api"
          githubLink="https://github.com/FirasMosbahi/store-api"
          technologies="Node.js , Express.js , Mongodb"
          description="This project consists of a server side application that provides APIs to be consumed by a e-commerce application."
        />
        <ProjectCard
          name="Auction App"
          githubLink="https://github.com/FirasMosbahi/auction-app"
          technologies="Node.js , Nest.js , Redis , Mongodb"
          description="This project consists of a server side application with three microservices (authentification , bid , items) that provides APIs to be consumed by an auction app."
        />
        <ProjectCard
          name="Nexaster"
          githubLink="https://github.com/FirasMosbahi/nexaster-frontend"
          technologies="Node.js , Next.js"
          description="This project consists of a web application for online medical visits. It allows doctors to schedule the visits and to see the medical documents associated for each patient and allows patients to request for a visit"
        />
        <ProjectCard
          name="PFA"
          githubLink="https://github.com/FirasMosbahi/nexaster-frontend"
          technologies="Golang , Python , NodeJs , Github actions , docker , k8s , helm"
          description="This project consists of a complete CI/CD pipeline for three microservices from integration to deployment"
        />
      </div>
    </main>
  );
}
