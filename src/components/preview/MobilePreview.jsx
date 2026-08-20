import React, { useState } from 'react';
import { Smartphone, Monitor, RotateCcw, Wifi, Battery, Signal, Sparkles, ChevronRight, X } from 'lucide-react';
import InitialStep from './InitialStep';
import FeedbackStep from './FeedbackStep';
import ThankYouStep from './ThankYouStep';

export default function MobilePreview({ content, styling, activeStep, setActiveStep }) {
  const [deviceFrame, setDeviceFrame] = useState('iphone'); // 'iphone' | 'compact'
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex flex-col items-center w-full h-full justify-between space-y-2.5">
      {/* Top Device & Step Control Bar */}
      <div className="w-full bg-zinc-900/90 backdrop-blur-md p-2 rounded-xl border border-zinc-800 flex flex-wrap items-center justify-between gap-2 shadow-lg shrink-0">
        {/* Step Tabs */}
        <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
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
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
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
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeStep === 3
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            3. Thank You
          </button>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
          <button
            type="button"
            onClick={() => setDeviceFrame('iphone')}
            title="iPhone View"
            className={`p-1.5 rounded-md transition-colors ${
              deviceFrame === 'iphone' ? 'bg-zinc-800 text-indigo-400' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setDeviceFrame('compact')}
            title="Card Only View"
            className={`p-1.5 rounded-md transition-colors ${
              deviceFrame === 'compact' ? 'bg-zinc-800 text-indigo-400' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Device Mockup Body */}
      <div className="flex-1 w-full flex items-center justify-center py-1">
        {deviceFrame === 'iphone' ? (
          // Dynamic fitting iPhone shell
          <div className="relative w-[280px] h-[510px] sm:w-[290px] sm:h-[530px] bg-zinc-950 rounded-[42px] p-2.5 shadow-2xl ring-1 ring-white/10 border-[5px] border-zinc-800 flex flex-col overflow-hidden shrink-0">
            {/* Dynamic Island Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-22 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 border border-zinc-800" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/40" />
            </div>

            {/* Mobile Status Bar */}
            <div className="flex items-center justify-between px-5 pt-1 pb-1 text-[10px] font-semibold text-zinc-300 z-20">
              <span>{currentTime}</span>
              <div className="flex items-center gap-1.5">
                <Signal className="w-3 h-3 text-zinc-300" />
                <Wifi className="w-3 h-3 text-zinc-300" />
                <Battery className="w-3.5 h-3.5 text-zinc-300" />
              </div>
            </div>

            {/* Simulated Host App Background */}
            <div className="relative flex-1 w-full rounded-[30px] bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950/90 overflow-hidden p-3 flex flex-col justify-between">
              {/* Dummy Host App Top Bar */}
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-5.5 h-5.5 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-[9px] text-white shadow">
                    AV
                  </div>
                  <span className="text-[10px] font-bold text-zinc-200">App-Versal App</span>
                </div>
                <span className="text-[9px] text-indigo-400 bg-indigo-950/80 px-1.5 py-0.2 rounded-full border border-indigo-800">
                  PRO
                </span>
              </div>

              {/* Dummy Host App Content */}
              <div className="space-y-2 py-2 opacity-25">
                <div className="h-14 bg-zinc-800/60 rounded-xl p-2 flex flex-col justify-between">
                  <div className="w-14 h-2 bg-zinc-700 rounded-full" />
                  <div className="w-24 h-3 bg-indigo-500/50 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 bg-zinc-800/40 rounded-lg" />
                  <div className="h-12 bg-zinc-800/40 rounded-lg" />
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-20 h-1 bg-zinc-600/60 rounded-full mx-auto mb-0.5 z-30" />

              {/* Overlay Feedback Widget Sheet */}
              <div className="absolute inset-x-2 bottom-3 z-20 transition-all duration-300">
                <div
                  style={{
                    backgroundColor: styling.bgColor,
                    borderRadius: `${styling.borderRadius}px`
                  }}
                  className="shadow-2xl border border-zinc-200/20 overflow-hidden relative"
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
          <div className="w-full flex items-center justify-center p-2">
            <div
              style={{
                backgroundColor: styling.bgColor,
                borderRadius: `${styling.borderRadius}px`
              }}
              className="w-full max-w-[280px] shadow-2xl border border-zinc-700/40 overflow-hidden"
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
      <div className="text-[10px] text-zinc-500 flex items-center gap-1.5 shrink-0 pt-0.5">
        <Sparkles className="w-3 h-3 text-indigo-400" />
        <span>Live Preview syncs automatically without page refresh</span>
      </div>
    </div>
  );
}
