"use client";

import { useDeferredValue, useState } from "react";
import { motion } from "framer-motion";
import { SearchIcon, SparkleIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

function matchTool(query, tool) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  return `${tool.name} ${tool.category} ${tool.note}`.toLowerCase().includes(normalizedQuery);
}

export function SkillsSection({ groups }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredGroups = groups
    .map((group) => ({
      ...group,
      tools: group.tools.filter((tool) => matchTool(deferredQuery, tool))
    }))
    .filter((group) => group.tools.length > 0);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8">
      <Reveal className="soft-panel rounded-[34px] p-6 sm:p-8">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="A searchable tag cloud for the systems, craft, and software behind the work."
          copy="This section is intentionally easy to edit. Swap the tags in the content file or change the labels here to match your own creative stack."
        />

        <div className="mt-6 rounded-[28px] border border-white/85 bg-white/78 p-4 shadow-[0_18px_42px_rgba(102,131,165,0.1)]">
          <label htmlFor="tool-search" className="text-sm font-semibold text-slate-500">
            Search the stack
          </label>
          <div className="mt-3 flex items-center gap-3 rounded-full border border-white/90 bg-white px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
            <SearchIcon className="h-5 w-5 text-sky-500" />
            <input
              id="tool-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try Figma, motion, brand, or strategy"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[26px] border border-white/85 bg-[linear-gradient(135deg,_rgba(200,247,238,0.9),_rgba(255,255,255,0.72))] p-5 shadow-[0_18px_40px_rgba(102,131,165,0.12)]">
            <p className="font-display text-xl font-extrabold text-slate-900">Playful, not noisy</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Rounded surfaces, gentle gradients, and whitespace keep the anime-inspired energy clean enough for real product and portfolio work.
            </p>
          </div>
          <div className="rounded-[26px] border border-white/85 bg-[linear-gradient(135deg,_rgba(223,228,255,0.9),_rgba(255,255,255,0.74))] p-5 shadow-[0_18px_40px_rgba(102,131,165,0.12)]">
            <div className="flex items-center gap-2 text-sky-700">
              <SparkleIcon className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">Filtered Results</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {filteredGroups.reduce((total, group) => total + group.tools.length, 0)} tags currently visible.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="soft-panel rounded-[34px] p-5 sm:p-6">
        <div className="grid gap-5">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group, groupIndex) => (
              <div key={group.title} className="rounded-[28px] border border-white/85 bg-white/66 p-5 shadow-[0_16px_38px_rgba(102,131,165,0.1)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-extrabold text-slate-900">{group.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{group.description}</p>
                  </div>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Group {groupIndex + 1}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {group.tools.map((tool, toolIndex) => (
                    <motion.button
                      key={tool.name}
                      type="button"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.3, delay: toolIndex * 0.03 }}
                      onClick={() => setQuery(tool.name)}
                      className="soft-tag rounded-full px-4 py-2 text-left transition hover:-translate-y-0.5 hover:bg-white"
                    >
                      <span className="block text-sm font-semibold text-slate-700">{tool.name}</span>
                      <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">
                        {tool.category}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[28px] border border-dashed border-sky-200 bg-white/72 p-8 text-center shadow-[0_16px_38px_rgba(102,131,165,0.08)]">
              <p className="font-display text-2xl font-extrabold text-slate-900">No matches yet</p>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Try a broader term like <span className="font-semibold text-sky-700">design</span> or{" "}
                <span className="font-semibold text-sky-700">motion</span>.
              </p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
