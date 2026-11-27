import { SKILL_GROUPS } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-20 mx-auto max-w-7xl px-5 py-20 sm:px-8"
    >
      <div className="mb-12 text-center">
        <p className="Welcome-box mx-auto mb-4 rounded-full border border-purple-400/40 bg-[#030014]/70 px-4 py-2 text-xs font-mono text-cyan-200">
          TECHNICAL TOOLKIT
        </p>
        <h2 className="animate-gradient-text text-4xl font-black sm:text-5xl">
          Skills & Technologies
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-purple-500/25 bg-[#08051b]/85 p-6 shadow-[0_12px_35px_-20px_rgba(112,66,248,0.8)] backdrop-blur"
          >
            <h3 className="mb-4 text-lg font-bold text-white">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-cyan-400/20 bg-cyan-950/35 px-3 py-1.5 text-xs text-cyan-100 sm:text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
