import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-20 mx-auto max-w-7xl px-5 py-20 sm:px-8"
    >
      <div className="mb-12 text-center">
        <p className="Welcome-box mx-auto mb-4 rounded-full border border-purple-400/40 bg-[#030014]/70 px-4 py-2 text-xs font-mono text-cyan-200">
          SELECTED WORK
        </p>
        <h2 className="animate-gradient-text text-4xl font-black sm:text-5xl">
          Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
          Applications and project work described in my resume.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-[#08051b]/90 p-6 shadow-[0_16px_50px_-25px_rgba(112,66,248,0.8)] sm:p-8"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-950/40 text-cyan-200">
                  <CodeBracketIcon className="h-6 w-6" />
                </span>
                <span className="font-mono text-xs tracking-widest text-purple-200">
                  PROJECT 0{index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-purple-400/25 bg-purple-950/40 px-3 py-1.5 text-xs text-purple-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-gray-300">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
