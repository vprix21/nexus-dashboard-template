/**
 * Nexus Dashboard — mock dataset
 * --------------------------------------------------------------------------
 * All sample data lives here so pages stay declarative. Swap these arrays
 * for real API responses to wire the template into a live backend.
 */

// ── KPI cards ────────────────────────────────────────────────────────────────

const spark = (vals: number[]) => vals.map((value) => ({ value }));

export const KPIS = [
  {
    label: "Total Revenue",
    value: "$284.6K",
    change: "+18.2%",
    trend: "up" as const,
    color: "cyan" as const,
    changeLabel: "vs last month",
    sparkData: spark([12, 18, 15, 22, 19, 26, 24, 30, 28, 35, 33, 42]),
  },
  {
    label: "Active Users",
    value: "18,420",
    change: "+9.4%",
    trend: "up" as const,
    color: "green" as const,
    changeLabel: "vs last month",
    sparkData: spark([30, 32, 31, 36, 34, 38, 40, 39, 44, 43, 48, 52]),
  },
  {
    label: "MRR",
    value: "$52.8K",
    change: "+4.1%",
    trend: "up" as const,
    color: "pink" as const,
    changeLabel: "vs last month",
    sparkData: spark([20, 22, 21, 24, 26, 25, 28, 27, 30, 32, 31, 34]),
  },
  {
    label: "Churn Rate",
    value: "2.4%",
    change: "-0.6%",
    trend: "down" as const,
    color: "orange" as const,
    changeLabel: "vs last month",
    sparkData: spark([8, 7, 7.5, 6.8, 6.5, 6, 5.4, 5.6, 5, 4.6, 4.2, 4]),
  },
];

// ── Revenue (multi-series line/area) — values in $ thousands ($K) ────────────

export const REVENUE_SERIES = [
  { name: "Jan", current: 42, previous: 31 },
  { name: "Feb", current: 48, previous: 35 },
  { name: "Mar", current: 45, previous: 39 },
  { name: "Apr", current: 58, previous: 41 },
  { name: "May", current: 63, previous: 47 },
  { name: "Jun", current: 71, previous: 52 },
  { name: "Jul", current: 68, previous: 55 },
  { name: "Aug", current: 82, previous: 58 },
  { name: "Sep", current: 91, previous: 63 },
  { name: "Oct", current: 88, previous: 67 },
  { name: "Nov", current: 104, previous: 71 },
  { name: "Dec", current: 118, previous: 78 },
];

// ── Traffic sources (donut) ──────────────────────────────────────────────────

export const TRAFFIC_SOURCES = [
  { name: "Organic", value: 4200, color: "cyan" as const },
  { name: "Direct", value: 3100, color: "pink" as const },
  { name: "Referral", value: 2400, color: "green" as const },
  { name: "Social", value: 1800, color: "orange" as const },
  { name: "Email", value: 1200, color: "purple" as const },
];

// ── Sales by channel (bar) — conversions (hundreds) ──────────────────────────

export const SALES_BY_CHANNEL = [
  { name: "Web", desktop: 440, mobile: 240 },
  { name: "iOS", desktop: 120, mobile: 520 },
  { name: "Android", desktop: 90, mobile: 480 },
  { name: "API", desktop: 320, mobile: 80 },
  { name: "Partner", desktop: 210, mobile: 160 },
];

// ── Plan distribution (bar, single series multicolor) ────────────────────────

export const PLAN_DISTRIBUTION = [
  { name: "Free", value: 9200 },
  { name: "Starter", value: 4100 },
  { name: "Pro", value: 3600 },
  { name: "Team", value: 1100 },
  { name: "Enterprise", value: 420 },
];

// ── Goal progress ────────────────────────────────────────────────────────────

export const GOALS = [
  { label: "Quarterly Revenue", value: 78, color: "cyan" as const },
  { label: "New Signups", value: 64, color: "green" as const },
  { label: "Support SLA", value: 92, color: "pink" as const },
  { label: "Uptime", value: 99, color: "orange" as const },
];

// ── Users table ──────────────────────────────────────────────────────────────

export type UserRow = {
  id: number;
  name: string;
  email: string;
  plan: "Free" | "Starter" | "Pro" | "Team" | "Enterprise";
  status: "active" | "trial" | "inactive";
  mrr: number;
  lastSeen: string;
  country: string;
};

export const USERS: UserRow[] = [
  {
    id: 1,
    name: "Aria Voss",
    email: "aria@nullsector.io",
    plan: "Enterprise",
    status: "active",
    mrr: 1290,
    lastSeen: "2m ago",
    country: "US",
  },
  {
    id: 2,
    name: "Kenji Mori",
    email: "kenji@gridrunner.jp",
    plan: "Pro",
    status: "active",
    mrr: 99,
    lastSeen: "11m ago",
    country: "JP",
  },
  {
    id: 3,
    name: "Lena Reyes",
    email: "lena@flux.dev",
    plan: "Team",
    status: "trial",
    mrr: 0,
    lastSeen: "1h ago",
    country: "ES",
  },
  {
    id: 4,
    name: "Dmitri Kovac",
    email: "dmitri@neon.net",
    plan: "Starter",
    status: "active",
    mrr: 29,
    lastSeen: "3h ago",
    country: "RS",
  },
  {
    id: 5,
    name: "Priya Nair",
    email: "priya@cipher.in",
    plan: "Pro",
    status: "active",
    mrr: 99,
    lastSeen: "5h ago",
    country: "IN",
  },
  {
    id: 6,
    name: "Marco Bianchi",
    email: "marco@vapor.it",
    plan: "Free",
    status: "inactive",
    mrr: 0,
    lastSeen: "2d ago",
    country: "IT",
  },
  {
    id: 7,
    name: "Sofia Lindqvist",
    email: "sofia@arc.se",
    plan: "Enterprise",
    status: "active",
    mrr: 1290,
    lastSeen: "6h ago",
    country: "SE",
  },
  {
    id: 8,
    name: "Tobias Frank",
    email: "tobias@hexed.de",
    plan: "Team",
    status: "active",
    mrr: 249,
    lastSeen: "20m ago",
    country: "DE",
  },
  {
    id: 9,
    name: "Yara Haddad",
    email: "yara@mirage.ae",
    plan: "Starter",
    status: "trial",
    mrr: 0,
    lastSeen: "45m ago",
    country: "AE",
  },
  {
    id: 10,
    name: "Owen Clarke",
    email: "owen@circuit.uk",
    plan: "Pro",
    status: "active",
    mrr: 99,
    lastSeen: "1d ago",
    country: "UK",
  },
  {
    id: 11,
    name: "Nadia Petrova",
    email: "nadia@volt.bg",
    plan: "Free",
    status: "inactive",
    mrr: 0,
    lastSeen: "5d ago",
    country: "BG",
  },
  {
    id: 12,
    name: "Hugo Martins",
    email: "hugo@pulse.pt",
    plan: "Team",
    status: "active",
    mrr: 249,
    lastSeen: "33m ago",
    country: "PT",
  },
  {
    id: 13,
    name: "Mei Chen",
    email: "mei@datastream.cn",
    plan: "Enterprise",
    status: "active",
    mrr: 1290,
    lastSeen: "9m ago",
    country: "CN",
  },
  {
    id: 14,
    name: "Ravi Kapoor",
    email: "ravi@synth.in",
    plan: "Starter",
    status: "active",
    mrr: 29,
    lastSeen: "4h ago",
    country: "IN",
  },
  {
    id: 15,
    name: "Eva Novak",
    email: "eva@glow.cz",
    plan: "Pro",
    status: "trial",
    mrr: 0,
    lastSeen: "2h ago",
    country: "CZ",
  },
  {
    id: 16,
    name: "Liam O'Brien",
    email: "liam@beacon.ie",
    plan: "Free",
    status: "active",
    mrr: 0,
    lastSeen: "7h ago",
    country: "IE",
  },
];

// ── Activity feed (timeline) ─────────────────────────────────────────────────

export const ACTIVITY = [
  {
    date: "09:42",
    title: "New Enterprise signup",
    description: "Aria Voss upgraded to the Enterprise plan.",
    badge: "Revenue",
    active: true,
  },
  {
    date: "08:15",
    title: "Webhook deployed",
    description: "Production billing webhook v3 went live.",
    badge: "System",
  },
  {
    date: "Yesterday",
    title: "Churn alert resolved",
    description: "At-risk account re-engaged after outreach.",
    badge: "Success",
  },
  {
    date: "2d ago",
    title: "API rate spike",
    description: "Traffic peaked at 2.4k req/s — auto-scaled.",
    badge: "Infra",
  },
];

// ── Live system stats ────────────────────────────────────────────────────────

export const SYSTEM = [
  { label: "CPU Load", value: 38, color: "cyan" as const },
  { label: "Memory", value: 61, color: "green" as const },
  { label: "Bandwidth", value: 47, color: "pink" as const },
];
