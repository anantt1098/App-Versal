import React, { useState } from 'react';
import { Smartphone, Monitor, RotateCcw, Wifi, Battery, Signal, Sparkles, ChevronRight, X } from 'lucide-react';
import InitialStep from './InitialStep';
import FeedbackStep from './FeedbackStep';
import ThankYouStep from './ThankYouStep';

export default function MobilePreview({ content, styling, activeStep, setActiveStep }) {
  const [deviceFrame, setDeviceFrame] = useState('iphone'); // 'iphone' | 'compact'
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div class="flex flex-col items-center h-full justify-between space-y-4">
      {/* Top Device & Step Control Bar */}
      <div class="w-full bg-zinc-900/90 backdrop-blur-md p-2.5 rounded-2xl border border-zinc-800 flex flex-wrap items-center justify-between gap-2 shadow-lg">
        {/* Step Tabs */}
        <div class="flex items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs">
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            class={`px-3 py-1 rounded-lg font-medium transition-all ${
              activeStep === 1
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            1. Initial
          </button>
          <button
            type="button"
            onClick={() => setActiveStep(2)}
            class={`px-3 py-1 rounded-lg font-medium transition-all ${
              activeStep === 2
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            2. Feedback
          </button>
          <button
            type="button"
            onClick={() => setActiveStep(3)}
            class={`px-3 py-1 rounded-lg font-medium transition-all ${
              activeStep === 3
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            3. Thank You
          </button>
        </div>

        {/* Device Switcher */}
        <div class="flex items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
          <button
            type="button"
            onClick={() => setDeviceFrame('iphone')}
            title="iPhone View"
            class={`p-1.5 rounded-lg transition-colors ${
              deviceFrame === 'iphone' ? 'bg-zinc-800 text-indigo-400' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Smartphone class="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setDeviceFrame('compact')}
            title="Card Only View"
            class={`p-1.5 rounded-lg transition-colors ${
              deviceFrame === 'compact' ? 'bg-zinc-800 text-indigo-400' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Monitor class="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Device Mockup Body */}
      <div class="relative flex-1 w-full max-w-[340px] flex items-center justify-center py-2">
        {deviceFrame === 'iphone' ? (
          // Realistic iPhone Shell
          <div class="relative w-[320px] h-[640px] bg-zinc-950 rounded-[48px] p-3 shadow-2xl ring-1 ring-white/10 border-[6px] border-zinc-800 flex flex-col overflow-hidden">
            {/* Dynamic Island Notch */}
            <div class="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800" />
              <span class="w-2 h-2 rounded-full bg-indigo-950/80 border border-indigo-500/40" />
            </div>

            {/* Mobile Status Bar */}
            <div class="flex items-center justify-between px-6 pt-2 pb-1 text-[11px] font-semibold text-zinc-300 z-20">
              <span>{currentTime}</span>
              <div class="flex items-center gap-1.5">
                <Signal class="w-3 h-3 text-zinc-300" />
                <Wifi class="w-3 h-3 text-zinc-300" />
                <Battery class="w-3.5 h-3.5 text-zinc-300" />
              </div>
            </div>

            {/* Simulated Host App Background */}
            <div class="relative flex-1 w-full rounded-[36px] bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950/90 overflow-hidden p-4 flex flex-col justify-between">
              {/* Dummy Host App Top Bar */}
              <div class="flex items-center justify-between py-2 border-b border-white/5">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs text-white shadow">
                    AV
                  </div>
                  <span class="text-xs font-bold text-zinc-200">App-Versal App</span>
                </div>
                <span class="text-[10px] text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded-full border border-indigo-800">
                  PRO
                </span>
              </div>

              {/* Dummy Host App Content */}
              <div class="space-y-3 py-4 opacity-30">
                <div class="h-20 bg-zinc-800/60 rounded-2xl p-3 flex flex-col justify-between">
                  <div class="w-20 h-3 bg-zinc-700 rounded-full" />
                  <div class="w-32 h-4 bg-indigo-500/50 rounded-full" />
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="h-16 bg-zinc-800/40 rounded-xl" />
                  <div class="h-16 bg-zinc-800/40 rounded-xl" />
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div class="w-28 h-1 bg-zinc-600/60 rounded-full mx-auto mb-1 z-30" />

              {/* Overlay Feedback Widget Sheet */}
              <div class="absolute inset-x-3 bottom-5 z-20 transition-all duration-300">
                <div
                  style={{
                    backgroundColor: styling.bgColor,
                    borderRadius: `${styling.borderRadius}px`
                  }}
                  class="shadow-2xl border border-zinc-200/20 overflow-hidden relative"
                >
                  {/* Step Content Render */}
                  {activeStep === 1 && (
                    <InitialStep
                      content={content}
                      styling={styling}
                      onNext={() => setActiveStep(2)}
                    />
                  )}
                  {activeStep === 2 && (
                    <FeedbackStep
                      content={content}
                      styling={styling}
                      onSubmit={() => setActiveStep(3)}
                    />
                  )}
                  {activeStep === 3 && (
                    <ThankYouStep
                      content={content}
                      styling={styling}
                      onReset={() => setActiveStep(1)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Compact / Standalone Card View
          <div className="w-full flex items-center justify-center p-4">
            <div
              style={{
                backgroundColor: styling.bgColor,
                borderRadius: `${styling.borderRadius}px`
              }}
              class="w-full max-w-[320px] shadow-2xl border border-zinc-700/40 overflow-hidden"
            >
              {activeStep === 1 && (
                <InitialStep
                  content={content}
                  styling={styling}
                  onNext={() => setActiveStep(2)}
                />
              )}
              {activeStep === 2 && (
                <FeedbackStep
                  content={content}
                  styling={styling}
                  onSubmit={() => setActiveStep(3)}
                />
              )}
              {activeStep === 3 && (
                <ThankYouStep
                  content={content}
                  styling={styling}
                  onReset={() => setActiveStep(1)}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Info Badge */}
      <div class="text-[11px] text-zinc-500 flex items-center gap-1.5">
        <Sparkles class="w-3 h-3 text-indigo-400" />
        <span>Live Preview syncs automatically without page refresh</span>
      </div>
    </div>
  );
}
