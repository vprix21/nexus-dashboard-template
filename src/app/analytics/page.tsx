"use client";

import React, { useState } from "react";
import { NeonLineChart } from "@/components/neonblade-ui/neon-line-chart";
import { NeonBarChart } from "@/components/neonblade-ui/neon-bar-chart";
import { NeonDonutChart } from "@/components/neonblade-ui/neon-donut-chart";
import { NeonSparkline } from "@/components/neonblade-ui/neon-sparkline";
import { NeonSelect } from "@/components/neonblade-ui/neon-select";
import { NeonToggle } from "@/components/neonblade-ui/neon-toggle";
import { Badge } from "@/components/neonblade-ui/badge";
import { Panel, SectionLabel } from "@/_components/Panel";
import { ACCENTS } from "@/nexus.config";
import {
  PLAN_DISTRIBUTION,
  REVENUE_SERIES,
  SALES_BY_CHANNEL,
  TRAFFIC_SOURCES,
} from "@/_components/data";

const MINI_METRICS = [
  {
    label: "Page Views",
    value: "1.24M",
    color: "cyan" as const,
    data: [12, 18, 14, 22, 19, 28, 26, 34],
  },
  {
    label: "Sessions",
    value: "486K",
    color: "green" as const,
    data: [20, 22, 26, 24, 30, 28, 33, 38],
  },
  {
    label: "Bounce Rate",
    value: "32.1%",
    color: "pink" as const,
    data: [40, 38, 36, 34, 33, 31, 32, 30],
  },
  {
    label: "Avg. Duration",
    value: "4m 12s",
    color: "orange" as const,
    data: [10, 14, 12, 18, 16, 20, 22, 21],
  },
];

export default function AnalyticsPage() {
  const [range, setRange] = useState("30d");
  const [compare, setCompare] = useState(true);

  return (
    <div className="space-y-8">
      {/* Toolbar */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-orbitron text-lg font-semibold text-white">
            Performance Analytics
          </h2>
          <p className="text-sm text-white/45">
            Deep-dive into acquisition, engagement and revenue trends.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <NeonToggle
            label="Compare period"
            color="pink"
            size="sm"
            checked={compare}
            onChange={setCompare}
          />
          <NeonSelect
            color="cyan"
            size="sm"
            variant="corner-cut"
            value={range}
            onChange={setRange}
            ariaLabel="Date range"
            options={[
              { value: "7d", label: "Last 7 days" },
              { value: "30d", label: "Last 30 days" },
              { value: "90d", label: "Last quarter" },
              { value: "12m", label: "Last 12 months" },
            ]}
          />
        </div>
      </div>

      {/* Mini metric strip */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {MINI_METRICS.map((m) => (
          <Panel key={m.label} accent={m.color}>
            <div className="flex items-end justify-between gap-3 pt-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/45">
                  {m.label}
                </p>
                <p className="mt-1 font-orbitron text-2xl font-bold text-white">
                  {m.value}
                </p>
              </div>
              <NeonSparkline
                data={m.data.map((value) => ({ value }))}
                color={ACCENTS[m.color]}
                width={90}
                height={44}
                glowIntensity="medium"
              />
            </div>
          </Panel>
        ))}
      </div>

      {/* Big trend chart */}
      <Panel
        title="Revenue & Acquisition Trend"
        subtitle={
          compare
            ? "Revenue ($K) · current vs previous period"
            : "Revenue ($K) · current period"
        }
        accent="cyan"
        action={
          <Badge color="cyan" variant="ghost" size="xs" dot="pulse">
            {range.toUpperCase()}
          </Badge>
        }
      >
        <NeonLineChart
          data={REVENUE_SERIES}
          xAxisKey="name"
          height={340}
          area
          dots
          grid
          legend
          curve="monotone"
          glowIntensity="high"
          series={
            compare
              ? [
                  { dataKey: "current", label: "Current", color: ACCENTS.cyan },
                  {
                    dataKey: "previous",
                    label: "Previous",
                    color: ACCENTS.purple,
                  },
                ]
              : [{ dataKey: "current", label: "Current", color: ACCENTS.cyan }]
          }
        />
      </Panel>

      {/* Distribution + channels */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Panel
          title="Plan Distribution"
          subtitle="Active accounts by tier"
          accent="green"
        >
          <NeonBarChart
            data={PLAN_DISTRIBUTION}
            xAxisKey="name"
            dataKey="value"
            height={300}
            layout="horizontal"
            grid
            multiColor
            radius={3}
            glowIntensity="medium"
          />
        </Panel>

        <Panel
          title="Channel Breakdown"
          subtitle="Desktop vs mobile by channel"
          accent="pink"
        >
          <NeonBarChart
            data={SALES_BY_CHANNEL}
            xAxisKey="name"
            height={300}
            grid
            legend
            radius={3}
            glowIntensity="medium"
            series={[
              { dataKey: "desktop", label: "Desktop", color: ACCENTS.pink },
              { dataKey: "mobile", label: "Mobile", color: ACCENTS.cyan },
            ]}
          />
        </Panel>
      </section>

      {/* Source donut + insights */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel
          title="Acquisition Sources"
          subtitle="Where users come from"
          accent="cyan"
        >
          <NeonDonutChart
            data={TRAFFIC_SOURCES.map((d) => ({
              name: d.name,
              value: d.value,
              color: ACCENTS[d.color],
            }))}
            height={280}
            centerLabel
            innerRadius="58%"
            glowIntensity="medium"
            color="cyan"
          />
        </Panel>

        <div className="lg:col-span-2">
          <SectionLabel accent="green">Key Insights</SectionLabel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                t: "Organic search is up 24%",
                d: "Best-performing channel this period, driven by new content.",
                c: "green" as const,
              },
              {
                t: "Mobile overtakes desktop",
                d: "iOS + Android now account for 58% of all conversions.",
                c: "cyan" as const,
              },
              {
                t: "Enterprise MRR +31%",
                d: "Three new Enterprise accounts closed this month.",
                c: "pink" as const,
              },
              {
                t: "Churn trending down",
                d: "Retention campaigns reduced churn to a 6-month low.",
                c: "orange" as const,
              },
            ].map((ins) => (
              <Panel key={ins.t} accent={ins.c}>
                <div className="flex items-start gap-3 pt-4">
                  <span
                    className="mt-1 h-2 w-2 shrink-0"
                    style={{
                      background: ACCENTS[ins.c],
                      boxShadow: `0 0 8px ${ACCENTS[ins.c]}`,
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{ins.t}</p>
                    <p className="mt-1 text-xs text-white/50">{ins.d}</p>
                  </div>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
