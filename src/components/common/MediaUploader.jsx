import React, { useState } from 'react';
import { Upload, Link as LinkIcon, Image as ImageIcon, Sparkles, Check } from 'lucide-react';
import { PRESET_MEDIA } from '../../constants/defaultConfig';

export default function MediaUploader({ value, mediaType, onChange }) {
  const [activeTab, setActiveTab] = useState('presets'); // 'presets' | 'url' | 'upload'
  const [customUrl, setCustomUrl] = useState(value || '');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = event.target.result;
        let type = 'image';
        if (file.name.endsWith('.gif')) type = 'gif';
        if (file.name.endsWith('.json')) type = 'lottie';
        onChange(fileData, type);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlApply = () => {
    if (customUrl.trim()) {
      let type = 'image';
      if (customUrl.toLowerCase().includes('.gif')) type = 'gif';
      if (customUrl.toLowerCase().includes('.json')) type = 'lottie';
      onChange(customUrl.trim(), type);
    }
  };

  return (
    <div class="space-y-3 bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800">
      <div class="flex items-center justify-between">
        <label class="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
          <ImageIcon class="w-3.5 h-3.5 text-indigo-400" />
          Thank You Screen Media
        </label>
        <div class="flex bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 text-[11px]">
          <button
            type="button"
            onClick={() => setActiveTab('presets')}
            class={`px-2 py-1 rounded-md transition-colors ${
              activeTab === 'presets' ? 'bg-indigo-600 text-white font-medium shadow' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Presets
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            class={`px-2 py-1 rounded-md transition-colors ${
              activeTab === 'upload' ? 'bg-indigo-600 text-white font-medium shadow' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Upload
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('url')}
            class={`px-2 py-1 rounded-md transition-colors ${
              activeTab === 'url' ? 'bg-indigo-600 text-white font-medium shadow' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            URL
          </button>
        </div>
      </div>

      {/* Preset Grid */}
      {activeTab === 'presets' && (
        <div class="grid grid-cols-4 gap-2 pt-1">
          {PRESET_MEDIA.map((item) => {
            const isSelected = value === item.url;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange(item.url, item.type)}
                class={`group relative h-16 rounded-lg overflow-hidden border transition-all ${
                  isSelected
                    ? 'border-indigo-500 ring-2 ring-indigo-500/50 scale-[1.02]'
                    : 'border-zinc-800 hover:border-zinc-700 hover:scale-[1.01]'
                }`}
              >
                <img src={item.url} alt={item.name} class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/20 transition-colors flex items-end p-1">
                  <span class="text-[10px] text-white font-medium truncate w-full drop-shadow">
                    {item.name}
                  </span>
                </div>
                {isSelected && (
                  <div class="absolute top-1 right-1 bg-indigo-600 text-white rounded-full p-0.5 shadow">
                    <Check class="w-2.5 h-2.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* File Upload Tab */}
      {activeTab === 'upload' && (
        <div class="pt-1">
          <label class="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-zinc-700 hover:border-indigo-500 rounded-xl cursor-pointer bg-zinc-900/50 hover:bg-indigo-950/20 transition-colors group">
            <div class="flex flex-col items-center justify-center pt-2 pb-3 text-center px-4">
              <Upload class="w-6 h-6 text-zinc-400 group-hover:text-indigo-400 mb-1 transition-colors" />
              <p class="text-xs font-medium text-zinc-300">
                Click or drag & drop media file
              </p>
              <p class="text-[10px] text-zinc-500 mt-0.5">
                PNG, JPG, JPEG, GIF, Lottie JSON
              </p>
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/gif, application/json"
              onChange={handleFileUpload}
              class="hidden"
            />
          </label>
        </div>
      )}

      {/* URL Input Tab */}
      {activeTab === 'url' && (
        <div class="space-y-2 pt-1">
          <div class="flex gap-2">
            <div class="relative flex-1">
              <input
                type="text"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://example.com/image.png"
                class="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
              />
              <LinkIcon class="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-2.5" />
            </div>
            <button
              type="button"
              onClick={handleUrlApply}
              class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Selected Media Preview Badge */}
      {value && (
        <div class="flex items-center gap-2 pt-1 border-t border-zinc-800/80">
          <div class="w-8 h-8 rounded bg-zinc-900 overflow-hidden border border-zinc-800 shrink-0">
            <img src={value} alt="Preview" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-[11px] text-zinc-300 font-mono truncate">{value}</p>
            <span class="inline-block text-[10px] uppercase font-semibold text-indigo-400 bg-indigo-950/80 px-1.5 py-0.2 rounded border border-indigo-900">
              {mediaType || 'image'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
