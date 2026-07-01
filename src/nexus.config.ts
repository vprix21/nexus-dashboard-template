/**
 * Nexus Dashboard — central configuration
 * --------------------------------------------------------------------------
 * Edit this single file to re-brand the entire template:
 *   • brand name + tagline
 *   • the neon accent palette used across every page
 *   • the sidebar navigation structure
 *
 * Everything else (pages, charts, cards) reads from here, so the dashboard
 * stays consistent and is trivial to customise.
 */

export type AccentKey = "cyan" | "pink" | "green" | "orange" | "purple" | "red";

/** Resolved hex values for each accent key. */
export const ACCENTS: Record<AccentKey, string> = {
  cyan: "#00f3ff",
  pink: "#ff00ff",
  green: "#39ff14",
  orange: "#ff8a00",
  purple: "#a855f7",
  red: "#ff0000",
};

/** Primary accent used for the chrome (sidebar active state, focus rings). */
export const PRIMARY: AccentKey = "cyan";
/** Secondary accents sprinkled across KPIs and charts. */
export const SECONDARY: AccentKey = "pink";
export const TERTIARY: AccentKey = "green";

export const BRAND = {
  name: "NEXUS",
  tagline: "Analytics Console",
  version: "v2.4.0",
};

export type NavItem = {
  /** Route segment (empty string = index/overview). */
  segment: string;
  label: string;
  /** Icon key — see _components/icons.tsx */
  icon: NavIconKey;
  /** Optional badge text (e.g. notification count). */
  badge?: string;
};

export type NavIconKey =
  | "grid"
  | "chart"
  | "users"
  | "settings"
  | "bell"
  | "search"
  | "menu"
  | "logout"
  | "bolt"
  | "globe"
  | "wallet"
  | "pulse";

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const NAV: NavSection[] = [
  {
    title: "Workspace",
    items: [
      { segment: "", label: "Overview", icon: "grid" },
      { segment: "analytics", label: "Analytics", icon: "chart" },
      { segment: "users", label: "Users", icon: "users", badge: "12" },
    ],
  },
  {
    title: "Account",
    items: [{ segment: "settings", label: "Settings", icon: "settings" }],
  },
];

/** Base path for the dashboard — "/" for standalone app. */
export const BASE_PATH = "";
