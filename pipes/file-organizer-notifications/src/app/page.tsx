// "use client";

import { ObsidianSettings } from "@/components/obsidian-settings";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full mt-12">
      <p className="text-xl font-bold">Your knowledge base on autopilot</p>
      <ObsidianSettings />
    </div>
  );
}
