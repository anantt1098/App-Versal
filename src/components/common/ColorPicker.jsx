import React from 'react';

export default function ColorPicker({ label, value, onChange, presets = [] }) {
  return (
    <div class="space-y-1.5">
      <div class="flex items-center justify-between text-xs">
        <label class="font-medium text-zinc-300">{label}</label>
        <span class="font-mono text-zinc-400 uppercase text-[11px] bg-zinc-800/80 px-1.5 py-0.5 rounded border border-zinc-700/60">
          {value}
        </span>
      </div>
      <div class="flex items-center gap-2">
        <div class="relative flex-1 flex items-center">
          <input
            type="color"
            value={value || '#000000'}
            onChange={(e) => onChange(e.target.value)}
            class="w-9 h-9 rounded-lg border border-zinc-700 bg-zinc-900 cursor-pointer overflow-hidden shadow-sm shrink-0"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="#000000"
            class="ml-2 flex-1 w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 font-mono transition-colors"
          />
        </div>
        {presets.length > 0 && (
          <div class="flex items-center gap-1 shrink-0">
            {presets.map((color, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onChange(color)}
                style={{ backgroundColor: color }}
                title={`Set ${color}`}
                class={`w-5 h-5 rounded-full border border-white/20 transition-transform hover:scale-110 focus:outline-none ${
                  value?.toLowerCase() === color.toLowerCase() ? 'ring-2 ring-indigo-400 scale-110' : ''
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
