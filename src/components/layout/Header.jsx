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
      <header className="bg-[#0c0c0e]/90 border-b border-zinc-800/80 sticky top-0 z-40 backdrop-blur-xl px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          {/* Centered Controls & Preset Themes */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {/* Preset Themes Selector */}
            <div className="flex items-center gap-1 bg-[#121215] p-1 rounded-xl border border-zinc-800/80 text-xs">
              <span className="text-zinc-400 text-[11px] font-medium px-2 flex items-center gap-1.5 hidden md:flex">
                <Palette className="w-3.5 h-3.5 text-indigo-400" />
                Presets:
              </span>
              {PRESET_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => onSelectPreset(theme.styling)}
                  className="px-2.5 py-1 rounded-lg font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <span className={`w-2 h-2 rounded-full ${theme.previewBg}`} />
                  <span className="text-[11px]">{theme.name}</span>
                </button>
              ))}
            </div>

            {/* JSON Modal Button */}
            <button
              type="button"
              onClick={handleOpenJsonModal}
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-medium px-3 py-2 rounded-xl transition-all border border-zinc-800 flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <Code className="w-3.5 h-3.5 text-indigo-400" />
              JSON Schema
            </button>

            {/* Reset Defaults */}
            <button
              type="button"
              onClick={onReset}
              title="Reset config to defaults"
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 p-2 rounded-xl transition-all border border-zinc-800 active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* JSON Import/Export Modal */}
      {showJsonModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl w-full max-w-2xl p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-indigo-400" />
                <h3 className="font-bold text-zinc-100 text-sm">Widget Configuration JSON</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowJsonModal(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-400">
              Export the current widget schema for production deployment, or edit JSON to apply a custom state.
            </p>

            <textarea
              rows={12}
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              className="w-full bg-[#09090b] border border-zinc-800 rounded-xl p-3 font-mono text-xs text-indigo-300 focus:outline-none focus:border-indigo-500 resize-none"
            />

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleCopyJson}
                className="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold px-4 py-2 rounded-xl transition-all border border-zinc-800 flex items-center gap-1.5 active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
                {copied ? 'Copied to Clipboard!' : 'Copy JSON'}
              </button>

              <button
                type="button"
                onClick={handleImportJson}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-1.5 active:scale-95"
              >
                <Upload className="w-4 h-4" />
                Apply JSON Config
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
