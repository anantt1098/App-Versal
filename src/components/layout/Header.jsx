import React, { useState } from 'react';
import { Sparkles, Download, Upload, RotateCcw, Palette, Check, Code, X } from 'lucide-react';
import { PRESET_THEMES } from '../../constants/defaultConfig';

export default function Header({ config, onSelectPreset, onReset, onImportConfig }) {
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [jsonText, setJsonText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleOpenJsonModal = () => {
    setJsonText(JSON.stringify(config, null, 2));
    setShowJsonModal(true);
  };

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
      alert('Invalid JSON syntax!');
    }
  };

  return (
    <>
      <header class="bg-[#0c0c0e]/90 border-b border-zinc-800/80 sticky top-0 z-40 backdrop-blur-xl px-4 py-3">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Brand & Purpose */}
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 ring-1 ring-white/10">
              <Sparkles class="w-4 h-4" />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h1 class="font-bold text-zinc-100 text-sm tracking-tight">App-Versal</h1>
                <span class="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                  Widget Studio
                </span>
              </div>
              <p class="text-[11px] text-zinc-400 hidden sm:block">
                In-App Mobile Feedback Widget Customizer & Real-time Live Preview
              </p>
            </div>
          </div>

          {/* Controls & Preset Themes */}
          <div class="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
            {/* Preset Themes Selector */}
            <div class="flex items-center gap-1 bg-[#121215] p-1 rounded-xl border border-zinc-800/80 text-xs">
              <span class="text-zinc-400 text-[11px] font-medium px-2 flex items-center gap-1.5 hidden md:flex">
                <Palette class="w-3.5 h-3.5 text-indigo-400" />
                Presets:
              </span>
              {PRESET_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => onSelectPreset(theme.styling)}
                  class="px-2.5 py-1 rounded-lg font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <span class={`w-2 h-2 rounded-full ${theme.previewBg}`} />
                  <span class="text-[11px]">{theme.name}</span>
                </button>
              ))}
            </div>

            {/* JSON Modal Button */}
            <button
              type="button"
              onClick={handleOpenJsonModal}
              class="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-medium px-3 py-2 rounded-xl transition-all border border-zinc-800 flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <Code class="w-3.5 h-3.5 text-indigo-400" />
              JSON Schema
            </button>

            {/* Reset Defaults */}
            <button
              type="button"
              onClick={onReset}
              title="Reset config to defaults"
              class="bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 p-2 rounded-xl transition-all border border-zinc-800 active:scale-95"
            >
              <RotateCcw class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* JSON Import/Export Modal */}
      {showJsonModal && (
        <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-[#121215] border border-zinc-800 rounded-2xl w-full max-w-2xl p-5 space-y-4 shadow-2xl">
            <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <div class="flex items-center gap-2">
                <Code class="w-4 h-4 text-indigo-400" />
                <h3 class="font-bold text-zinc-100 text-sm">Widget Configuration JSON</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowJsonModal(false)}
                class="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <X class="w-4 h-4" />
              </button>
            </div>

            <p class="text-xs text-zinc-400">
              Export the current widget schema for production deployment, or edit JSON to apply a custom state.
            </p>

            <textarea
              rows={12}
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              class="w-full bg-[#09090b] border border-zinc-800 rounded-xl p-3 font-mono text-xs text-indigo-300 focus:outline-none focus:border-indigo-500 resize-none"
            />

            <div class="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleCopyJson}
                class="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold px-4 py-2 rounded-xl transition-all border border-zinc-800 flex items-center gap-1.5 active:scale-95"
              >
                {copied ? <Check class="w-4 h-4 text-emerald-400" /> : <Download class="w-4 h-4" />}
                {copied ? 'Copied to Clipboard!' : 'Copy JSON'}
              </button>

              <button
                type="button"
                onClick={handleImportJson}
                class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-1.5 active:scale-95"
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
