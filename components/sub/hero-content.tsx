"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PROFILE } from "@/constants";

export const HeroContent = () => {
  return (
    <section
      id="about-me"
      className="relative z-20 mx-auto mt-32 flex w-full max-w-7xl flex-col items-center gap-12 px-5 pb-12 sm:mt-40 sm:px-10 lg:mt-44 lg:flex-row lg:justify-between lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <p className="Welcome-box mb-5 rounded-full border border-purple-400/40 bg-[#030014]/80 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200 sm:text-sm">
          .NET CORE DEVELOPER · NOIDA, INDIA
        </p>
        <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="animate-gradient-text animate-text-glow">
            {PROFILE.name}
          </span>
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-cyan-200 sm:text-3xl">
          {PROFILE.role}
        </h2>
        <p className="mt-6 max-w-xl rounded-2xl border border-purple-500/20 bg-[#030014]/75 p-4 text-base leading-7 text-gray-200 backdrop-blur-md sm:p-0 sm:text-lg sm:border-0 sm:bg-transparent">
          {PROFILE.summary}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 text-sm font-bold text-white transition hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="/Sundaram-Mishra-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-cyan-300/50 bg-[#030014]/70 px-6 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
          >
            View Resume
          </a>
          <div className="flex items-center gap-2">
            <Link
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="rounded-xl border border-purple-400/30 bg-[#030014]/80 p-3 text-gray-200 transition hover:text-cyan-200"
            >
              <FaGithub />
            </Link>
            <Link
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="rounded-xl border border-purple-400/30 bg-[#030014]/80 p-3 text-gray-200 transition hover:text-cyan-200"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={`mailto:${PROFILE.email}`}
              aria-label="Email Sundaram"
              className="rounded-xl border border-purple-400/30 bg-[#030014]/80 p-3 text-gray-200 transition hover:text-cyan-200"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-xs font-mono text-gray-200 sm:text-sm">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-2">
            1 year of .NET experience
          </span>
          <span className="rounded-full border border-purple-400/30 bg-purple-950/40 px-4 py-2">
            15+ REST API endpoints
          </span>
          <span className="rounded-full border border-pink-400/30 bg-pink-950/40 px-4 py-2">
            B.Tech CSE · 2025
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative w-full max-w-sm"
      >
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-purple-600/30 via-cyan-500/20 to-pink-500/30 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-purple-400/40 bg-[#030014]/90 p-3 shadow-[0_0_50px_rgba(112,66,248,0.3)]">
          <Image
            src="/sundaram.jpg"
            alt="Handwritten name image supplied by Sundaram Mishra"
            width={768}
            height={1024}
            priority
            className="h-[390px] w-full rounded-2xl object-cover sm:h-[440px]"
          />
          <p className="px-2 pb-1 pt-3 text-center text-xs font-mono text-gray-400">
            Sundaram Mishra
          </p>
        </div>
      </motion.div>
    </section>
  );
};
