import { Dev } from "@portfolio/components/icons";

type ProjectCardProps = {
  name: string;
  githubLink: string;
  technologies: string;
  description: string;
};

export default function ProjectCard({
  name,
  technologies,
  githubLink,
  description,
}: ProjectCardProps) {
  return (
    <a
      href={githubLink}
      target="_blank"
      className="flex flex-col px-8 py-4 border max-w-[480px] border-transparent border-solid rounded-[8px] bg-white"
    >
      <div>
        <Dev className="size-[52px]" />
        <p className="text-[#374151] mt-4 text-[24px]">{name}</p>
        <p className="text-black text-[14px] py-4">{description}</p>
        <p className="text-[#374151]">Used Technologies: {technologies}</p>
      </div>
    </a>
  );
}
