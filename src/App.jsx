import React, { useState } from 'react';
import Header from './components/layout/Header';
import ContentEditor from './components/editor/ContentEditor';
import StylingEditor from './components/editor/StylingEditor';
import MobilePreview from './components/preview/MobilePreview';
import { DEFAULT_CONFIG } from './constants/defaultConfig';
import { FileText, Palette, Eye } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [activeTab, setActiveTab] = useState('content'); // 'content' | 'styling'
  const [activePreviewStep, setActivePreviewStep] = useState(1); // 1 | 2 | 3

  const handleContentChange = (newContent) => {
    setConfig((prev) => ({ ...prev, content: newContent }));
  };

  const handleStylingChange = (newStyling) => {
    setConfig((prev) => ({ ...prev, styling: newStyling }));
  };

  const handlePresetSelect = (presetStyling) => {
    setConfig((prev) => ({
      ...prev,
      styling: { ...prev.styling, ...presetStyling }
    }));
  };

  const handleReset = () => {
    setConfig(DEFAULT_CONFIG);
    setActivePreviewStep(1);
  };

  return (
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      {/* Top Header Navigation */}
      <Header
        config={config}
        onSelectPreset={handlePresetSelect}
        onReset={handleReset}
        onImportConfig={(newConfig) => setConfig(newConfig)}
      />

      {/* Main Studio Workspace Grid */}
      <main class="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Side Panel: Content & Styling Editors (7 cols) */}
        <section class="lg:col-span-7 flex flex-col bg-zinc-900/70 rounded-3xl border border-zinc-800/80 backdrop-blur-lg overflow-hidden shadow-xl lg:h-[780px]">
          {/* Main Tab Navigation Header */}
          <div class="flex items-center justify-between p-3 sm:p-4 bg-zinc-900/90 border-b border-zinc-800 shrink-0">
            <div class="flex items-center gap-2 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800/90 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('content')}
                class={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'content'
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                <FileText class="w-4 h-4" />
                1. Content Page
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('styling')}
                class={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'styling'
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                <Palette class="w-4 h-4" />
                2. Styling Page
              </button>
            </div>
          </div>

          {/* Editor Form Body - Fills exact remaining height and scrolls */}
          <div class="flex-1 p-4 sm:p-6 overflow-y-auto">
            {activeTab === 'content' ? (
              <ContentEditor
                content={config.content}
                onChange={handleContentChange}
                activePreviewStep={activePreviewStep}
                setActivePreviewStep={setActivePreviewStep}
              />
            ) : (
              <StylingEditor
                styling={config.styling}
                onChange={handleStylingChange}
              />
            )}
          </div>
        </section>

        {/* Right Side Panel: Live Mobile Device Preview (5 cols) */}
        <section class="lg:col-span-5 flex flex-col bg-zinc-900/70 rounded-3xl border border-zinc-800/80 backdrop-blur-lg p-4 sm:p-6 items-center shadow-2xl lg:h-[780px] lg:sticky lg:top-20">
          <div class="w-full flex items-center justify-between pb-3 mb-2 border-b border-zinc-800/80 shrink-0">
            <h2 class="font-bold text-zinc-100 text-sm flex items-center gap-2">
              <Eye class="w-4 h-4 text-indigo-400" />
              Live Mobile Preview
            </h2>
            <span class="text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/80 animate-pulse">
              ● Sync Active
            </span>
          </div>

          <div class="w-full flex-1 flex flex-col justify-between overflow-hidden">
            <MobilePreview
              content={config.content}
              styling={config.styling}
              activeStep={activePreviewStep}
              setActiveStep={setActivePreviewStep}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
