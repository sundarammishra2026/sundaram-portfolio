import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { PROFILE } from "@/constants";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-20 mx-auto max-w-5xl px-5 py-20 sm:px-8"
    >
      <div className="rounded-3xl border border-purple-500/30 bg-[#08051b]/90 p-7 text-center shadow-[0_16px_50px_-25px_rgba(112,66,248,0.8)] sm:p-12">
        <p className="Welcome-box mx-auto mb-4 rounded-full border border-purple-400/40 bg-[#030014]/70 px-4 py-2 text-xs font-mono text-cyan-200">
          CONTACT
        </p>
        <h2 className="animate-gradient-text text-4xl font-black sm:text-5xl">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
          Reach out by email or phone, or connect with me on GitHub and LinkedIn.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-gray-200 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-purple-400/30 bg-purple-950/30 px-4 py-3 transition hover:border-cyan-300/60 hover:text-cyan-100"
          >
            <FaEnvelope className="text-cyan-200" />
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.phoneLink}
            className="inline-flex items-center gap-2 rounded-xl border border-purple-400/30 bg-purple-950/30 px-4 py-3 transition hover:border-cyan-300/60 hover:text-cyan-100"
          >
            <FaPhone className="text-cyan-200" />
            {PROFILE.phone}
          </a>
          <span className="inline-flex items-center gap-2 rounded-xl border border-purple-400/30 bg-purple-950/30 px-4 py-3">
            <FaMapMarkerAlt className="text-cyan-200" />
            {PROFILE.location}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-5 py-3 text-sm font-bold text-white transition hover:scale-105"
          >
            <FaGithub />
            GitHub
          </Link>
          <Link
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-950/40"
          >
            <FaLinkedin />
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
};
