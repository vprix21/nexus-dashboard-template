import React from "react";
import type { NavIconKey } from "@/nexus.config";

/**
 * Lightweight inline SVG icon set used across the Nexus dashboard chrome.
 * Stroke-based, inherits `currentColor`, sized via the `className` prop.
 */

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

const base = (
  className = "w-5 h-5",
  strokeWidth = 1.8,
): React.SVGProps<SVGSVGElement> => ({
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export const GridIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

export const ChartIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M3 3v18h18" />
    <rect x="7" y="11" width="3" height="6" />
    <rect x="12" y="7" width="3" height="10" />
    <rect x="17" y="13" width="3" height="4" />
  </svg>
);

export const UsersIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const SettingsIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const BellIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const SearchIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const MenuIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const LogoutIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export const BoltIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const GlobeIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const WalletIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
  </svg>
);

export const PulseIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export const XIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const PlusIcon = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const ArrowUpRight = ({ className, strokeWidth }: IconProps) => (
  <svg {...base(className, strokeWidth)}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/** Resolve a nav icon key to its component. */
export function NavIcon({
  name,
  className,
}: {
  name: NavIconKey;
  className?: string;
}) {
  switch (name) {
    case "grid":
      return <GridIcon className={className} />;
    case "chart":
      return <ChartIcon className={className} />;
    case "users":
      return <UsersIcon className={className} />;
    case "settings":
      return <SettingsIcon className={className} />;
    case "bell":
      return <BellIcon className={className} />;
    case "search":
      return <SearchIcon className={className} />;
    case "menu":
      return <MenuIcon className={className} />;
    case "logout":
      return <LogoutIcon className={className} />;
    case "bolt":
      return <BoltIcon className={className} />;
    case "globe":
      return <GlobeIcon className={className} />;
    case "wallet":
      return <WalletIcon className={className} />;
    case "pulse":
      return <PulseIcon className={className} />;
    default:
      return <GridIcon className={className} />;
  }
}
