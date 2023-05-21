import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold ">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Maaz
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-500">
        Hello everyone! Check out my projects below!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                className={
                  "object-cover rounded-lg border border-gray-500"
                }
                src={project.image}
                alt={project.name}
                width={250}
                height={300}
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent py-1">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
