"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/neonblade-ui/badge";
import GlitchText from "@/components/neonblade-ui/glitch-text";
import { ACCENTS, BASE_PATH, BRAND, NAV, PRIMARY } from "@/nexus.config";
import { NavIcon, LogoutIcon, XIcon } from "./icons";

/**
 * Fixed left sidebar with grouped navigation, active-route highlighting and a
 * brand block. On mobile it slides in as an overlay controlled by `open`.
 */
export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const accent = ACCENTS[PRIMARY];

  const hrefFor = (segment: string) => (segment ? `/${segment}` : "/");

  const isActive = (segment: string) => {
    const href = hrefFor(segment);
    if (segment === "") return pathname === "/" || pathname === "";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed z-50 flex h-screen w-64 flex-col border-r border-white/8 bg-[#060607] transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center text-black"
              style={{
                background: accent,
                boxShadow: `0 0 14px ${accent}88`,
              }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.5 3.6L12 11.5 5.5 7.9 12 4.3ZM5 9.6l6 3.3v6.8l-6-3.3V9.6Zm14 0v6.8l-6 3.3v-6.8l6-3.3Z" />
              </svg>
            </span>
            <span className="leading-tight">
              <GlitchText
                className="font-orbitron text-base font-bold tracking-wider text-white"
                colorA="pink"
                colorB="cyan"
                mode="hover"
              >
                {BRAND.name}
              </GlitchText>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-white/40">
                {BRAND.tagline}
              </span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="text-white/50 transition-colors hover:text-white lg:hidden"
            aria-label="Close menu"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          {NAV.map((section) => (
            <div key={section.title} className="mb-6">
              <p className="px-3 pb-2 font-orbitron text-[10px] uppercase tracking-[0.2em] text-white/30">
                {section.title}
              </p>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const active = isActive(item.segment);
                  return (
                    <li key={item.label}>
                      <Link
                        href={hrefFor(item.segment)}
                        onClick={onClose}
                        className="group relative flex items-center gap-3 px-3 py-2.5 text-sm transition-colors"
                        style={{
                          clipPath: active
                            ? "polygon(0 0, 100% 0, 100% 70%, calc(100% - 10px) 100%, 0 100%)"
                            : undefined,
                          background: active
                            ? `linear-gradient(90deg, ${accent}1f, transparent)`
                            : undefined,
                          color: active ? "#fff" : undefined,
                        }}
                      >
                        {active && (
                          <span
                            className="absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2"
                            style={{
                              background: accent,
                              boxShadow: `0 0 8px ${accent}`,
                            }}
                          />
                        )}
                        <span
                          className={
                            active
                              ? ""
                              : "text-white/55 transition-colors group-hover:text-white"
                          }
                          style={active ? { color: accent } : undefined}
                        >
                          <NavIcon
                            name={item.icon}
                            className="h-[18px] w-[18px]"
                          />
                        </span>
                        <span
                          className={`flex-1 font-medium ${
                            active
                              ? ""
                              : "text-white/65 transition-colors group-hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                        {item.badge && (
                          <Badge
                            color={active ? "cyan" : "pink"}
                            variant="ghost"
                            size="xs"
                            shape="corner-cut"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer / user */}
        <div className="border-t border-white/8 p-3">
          <div className="flex items-center gap-3 px-2 py-2">
            <span
              className="flex h-9 w-9 items-center justify-center font-orbitron text-xs font-bold text-black"
              style={{
                background: `linear-gradient(135deg, ${ACCENTS.cyan}, ${ACCENTS.pink})`,
              }}
            >
              AV
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">
                Aria Voss
              </p>
              <p className="truncate text-[11px] text-white/40">
                Admin · {BRAND.version}
              </p>
            </div>
            <button
              className="text-white/40 transition-colors hover:text-[#ff00ff]"
              aria-label="Log out"
            >
              <LogoutIcon className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
