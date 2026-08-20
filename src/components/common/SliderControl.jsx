import React from 'react';

export default function SliderControl({ label, value, onChange, min = 0, max = 100, step = 1, unit = 'px' }) {
  return (
    <div class="space-y-1.5">
      <div class="flex items-center justify-between text-xs">
        <label class="font-medium text-zinc-300">{label}</label>
        <span class="font-mono text-indigo-400 font-semibold text-[11px] bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
          {value}{unit}
        </span>
      </div>
      <div class="flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          class="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 focus:outline-none"
        />
      </div>
    </div>
  );
}
