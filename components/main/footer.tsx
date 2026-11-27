import Link from "next/link";
import { PROFILE } from "@/constants";

export const Footer = () => {
  return (
    <footer className="relative z-30 w-full border-t border-purple-500/20 bg-[#030014]/90 px-5 py-6 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs sm:flex-row sm:text-left">
        <span>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">{PROFILE.name}</span>
        </span>
        <span>{PROFILE.role} · {PROFILE.location}</span>
        <Link
          href={`mailto:${PROFILE.email}`}
          className="transition hover:text-cyan-200"
        >
          {PROFILE.email}
        </Link>
      </div>
    </footer>
  );
};
