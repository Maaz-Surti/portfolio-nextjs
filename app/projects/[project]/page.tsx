import { getProject } from "@/sanity/sanity-utils";
type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-3xl py-20 mx-auto">
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {project.name}
        </h1>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-gray-100 font-bold py-3 px-4 whitespace-nowrap rounded-sm hover:bg-pink-500 transition">
          View Project
        </a>
      </header>
    </div>
  );
}
