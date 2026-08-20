import React from 'react';

export default function ColorPicker({ label, value, onChange, presets = [] }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <label className="font-medium text-zinc-300">{label}</label>
        <span className="font-mono text-zinc-400 uppercase text-[11px] bg-zinc-800/80 px-1.5 py-0.5 rounded border border-zinc-700/60">
          {value}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex-1 flex items-center bg-[#09090b] border border-zinc-800 rounded-xl p-1 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500/40 transition-colors">
          <input
            type="color"
            value={value || '#000000'}
            onChange={(e) => onChange(e.target.value)}
            className="w-7 h-7 rounded-lg border border-zinc-800 bg-transparent cursor-pointer overflow-hidden shadow-sm shrink-0"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="#000000"
            className="ml-2 flex-1 w-full bg-transparent border-0 text-xs text-zinc-200 focus:outline-none font-mono tracking-wider"
          />
        </div>
        {presets.length > 0 && (
          <div className="flex items-center gap-1 shrink-0 bg-[#09090b] p-1 rounded-xl border border-zinc-800">
            {presets.map((color, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onChange(color)}
                style={{ backgroundColor: color }}
                title={`Set ${color}`}
                className={`w-4 h-4 rounded-full border border-white/20 transition-transform hover:scale-125 focus:outline-none ${
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
