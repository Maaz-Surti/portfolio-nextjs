"use client";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {project.name}
        </h1>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 font-bold py-3 px-4 whitespace-nowrap rounded-md hover:bg-pink-200 transition"
        >
          View Project
        </a>
      </header>
      {/* content goes here */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt="image"
        width={500}
        height={500}
        className="mt-10 border-gray-700 border-2 rounded-xl object-cover"
      />
    </div>
  );
}
