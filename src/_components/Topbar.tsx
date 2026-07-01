"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/neonblade-ui/badge";
import { NAV } from "@/nexus.config";
import { MenuIcon, SearchIcon, BellIcon } from "./icons";

/** Resolve the current page title from the nav config + pathname. */
function usePageTitle() {
  const pathname = usePathname();
  const all = NAV.flatMap((s) => s.items);
  const match = all.find((item) => {
    const href = item.segment ? `/${item.segment}` : "/";
    if (item.segment === "") return pathname === "/" || pathname === "";
    return pathname === href || pathname.startsWith(`${href}/`);
  });
  return match?.label ?? "Overview";
}

/**
 * Sticky top bar: mobile menu toggle, page title + breadcrumb, global search,
 * notifications and live-status pill.
 */
export function Topbar({ onMenu }: { onMenu: () => void }) {
  const title = usePageTitle();

  return (
    <header className="sticky top-0 z-30 flex h-fit py-3.5 items-center gap-3 border-b border-white/8 bg-[#060607]/85 px-4 backdrop-blur-md sm:px-6">
      <button
        onClick={onMenu}
        className="text-white/60 transition-colors hover:text-white lg:hidden"
        aria-label="Open menu"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      <div className="min-w-0">
        <h1 className="truncate font-orbitron text-base font-semibold tracking-wide text-white">
          {title}
        </h1>
        <p className="hidden text-[11px] text-white/35 sm:block">
          Nexus / {title}
        </p>
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/35">
            <SearchIcon className="h-4 w-4" />
          </span>
          <input
            type="text"
            placeholder="Search…"
            className="h-9 w-44 border border-white/10 bg-white/[0.03] pl-9 pr-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-[#00f3ff]/60 focus:outline-none lg:w-56"
          />
        </div>

        {/* Notifications */}
        <button
          className="relative flex h-9 w-9 items-center justify-center border border-white/10 text-white/60 transition-colors hover:border-white/25 hover:text-white"
          aria-label="Notifications"
        >
          <BellIcon className="h-[18px] w-[18px]" />
          <span
            className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full"
            style={{ background: "#ff00ff", boxShadow: "0 0 6px #ff00ff" }}
          />
        </button>

        {/* Avatar */}
        <span
          className="flex h-9 w-9 items-center justify-center font-orbitron text-xs font-bold text-black"
          style={{
            background: "linear-gradient(135deg, #00f3ff, #ff00ff)",
          }}
        >
          AV
        </span>
      </div>
    </header>
  );
}
