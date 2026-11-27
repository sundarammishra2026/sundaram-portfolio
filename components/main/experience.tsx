import { CERTIFICATIONS, EDUCATION, EXPERIENCE, INTERESTS } from "@/constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative z-20 mx-auto max-w-7xl px-5 py-20 sm:px-8"
    >
      <div className="mb-12 text-center">
        <p className="Welcome-box mx-auto mb-4 rounded-full border border-purple-400/40 bg-[#030014]/70 px-4 py-2 text-xs font-mono text-cyan-200">
          CAREER & EDUCATION
        </p>
        <h2 className="animate-gradient-text text-4xl font-black sm:text-5xl">
          Experience & Education
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-purple-500/30 bg-[#08051b]/85 p-6 sm:p-8">
          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-cyan-200">
            {EXPERIENCE.period}
          </p>
          <h3 className="text-2xl font-black text-white">{EXPERIENCE.role}</h3>
          <p className="mt-1 text-lg font-semibold text-purple-200">
            {EXPERIENCE.company}
          </p>
          <ul className="mt-6 space-y-3">
            {EXPERIENCE.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-6 text-gray-200"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                {highlight}
              </li>
            ))}
          </ul>
        </article>

        <div className="space-y-4">
          {EDUCATION.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-purple-500/25 bg-[#08051b]/85 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-bold text-white">{item.degree}</h3>
                <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs font-mono text-cyan-100">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-300">{item.institution}</p>
              {item.detail && (
                <p className="mt-1 text-xs text-purple-200">{item.detail}</p>
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl border border-purple-500/25 bg-[#08051b]/85 p-6">
          <h3 className="text-lg font-bold text-white">Certification</h3>
          <p className="mt-3 text-sm text-gray-300">
            {CERTIFICATIONS.join(" · ")}
          </p>
        </article>
        <article className="rounded-2xl border border-purple-500/25 bg-[#08051b]/85 p-6">
          <h3 className="text-lg font-bold text-white">Interests</h3>
          <p className="mt-3 text-sm text-gray-300">
            {INTERESTS.join(" · ")}
          </p>
        </article>
      </div>
    </section>
  );
};
