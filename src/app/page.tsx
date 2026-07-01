"use client";

import React from "react";
import { StatCard } from "@/components/neonblade-ui/stat-card";
import { NeonLineChart } from "@/components/neonblade-ui/neon-line-chart";
import { NeonDonutChart } from "@/components/neonblade-ui/neon-donut-chart";
import { NeonBarChart } from "@/components/neonblade-ui/neon-bar-chart";
import { NeonTable } from "@/components/neonblade-ui/neon-table";
import { CircularProgress } from "@/components/neonblade-ui/circular-progress";
import { ProgressBar } from "@/components/neonblade-ui/progress-bar";
import Timeline from "@/components/neonblade-ui/timeline";
import { Badge } from "@/components/neonblade-ui/badge";
import CornerCutButton from "@/components/neonblade-ui/corner-cut-button";
import { Panel, SectionLabel } from "@/_components/Panel";
import { ACCENTS } from "@/nexus.config";
import {
  ACTIVITY,
  GOALS,
  KPIS,
  REVENUE_SERIES,
  SALES_BY_CHANNEL,
  SYSTEM,
  TRAFFIC_SOURCES,
  USERS,
  type UserRow,
} from "@/_components/data";
import { ArrowUpRight } from "@/_components/icons";

const statusBadge = (s: UserRow["status"]) => {
  const map = {
    active: { color: "green", label: "Active" },
    trial: { color: "cyan", label: "Trial" },
    inactive: { color: "pink", label: "Inactive" },
  } as const;
  const cfg = map[s];
  return (
    <Badge color={cfg.color} variant="ghost" size="xs" dot="solid">
      {cfg.label}
    </Badge>
  );
};

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      {/* KPI ROW */}
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {KPIS.map((kpi) => (
            <StatCard
              key={kpi.label}
              value={kpi.value}
              label={kpi.label}
              change={kpi.change}
              changeLabel={kpi.changeLabel}
              trend={kpi.trend}
              color={ACCENTS[kpi.color]}
              sparkData={kpi.sparkData}
              glowIntensity="low"
              className="h-full"
            />
          ))}
        </div>
      </section>

      {/* REVENUE + TRAFFIC */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel
          title="Revenue Overview"
          subtitle="Monthly recurring revenue ($K) · this year vs last"
          className="lg:col-span-2"
          accent="cyan"
          action={
            <div className="flex items-center gap-1.5">
              <Badge color="cyan" variant="ghost" size="xs">
                This year
              </Badge>
              <Badge color="pink" variant="ghost" size="xs">
                Last year
              </Badge>
            </div>
          }
        >
          <NeonLineChart
            data={REVENUE_SERIES}
            xAxisKey="name"
            height={300}
            area
            grid
            curve="monotone"
            glowIntensity="medium"
            series={[
              { dataKey: "current", label: "This year", color: ACCENTS.cyan },
              { dataKey: "previous", label: "Last year", color: ACCENTS.pink },
            ]}
          />
        </Panel>

        <Panel
          title="Traffic Sources"
          subtitle="Sessions by channel"
          accent="pink"
        >
          <NeonDonutChart
            data={TRAFFIC_SOURCES.map((d) => ({
              name: d.name,
              value: d.value,
              color: ACCENTS[d.color],
            }))}
            height={300}
            centerLabel
            legend
            glowIntensity="medium"
            color="pink"
          />
        </Panel>
      </section>

      {/* SALES + GOALS */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel
          title="Sales by Channel"
          subtitle="Desktop vs mobile conversions"
          className="lg:col-span-2"
          accent="green"
          action={
            <div className="flex items-center gap-1.5">
              <Badge color="cyan" variant="ghost" size="xs">
                Desktop
              </Badge>
              <Badge color="green" variant="ghost" size="xs">
                Mobile
              </Badge>
            </div>
          }
        >
          <NeonBarChart
            data={SALES_BY_CHANNEL}
            xAxisKey="name"
            height={300}
            grid
            radius={3}
            glowIntensity="medium"
            series={[
              { dataKey: "desktop", label: "Desktop", color: ACCENTS.cyan },
              { dataKey: "mobile", label: "Mobile", color: ACCENTS.green },
            ]}
          />
        </Panel>

        <Panel title="Goals" subtitle="Quarter to date" accent="orange">
          <div className="flex flex-col items-center gap-5">
            <CircularProgress
              value={GOALS[0]!.value}
              color={ACCENTS.cyan}
              size="lg"
              glowIntensity="medium"
            />
            <div className="w-full space-y-4">
              {GOALS.slice(1).map((g) => (
                <div key={g.label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-white/60">{g.label}</span>
                    <span
                      className="font-orbitron font-semibold"
                      style={{ color: ACCENTS[g.color] }}
                    >
                      {g.value}%
                    </span>
                  </div>
                  <ProgressBar
                    value={g.value}
                    color={ACCENTS[g.color]}
                    variant="striped"
                    size="sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </section>

      {/* RECENT SIGNUPS + ACTIVITY */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionLabel accent="cyan">Recent Signups</SectionLabel>
          <NeonTable<UserRow>
            data={USERS.slice(0, 6)}
            color="cyan"
            striped
            compact
            columns={[
              {
                key: "name",
                header: "User",
                render: (_v, row) => (
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-7 w-7 items-center justify-center font-orbitron text-[10px] font-bold text-black"
                      style={{
                        background: `linear-gradient(135deg, ${ACCENTS.cyan}, ${ACCENTS.pink})`,
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%)",
                      }}
                    >
                      {row.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <div className="leading-tight">
                      <div className="text-white">{row.name}</div>
                      <div className="text-[11px] text-white/40">
                        {row.email}
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                key: "plan",
                header: "Plan",
                render: (v) => (
                  <Badge color="cyan" variant="outline" size="xs">
                    {String(v)}
                  </Badge>
                ),
              },
              {
                key: "status",
                header: "Status",
                render: (_v, row) => statusBadge(row.status),
              },
              {
                key: "mrr",
                header: "MRR",
                align: "right",
                render: (v) => (
                  <span className="font-orbitron text-white/80">
                    ${Number(v).toLocaleString()}
                  </span>
                ),
              },
            ]}
          />
        </div>

        <div>
          <SectionLabel accent="pink">Live Activity</SectionLabel>
          <Panel accent="pink" className="py-6">
            <Timeline
              items={ACTIVITY}
              color="pink"
              variant="glow"
              dotStyle="diamond"
              dotAnim="ping"
            />
            {/* System mini-stats */}
            <div className="mt-5 space-y-3 border-t border-white/8 pt-4">
              {SYSTEM.map((s) => (
                <div key={s.label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-white/55">{s.label}</span>
                    <span
                      className="font-orbitron"
                      style={{ color: ACCENTS[s.color] }}
                    >
                      {s.value}%
                    </span>
                  </div>
                  <ProgressBar
                    value={s.value}
                    color={ACCENTS[s.color]}
                    variant="pulse"
                    size="xs"
                  />
                </div>
              ))}
            </div>
          </Panel>

          <div className="mt-4">
            <CornerCutButton
              color="cyan"
              variant="outline"
              size="sm"
              hoverEffect="shine"
              className="w-full"
            >
              <span className="inline-flex items-center justify-center gap-2">
                View full report
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </CornerCutButton>
          </div>
        </div>
      </section>
    </div>
  );
}
