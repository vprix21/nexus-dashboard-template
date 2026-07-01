"use client";

import React, { useMemo, useState } from "react";
import { NeonTable } from "@/components/neonblade-ui/neon-table";
import { NeonModal } from "@/components/neonblade-ui/modal";
import NeonInput from "@/components/neonblade-ui/neon-input";
import { NeonSelect } from "@/components/neonblade-ui/neon-select";
import { NeonCheckbox } from "@/components/neonblade-ui/neon-checkbox";
import { Badge } from "@/components/neonblade-ui/badge";
import CornerCutButton from "@/components/neonblade-ui/corner-cut-button";
import { StatCard } from "@/components/neonblade-ui/stat-card";
import { Panel } from "@/_components/Panel";
import { ACCENTS } from "@/nexus.config";
import { USERS, type UserRow } from "@/_components/data";
import { PlusIcon, SearchIcon } from "@/_components/icons";

const PLAN_COLORS: Record<UserRow["plan"], string> = {
  Free: ACCENTS.cyan,
  Starter: ACCENTS.green,
  Pro: ACCENTS.cyan,
  Team: ACCENTS.purple,
  Enterprise: ACCENTS.pink,
};

function StatusBadge({ status }: { status: UserRow["status"] }) {
  const cfg = {
    active: { color: "green", label: "Active" },
    trial: { color: "cyan", label: "Trial" },
    inactive: { color: "pink", label: "Inactive" },
  } as const;
  const c = cfg[status];
  return (
    <Badge color={c.color} variant="ghost" size="xs" dot="solid">
      {c.label}
    </Badge>
  );
}

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [plan, setPlan] = useState("all");
  const [status, setStatus] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(() => {
    return USERS.filter((u) => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q);
      const matchesPlan = plan === "all" || u.plan === plan;
      const matchesStatus = status === "all" || u.status === status;
      return matchesSearch && matchesPlan && matchesStatus;
    });
  }, [search, plan, status]);

  const totalMrr = USERS.reduce((sum, u) => sum + u.mrr, 0);
  const activeCount = USERS.filter((u) => u.status === "active").length;
  const trialCount = USERS.filter((u) => u.status === "trial").length;

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          value={USERS.length}
          label="Total Users"
          color={ACCENTS.cyan}
          trend="up"
          change="+8"
          changeLabel="this week"
          glowIntensity="low"
        />
        <StatCard
          value={activeCount}
          label="Active"
          color={ACCENTS.green}
          trend="up"
          change="+5"
          changeLabel="this week"
          glowIntensity="low"
        />
        <StatCard
          value={trialCount}
          label="On Trial"
          color={ACCENTS.pink}
          trend="neutral"
          change="0"
          changeLabel="this week"
          glowIntensity="low"
        />
        <StatCard
          value={`$${(totalMrr / 1000).toFixed(1)}K`}
          label="Total MRR"
          color={ACCENTS.orange}
          trend="up"
          change="+12%"
          changeLabel="this month"
          glowIntensity="low"
        />
      </div>

      {/* Toolbar + table */}
      <Panel
        title="All Users"
        subtitle={`${filtered.length} of ${USERS.length} shown`}
        accent="cyan"
        action={
          <CornerCutButton
            color="cyan"
            variant="solid"
            size="xs"
            hoverEffect="glow"
            onClick={() => setModalOpen(true)}
          >
            <span className="inline-flex items-center gap-1.5">
              <PlusIcon className="h-4 w-4" />
              Add user
            </span>
          </CornerCutButton>
        }
      >
        {/* Filters */}
        <div className="mb-4 flex flex-wrap items-end gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-white/35">
              <SearchIcon className="h-4 w-4" />
            </span>
            <NeonInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name or email…"
              color="cyan"
              shape="corner-cut"
              className="[&_input]:pl-9"
            />
          </div>
          <NeonSelect
            label="Plan"
            color="pink"
            size="sm"
            value={plan}
            onChange={setPlan}
            ariaLabel="Filter by plan"
            options={[
              { value: "all", label: "All plans" },
              { value: "Free", label: "Free" },
              { value: "Starter", label: "Starter" },
              { value: "Pro", label: "Pro" },
              { value: "Team", label: "Team" },
              { value: "Enterprise", label: "Enterprise" },
            ]}
          />
          <NeonSelect
            label="Status"
            color="green"
            size="sm"
            value={status}
            onChange={setStatus}
            ariaLabel="Filter by status"
            options={[
              { value: "all", label: "All status" },
              { value: "active", label: "Active" },
              { value: "trial", label: "Trial" },
              { value: "inactive", label: "Inactive" },
            ]}
          />
        </div>

        <NeonTable<UserRow>
          data={filtered}
          color="cyan"
          striped
          pageSize={8}
          rowHover
          emptyText="NO USERS MATCH FILTERS"
          columns={[
            {
              key: "name",
              header: "User",
              render: (_v, row) => (
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-8 w-8 items-center justify-center font-orbitron text-[10px] font-bold text-black"
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
                    <div className="text-[11px] text-white/40">{row.email}</div>
                  </div>
                </div>
              ),
            },
            {
              key: "plan",
              header: "Plan",
              render: (v) => (
                <span
                  className="font-orbitron text-xs font-semibold"
                  style={{ color: PLAN_COLORS[v as UserRow["plan"]] }}
                >
                  {String(v)}
                </span>
              ),
            },
            {
              key: "status",
              header: "Status",
              render: (_v, row) => <StatusBadge status={row.status} />,
            },
            {
              key: "country",
              header: "Region",
              align: "center",
              render: (v) => <span className="text-white/60">{String(v)}</span>,
            },
            {
              key: "mrr",
              header: "MRR",
              align: "right",
              render: (v) => (
                <span className="font-orbitron text-white/85">
                  ${Number(v).toLocaleString()}
                </span>
              ),
            },
            {
              key: "lastSeen",
              header: "Last seen",
              align: "right",
              render: (v) => (
                <span className="text-xs text-white/45">{String(v)}</span>
              ),
            },
          ]}
        />
      </Panel>

      {/* Add user modal */}
      <NeonModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        color="cyan"
        size="md"
        glowIntensity="medium"
        corner="bottom-right"
        header={{ title: "Add New User", label: "User Management" }}
        footer={{
          align: "between",
          children: (
            <>
              <CornerCutButton
                color="pink"
                variant="ghost"
                size="sm"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </CornerCutButton>
              <CornerCutButton
                color="cyan"
                variant="solid"
                size="sm"
                hoverEffect="glow"
                onClick={() => setModalOpen(false)}
              >
                Create user
              </CornerCutButton>
            </>
          ),
        }}
      >
        <div className="space-y-4 flex flex-col">
          <div className="flex flex-col gap-4">
            <NeonInput label="Full name" placeholder="Jane Doe" color="cyan" />
            <NeonInput
              label="Email"
              type="email"
              placeholder="jane@company.io"
              color="cyan"
            />
          </div>
          <div className="flex flex-col gap-4">
            <NeonSelect
              label="Plan"
              color="pink"
              defaultValue="Starter"
              ariaLabel="Plan"
              options={[
                { value: "Free", label: "Free" },
                { value: "Starter", label: "Starter" },
                { value: "Pro", label: "Pro" },
                { value: "Team", label: "Team" },
                { value: "Enterprise", label: "Enterprise" },
              ]}
            />
            <NeonSelect
              label="Role"
              color="green"
              defaultValue="member"
              ariaLabel="Role"
              options={[
                { value: "member", label: "Member" },
                { value: "admin", label: "Admin" },
                { value: "owner", label: "Owner" },
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2 pt-4">
            <NeonCheckbox
              label="Send welcome email"
              color="cyan"
              defaultChecked
              variant="corner-cut"
            />
            <NeonCheckbox
              label="Grant billing access"
              color="pink"
              variant="corner-cut"
            />
          </div>
        </div>
      </NeonModal>
    </div>
  );
}
