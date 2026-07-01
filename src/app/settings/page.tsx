"use client";

import React, { useState } from "react";
import NeonInput from "@/components/neonblade-ui/neon-input";
import { NeonSelect } from "@/components/neonblade-ui/neon-select";
import { NeonToggle } from "@/components/neonblade-ui/neon-toggle";
import { NeonCheckbox } from "@/components/neonblade-ui/neon-checkbox";
import { Badge } from "@/components/neonblade-ui/badge";
import CornerCutButton from "@/components/neonblade-ui/corner-cut-button";
import BorderBeamCornerCutCard from "@/components/neonblade-ui/border-beam-corner-cut-card";
import { Panel, SectionLabel } from "@/_components/Panel";
import { ACCENTS } from "@/nexus.config";
import { BoltIcon } from "@/_components/icons";
import NeonGlowCornerCutCard from "@/components/neonblade-ui/neon-glow-corner-cut-card";

const NOTIFICATIONS = [
  {
    label: "Product updates",
    desc: "New features and improvements",
    color: "cyan" as const,
    on: true,
  },
  {
    label: "Weekly digest",
    desc: "A summary of your account activity",
    color: "green" as const,
    on: true,
  },
  {
    label: "Billing alerts",
    desc: "Payment receipts and failures",
    color: "pink" as const,
    on: true,
  },
  {
    label: "Security alerts",
    desc: "Sign-ins from new devices",
    color: "orange" as const,
    on: false,
  },
];

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(
    NOTIFICATIONS.map((n) => n.on),
  );
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Profile */}
      <section>
        <SectionLabel accent="cyan">Profile</SectionLabel>
        <Panel accent="cyan">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center mt-4">
            <span
              className="flex h-20 w-20 shrink-0 items-center justify-center font-orbitron text-xl font-bold text-black"
              style={{
                background: `linear-gradient(135deg, ${ACCENTS.cyan}, ${ACCENTS.pink})`,
                boxShadow: `0 0 22px ${ACCENTS.cyan}55`,
              }}
            >
              AV
            </span>
            <div className="flex-1">
              <h3 className="font-orbitron text-lg font-semibold text-white">
                Aria Voss
              </h3>
              <p className="text-sm text-white/45">aria@nullsector.io</p>
              <div className="mt-2 flex gap-2">
                <Badge color="pink" variant="ghost" size="xs">
                  Admin
                </Badge>
                <Badge color="green" variant="ghost" size="xs" dot="pulse">
                  Verified
                </Badge>
              </div>
            </div>
            <CornerCutButton color="cyan" variant="outline" size="xs">
              Change avatar
            </CornerCutButton>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NeonInput
              label="Full name"
              defaultValue="Aria Voss"
              size="sm"
              color="cyan"
            />
            <NeonInput
              label="Email"
              type="email"
              defaultValue="aria@nullsector.io"
              size="sm"
              color="cyan"
            />
            <NeonInput
              label="Company"
              defaultValue="Null Sector Inc."
              size="sm"
              color="cyan"
            />
            <NeonSelect
              label="Timezone"
              color="cyan"
              size="md"
              defaultValue="utc"
              ariaLabel="Timezone"
              options={[
                { value: "utc", label: "UTC" },
                { value: "est", label: "Eastern (UTC-5)" },
                { value: "pst", label: "Pacific (UTC-8)" },
                { value: "cet", label: "Central EU (UTC+1)" },
                { value: "jst", label: "Japan (UTC+9)" },
              ]}
            />
          </div>
        </Panel>
      </section>

      {/* Notifications */}
      <section>
        <SectionLabel accent="pink">Notifications</SectionLabel>
        <Panel accent="pink">
          <div className="divide-y divide-white/8 pt-4">
            {NOTIFICATIONS.map((n, i) => (
              <div
                key={n.label}
                className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-white">{n.label}</p>
                  <p className="text-xs text-white/45">{n.desc}</p>
                </div>
                <NeonToggle
                  color={n.color}
                  checked={notifications[i]}
                  onChange={(v) =>
                    setNotifications((prev) =>
                      prev.map((p, idx) => (idx === i ? v : p)),
                    )
                  }
                />
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* Security + Preferences */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <SectionLabel accent="green">Security</SectionLabel>
          <Panel accent="green">
            <div className="flex items-center justify-between gap-4 pt-4">
              <div>
                <p className="text-sm font-medium text-white">
                  Two-factor authentication
                </p>
                <p className="text-xs text-white/45">
                  Require a code at sign-in
                </p>
              </div>
              <NeonToggle
                color="green"
                checked={twoFactor}
                onChange={setTwoFactor}
              />
            </div>
            <div className="mt-5 space-y-2.5 border-t border-white/8 pt-4 flex flex-col">
              <NeonCheckbox
                label="Alert on new device sign-in"
                color="green"
                defaultChecked
                variant="corner-cut"
              />
              <NeonCheckbox
                label="Auto sign-out after 30 min idle"
                color="green"
                variant="corner-cut"
              />
              <NeonCheckbox
                label="Allow API token access"
                color="green"
                defaultChecked
                variant="corner-cut"
              />
            </div>
            <div className="mt-5">
              <NeonInput
                label="Change password"
                type="password"
                size="sm"
                placeholder="••••••••••"
                color="green"
              />
            </div>
          </Panel>
        </div>

        <div>
          <SectionLabel accent="orange">Preferences</SectionLabel>
          <Panel accent="orange">
            <div className="space-y-4 pt-4">
              <NeonSelect
                label="Accent theme"
                color="cyan"
                defaultValue="cyan"
                ariaLabel="Accent theme"
                options={[
                  { value: "cyan", label: "Cyan (default)" },
                  { value: "pink", label: "Magenta" },
                  { value: "green", label: "Matrix Green" },
                  { value: "multi", label: "Multi-accent" },
                ]}
              />
              <NeonSelect
                label="Density"
                color="cyan"
                defaultValue="comfortable"
                ariaLabel="Density"
                options={[
                  { value: "comfortable", label: "Comfortable" },
                  { value: "compact", label: "Compact" },
                ]}
              />
              <div className="space-y-2.5 pt-1 flex flex-col">
                <NeonCheckbox
                  label="Enable glow animations"
                  color="orange"
                  defaultChecked
                  variant="corner-cut"
                />
                <NeonCheckbox
                  label="Reduce motion"
                  color="orange"
                  variant="corner-cut"
                />
              </div>
            </div>
          </Panel>
        </div>
      </section>

      {/* Plan */}
      <section>
        <SectionLabel accent="pink">Subscription</SectionLabel>
        <NeonGlowCornerCutCard
          title="Enterprise Plan"
          description="Unlimited seats · priority support · dedicated infrastructure."
          hoverEffect="solid"
          icon={<BoltIcon className="h-full w-full" />}
        >
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-baseline gap-1">
              <span className="font-orbitron text-3xl font-bold text-white">
                $1,290
              </span>
              <span className="text-sm text-white/45">/ month</span>
            </div>
            <div className="flex gap-2">
              <CornerCutButton color="pink" variant="ghost" size="xs">
                Manage billing
              </CornerCutButton>
              <CornerCutButton
                color="cyan"
                variant="solid"
                size="xs"
                hoverEffect="shine"
              >
                Upgrade
              </CornerCutButton>
            </div>
          </div>
        </NeonGlowCornerCutCard>
      </section>

      {/* Danger zone */}
      <section>
        <SectionLabel accent="red">Danger Zone</SectionLabel>
        <Panel accent="red">
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div>
              <p className="text-sm font-medium text-white">Delete account</p>
              <p className="text-xs text-white/45">
                Permanently remove your account and all associated data.
              </p>
            </div>
            <CornerCutButton color="red" variant="outline" size="xs">
              Delete account
            </CornerCutButton>
          </div>
        </Panel>
      </section>

      {/* Save bar */}
      <div
        className="sticky bottom-4 z-50 flex items-center justify-end gap-3 border border-white/8 bg-[#080809]/90 px-4 py-3 backdrop-blur-md"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
        }}
      >
        <span className="mr-auto text-xs text-white/40">Unsaved changes</span>
        <CornerCutButton color="red" variant="ghost" size="sm">
          Discard
        </CornerCutButton>
        <CornerCutButton
          color="green"
          variant="solid"
          size="sm"
          hoverEffect="glow"
        >
          Save changes
        </CornerCutButton>
      </div>
    </div>
  );
}
