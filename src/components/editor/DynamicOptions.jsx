import React, { useState } from 'react';
import { Plus, Trash2, List, Edit3 } from 'lucide-react';

export default function DynamicOptions({ options, onChange }) {
  const [newItemText, setNewItemText] = useState('');

  const handleAdd = () => {
    if (!newItemText.trim()) return;
    const newOptions = [
      ...options,
      { id: `opt-custom-${Date.now()}`, text: newItemText.trim(), isPredefined: false }
    ];
    onChange(newOptions);
    setNewItemText('');
  };

  const handleRemove = (id) => {
    const newOptions = options.filter((opt) => opt.id !== id);
    onChange(newOptions);
  };

  const handleEdit = (id, newText) => {
    const newOptions = options.map((opt) =>
      opt.id === id && !opt.isPredefined ? { ...opt, text: newText } : opt
    );
    onChange(newOptions);
  };

  return (
    <div className="space-y-3 bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
          <List className="w-3.5 h-3.5 text-indigo-400" />
          Feedback Options
        </label>
        <span className="text-[11px] text-zinc-400 font-medium bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
          {options.length} item{options.length === 1 ? '' : 's'}
        </span>
      </div>

      {/* Options List */}
      <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
        {options.map((option, index) => {
          const isFixed = option.isPredefined || option.id.startsWith('opt-1') || option.id.startsWith('opt-2') || option.id.startsWith('opt-3') || option.id.startsWith('opt-4');

          return (
            <div
              key={option.id}
              className="flex items-center gap-2 bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <span className="text-[11px] font-bold text-zinc-500 w-4 text-center shrink-0">
                {index + 1}
              </span>

              {/* Text Display or Editable Input */}
              <div className="flex-1 min-w-0">
                {isFixed ? (
                  <span className="text-xs text-zinc-200 font-medium block px-1 py-0.5 truncate">
                    {option.text}
                  </span>
                ) : (
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={option.text}
                      onChange={(e) => handleEdit(option.id, e.target.value)}
                      placeholder="Custom option text..."
                      className="w-full bg-transparent border-0 text-xs text-zinc-100 focus:outline-none focus:ring-0 px-1 py-0.5 font-medium"
                    />
                    <Edit3 className="w-3 h-3 text-zinc-500 pointer-events-none absolute right-1" />
                  </div>
                )}
              </div>

              {/* Delete Button (Only for custom user options) */}
              {!isFixed && (
                <button
                  type="button"
                  onClick={() => handleRemove(option.id)}
                  className="text-zinc-500 hover:text-rose-400 p-1.5 rounded-md hover:bg-rose-950/40 transition-colors shrink-0"
                  title="Delete option"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Add Custom Option Bar */}
      <div className="flex items-center gap-2 pt-1 border-t border-zinc-800/80">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAdd())}
          placeholder="Add option (e.g. Customer Service)..."
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="button"
          onClick={handleAdd}
          disabled={!newItemText.trim()}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0 shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Option
        </button>
      </div>
    </div>
  );
}
