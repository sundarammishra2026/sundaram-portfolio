"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NAV_LINKS, PROFILE } from "@/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-3 z-50 w-full px-3 sm:top-5 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-purple-500/40 bg-[#030014]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-6">
        <Link href="#about-me" className="min-w-0">
          <span className="block truncate text-sm font-black tracking-wide text-white sm:text-base">
            {PROFILE.name.toUpperCase()}
          </span>
          <span className="text-[10px] font-mono text-cyan-200 sm:text-xs">
            {PROFILE.role}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="rounded-full px-3 py-2 text-xs font-semibold text-gray-300 transition hover:bg-purple-900/40 hover:text-cyan-200"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="rounded-lg border border-purple-400/30 p-2 text-gray-200 transition hover:text-cyan-200"
          >
            <FaGithub />
          </Link>
          <Link
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="rounded-lg border border-purple-400/30 p-2 text-gray-200 transition hover:text-cyan-200"
          >
            <FaLinkedin />
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-purple-400/40 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {isOpen && (
          <div className="absolute left-3 right-3 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-purple-500/40 bg-[#030014]/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-gray-200 transition hover:bg-purple-900/40 hover:text-cyan-200"
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
