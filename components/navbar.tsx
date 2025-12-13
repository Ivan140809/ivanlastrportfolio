"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = { href: string; label: string };

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/labs", label: "Labs" },
    { href: "/skills", label: "Skills" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") 
        setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-white/150 bg-black/60 backdrop-blur">
        <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="font-semibold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Iván Santiago Lastra
                </span>
            <span className="text-blue-400">.dev</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={[
                  "rounded-xl px-3 py-2 text-sm transition",
                  isActive(it.href)
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {it.label}
              </Link>
            ))}
            <a
              className="ml-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>

          
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v: boolean) => !v)}
            className="md:hidden rounded-xl border border-white/15 px-3 py-2 text-sm text-white/80 hover:bg-white/5"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>

        
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-2">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className={[
                    "rounded-xl px-3 py-3 text-sm transition",
                    isActive(it.href)
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  {it.label}
                </Link>
              ))}
              <a
                className="rounded-xl bg-white text-black px-4 py-3 text-sm font-semibold hover:opacity-90"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
