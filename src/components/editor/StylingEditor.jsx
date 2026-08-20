import React from 'react';
import { Palette, Type, Layout, Star, SlidersHorizontal } from 'lucide-react';
import ColorPicker from '../common/ColorPicker';
import SliderControl from '../common/SliderControl';

export default function StylingEditor({ styling, onChange }) {
  const updateStyle = (key, value) => {
    onChange({ ...styling, [key]: value });
  };

  return (
    <div class="space-y-6 pb-6">
      {/* 1. Color Palette Section */}
      <div class="bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-4 space-y-4 shadow-sm hover:border-zinc-700/80 transition-colors">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
          <Palette class="w-4 h-4 text-indigo-400" />
          <h3 class="font-semibold text-zinc-100 text-sm">Colors & Themes</h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ColorPicker
            label="Background Color"
            value={styling.bgColor}
            onChange={(val) => updateStyle('bgColor', val)}
            presets={['#ffffff', '#09090b', '#18181b', '#f8fafc', '#fffafb']}
          />

          <ColorPicker
            label="Title Color"
            value={styling.titleColor}
            onChange={(val) => updateStyle('titleColor', val)}
            presets={['#0f172a', '#ffffff', '#18181b', '#6366f1']}
          />

          <ColorPicker
            label="Subtitle Color"
            value={styling.subtitleColor}
            onChange={(val) => updateStyle('subtitleColor', val)}
            presets={['#64748b', '#a1a1aa', '#71717a', '#d4d4d8']}
          />

          <ColorPicker
            label="Button Background Color"
            value={styling.buttonColor}
            onChange={(val) => updateStyle('buttonColor', val)}
            presets={['#6366f1', '#10b981', '#f43f5e', '#a855f7', '#18181b']}
          />

          <ColorPicker
            label="Button Text Color"
            value={styling.buttonTextColor}
            onChange={(val) => updateStyle('buttonTextColor', val)}
            presets={['#ffffff', '#09090b', '#f8fafc', '#10b981']}
          />
        </div>
      </div>

      {/* 2. Rating Colors */}
      <div class="bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-4 space-y-4 shadow-sm hover:border-zinc-700/80 transition-colors">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
          <Star class="w-4 h-4 text-amber-400" />
          <h3 class="font-semibold text-zinc-100 text-sm">Rating Colors</h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ColorPicker
            label="Selected Rating Color"
            value={styling.ratingSelectedColor}
            onChange={(val) => updateStyle('ratingSelectedColor', val)}
            presets={['#f59e0b', '#10b981', '#f43f5e', '#6366f1', '#eab308']}
          />

          <ColorPicker
            label="Unselected Rating Color"
            value={styling.ratingUnselectedColor}
            onChange={(val) => updateStyle('ratingUnselectedColor', val)}
            presets={['#e2e8f0', '#27272a', '#cbd5e1', '#ffe4e6', '#3f3f46']}
          />
        </div>
      </div>

      {/* 3. Typography (Font Size & Weight) */}
      <div class="bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-4 space-y-4 shadow-sm hover:border-zinc-700/80 transition-colors">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
          <Type class="w-4 h-4 text-indigo-400" />
          <h3 class="font-semibold text-zinc-100 text-sm">Typography (Font Size & Weight)</h3>
        </div>

        <div class="space-y-4">
          <SliderControl
            label="Title Font Size"
            value={styling.titleFontSize}
            onChange={(val) => updateStyle('titleFontSize', val)}
            min={14}
            max={32}
            step={1}
            unit="px"
          />

          <SliderControl
            label="Subtitle Font Size"
            value={styling.subtitleFontSize}
            onChange={(val) => updateStyle('subtitleFontSize', val)}
            min={11}
            max={20}
            step={1}
            unit="px"
          />

          <div class="space-y-1.5">
            <div class="flex justify-between text-xs font-medium text-zinc-300">
              <span>Font Weight</span>
              <span class="text-indigo-400 font-mono font-semibold">{styling.fontWeight}</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
              {[
                { weight: '400', label: 'Regular' },
                { weight: '500', label: 'Medium' },
                { weight: '600', label: 'SemiBold' },
                { weight: '700', label: 'Bold' }
              ].map((fw) => (
                <button
                  key={fw.weight}
                  type="button"
                  onClick={() => updateStyle('fontWeight', fw.weight)}
                  class={`py-2 px-2 rounded-xl text-xs border font-semibold transition-all ${
                    styling.fontWeight === fw.weight
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {fw.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Layout & Dimensions (Border Radius, Button Width & Height) */}
      <div class="bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-4 space-y-4 shadow-sm hover:border-zinc-700/80 transition-colors">
        <div class="flex items-center gap-2 border-b border-zinc-800 pb-3">
          <Layout class="w-4 h-4 text-indigo-400" />
          <h3 class="font-semibold text-zinc-100 text-sm">Layout & Dimensions</h3>
        </div>

        <div class="space-y-4">
          <SliderControl
            label="Modal & Card Border Radius"
            value={styling.borderRadius}
            onChange={(val) => updateStyle('borderRadius', val)}
            min={0}
            max={36}
            step={2}
            unit="px"
          />

          <SliderControl
            label="Button Corner Radius"
            value={styling.buttonRadius}
            onChange={(val) => updateStyle('buttonRadius', val)}
            min={0}
            max={99}
            step={2}
            unit="px"
          />

          <SliderControl
            label="Button Height"
            value={styling.buttonHeight}
            onChange={(val) => updateStyle('buttonHeight', val)}
            min={32}
            max={64}
            step={2}
            unit="px"
          />

          <div class="space-y-1.5">
            <label class="text-xs font-medium text-zinc-300">Button Width Mode</label>
            <div class="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => updateStyle('buttonWidth', 'full')}
                class={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                  styling.buttonWidth === 'full'
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Full Width (100%)
              </button>
              <button
                type="button"
                onClick={() => updateStyle('buttonWidth', 'auto')}
                class={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                  styling.buttonWidth === 'auto'
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Compact (Fit Text)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
