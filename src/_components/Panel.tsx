import React from "react";
import { ACCENTS, type AccentKey } from "@/nexus.config";

/**
 * Panel — the reusable corner-cut container that frames every chart, table,
 * and content block in the dashboard. Keeps the cyber aesthetic consistent
 * and is the single place to tune panel chrome.
 */
export function Panel({
  children,
  title,
  subtitle,
  accent = "cyan",
  action,
  className = "",
  bodyClassName = "",
  noPadding = false,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  accent?: AccentKey;
  action?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  noPadding?: boolean;
}) {
  return (
    <div
      className={`relative bg-[#080809]/90 ${className}`}
      style={{
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {(title || action) && (
        <div className="flex items-start justify-between gap-4 px-5 pt-4 pb-3">
          <div>
            {title && (
              <h3 className="font-orbitron text-sm font-semibold tracking-wide text-white">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-0.5 text-xs text-white/45">{subtitle}</p>
            )}
          </div>
          {action}
        </div>
      )}
      <div className={noPadding ? bodyClassName : `px-5 pb-5 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}

/** Section label with a small accent tick — used to break up long pages. */
export function SectionLabel({
  children,
  accent = "cyan",
}: {
  children: React.ReactNode;
  accent?: AccentKey;
}) {
  const hex = ACCENTS[accent];
  return (
    <div className="mb-4 flex items-center gap-2">
      <span
        className="h-3 w-px"
        style={{ background: hex, boxShadow: `0 0 6px ${hex}` }}
      />
      <span className="font-orbitron text-[11px] uppercase tracking-[0.2em] text-white/50">
        {children}
      </span>
    </div>
  );
}
