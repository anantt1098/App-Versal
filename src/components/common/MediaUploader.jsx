import React, { useState } from 'react';
import { Upload, Link as LinkIcon, Image as ImageIcon, Check } from 'lucide-react';
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
    <div className="space-y-3 bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-indigo-400" />
          Thank You Screen Media
        </label>
        <div className="flex bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 text-[11px]">
          <button
            type="button"
            onClick={() => setActiveTab('presets')}
            className={`px-2 py-1 rounded-md transition-colors ${
              activeTab === 'presets' ? 'bg-indigo-600 text-white font-medium shadow' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Presets
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`px-2 py-1 rounded-md transition-colors ${
              activeTab === 'upload' ? 'bg-indigo-600 text-white font-medium shadow' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Upload
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`px-2 py-1 rounded-md transition-colors ${
              activeTab === 'url' ? 'bg-indigo-600 text-white font-medium shadow' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            URL
          </button>
        </div>
      </div>

      {/* Preset Grid */}
      {activeTab === 'presets' && (
        <div className="grid grid-cols-4 gap-2 pt-1">
          {PRESET_MEDIA.map((item) => {
            const isSelected = value === item.url;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange(item.url, item.type)}
                className={`group relative h-16 rounded-xl overflow-hidden border transition-all ${
                  isSelected
                    ? 'border-indigo-500 ring-2 ring-indigo-500/40 scale-[1.02]'
                    : 'border-zinc-800 hover:border-zinc-700 hover:scale-[1.01]'
                }`}
              >
                <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/20 transition-colors flex items-end p-1">
                  <span className="text-[10px] text-white font-medium truncate w-full drop-shadow">
                    {item.name}
                  </span>
                </div>
                {isSelected && (
                  <div className="absolute top-1 right-1 bg-indigo-600 text-white rounded-full p-0.5 shadow">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* File Upload Tab */}
      {activeTab === 'upload' && (
        <div className="pt-1">
          <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-zinc-700 hover:border-indigo-500 rounded-xl cursor-pointer bg-zinc-900/50 hover:bg-indigo-950/20 transition-colors group">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <Upload className="w-6 h-6 text-zinc-400 group-hover:text-indigo-400 mb-1 transition-colors" />
              <p className="text-xs font-medium text-zinc-300">
                Click or drag & drop media file
              </p>
              <p className="text-[10px] text-zinc-500 mt-0.5">
                PNG, JPG, JPEG, GIF, Lottie JSON
              </p>
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/gif, application/json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      )}

      {/* URL Input Tab */}
      {activeTab === 'url' && (
        <div className="space-y-2 pt-1">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://example.com/image.png"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
              />
              <LinkIcon className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-2.5" />
            </div>
            <button
              type="button"
              onClick={handleUrlApply}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Selected Media Preview Badge */}
      {value && (
        <div className="flex items-center gap-2 pt-1 border-t border-zinc-800/80">
          <div className="w-8 h-8 rounded bg-zinc-900 overflow-hidden border border-zinc-800 shrink-0">
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-zinc-300 font-mono truncate">{value}</p>
            <span className="inline-block text-[10px] uppercase font-semibold text-indigo-400 bg-indigo-950/80 px-1.5 py-0.2 rounded border border-indigo-900">
              {mediaType || 'image'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
