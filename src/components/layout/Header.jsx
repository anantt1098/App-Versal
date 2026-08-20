import React, { useState } from 'react';
import { Sparkles, Download, Upload, RotateCcw, Palette, Check, Code } from 'lucide-react';
import { PRESET_THEMES, DEFAULT_CONFIG } from '../../constants/defaultConfig';

export default function Header({ config, onSelectPreset, onReset, onImportConfig }) {
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [jsonText, setJsonText] = useState(JSON.stringify(config, null, 2));
  const [copied, setCopied] = useState(false);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (parsed.content && parsed.styling) {
        onImportConfig(parsed);
        setShowJsonModal(false);
      } else {
        alert('Invalid JSON schema! Object must contain content and styling properties.');
      }
    } catch (e) {
      alert('Invalid JSON format!');
    }
  };

  return (
    <>
      <header class="bg-zinc-900/90 border-b border-zinc-800 sticky top-0 z-40 backdrop-blur-xl px-4 py-3">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
              <Sparkles class="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h1 class="font-extrabold text-zinc-100 text-base tracking-tight">App-Versal</h1>
                <span class="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded-full border border-indigo-800">
                  Feedback Studio
                </span>
              </div>
              <p class="text-xs text-zinc-400 hidden sm:block">
                In-App Mobile Feedback Widget Customizer & Live Preview
              </p>
            </div>
          </div>

          {/* Preset Theme Switcher & Actions */}
          <div class="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            {/* Quick Presets Dropdown / Buttons */}
            <div class="flex items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs">
              <span class="text-zinc-400 text-[11px] font-medium px-2 flex items-center gap-1 hidden md:flex">
                <Palette class="w-3.5 h-3.5 text-indigo-400" />
                Presets:
              </span>
              {PRESET_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => onSelectPreset(theme.styling)}
                  class="px-2.5 py-1 rounded-lg font-medium transition-all hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1.5"
                >
                  <span class={`w-2 h-2 rounded-full ${theme.previewBg}`} />
                  <span class="text-[11px]">{theme.name}</span>
                </button>
              ))}
            </div>

            {/* JSON Code Modal Trigger */}
            <button
              type="button"
              onClick={() => {
                setJsonText(JSON.stringify(config, null, 2));
                setShowJsonModal(true);
              }}
              class="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold px-3 py-2 rounded-xl transition-colors border border-zinc-700/60 flex items-center gap-1.5"
            >
              <Code class="w-3.5 h-3.5 text-indigo-400" />
              JSON
            </button>

            {/* Reset to Defaults */}
            <button
              type="button"
              onClick={onReset}
              title="Reset to default settings"
              class="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 p-2 rounded-xl transition-colors border border-zinc-700/60"
            >
              <RotateCcw class="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* JSON Import/Export Modal */}
      {showJsonModal && (
        <div class="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div class="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl p-5 space-y-4 shadow-2xl">
            <div class="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 class="font-bold text-zinc-100 text-sm flex items-center gap-2">
                <Code class="w-4 h-4 text-indigo-400" />
                Widget Configuration JSON
              </h3>
              <button
                type="button"
                onClick={() => setShowJsonModal(false)}
                class="text-zinc-400 hover:text-white text-xs px-2 py-1 bg-zinc-800 rounded-lg"
              >
                ✕ Close
              </button>
            </div>

            <p class="text-xs text-zinc-400">
              Copy this JSON configuration for your backend or paste customized JSON to load configuration.
            </p>

            <textarea
              rows={12}
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 font-mono text-xs text-indigo-300 focus:outline-none focus:border-indigo-500 resize-none"
            />

            <div class="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleCopyJson}
                class="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold px-4 py-2 rounded-xl transition-colors border border-zinc-700 flex items-center gap-1.5"
              >
                {copied ? <Check class="w-4 h-4 text-emerald-400" /> : <Download class="w-4 h-4" />}
                {copied ? 'Copied to Clipboard!' : 'Copy JSON'}
              </button>

              <button
                type="button"
                onClick={handleImportJson}
                class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors shadow-md flex items-center gap-1.5"
              >
                <Upload class="w-4 h-4" />
                Apply JSON Config
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
