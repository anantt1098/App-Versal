import React from 'react';
import { Star, Hash, MessageSquareText, Sparkles, Layers, Type } from 'lucide-react';
import DynamicOptions from './DynamicOptions';
import MediaUploader from '../common/MediaUploader';

export default function ContentEditor({ content, onChange, activePreviewStep, setActivePreviewStep }) {
  const updateInitial = (field, val) => {
    onChange({
      ...content,
      initialPage: { ...content.initialPage, [field]: val }
    });
  };

  const updateFeedback = (field, val) => {
    onChange({
      ...content,
      feedbackPage: { ...content.feedbackPage, [field]: val }
    });
  };

  const updateThankYou = (fieldOrObject, val) => {
    if (typeof fieldOrObject === 'object') {
      onChange({
        ...content,
        thankYouPage: { ...content.thankYouPage, ...fieldOrObject }
      });
    } else {
      onChange({
        ...content,
        thankYouPage: { ...content.thankYouPage, [fieldOrObject]: val }
      });
    }
  };

  return (
    <div class="space-y-6 pb-6">
      {/* 1. Initial Feedback Section */}
      <div class="bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-4 space-y-4 shadow-sm hover:border-zinc-700/80 transition-colors">
        <div class="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs flex items-center justify-center">
              1
            </span>
            <h3 class="font-semibold text-zinc-100 text-sm">Initial Feedback Screen</h3>
          </div>
          <button
            type="button"
            onClick={() => setActivePreviewStep(1)}
            class={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
              activePreviewStep === 1
                ? 'bg-indigo-600 text-white font-medium shadow-sm'
                : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Preview Screen 1
          </button>
        </div>

        <div class="space-y-3">
          <div class="space-y-1">
            <label class="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
              <Type class="w-3.5 h-3.5 text-indigo-400" />
              Title
            </label>
            <input
              type="text"
              value={content.initialPage.title}
              onChange={(e) => updateInitial('title', e.target.value)}
              placeholder="Enter initial title..."
              class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div class="space-y-1">
            <label class="text-xs font-medium text-zinc-300">Subtitle</label>
            <textarea
              rows={2}
              value={content.initialPage.subtitle}
              onChange={(e) => updateInitial('subtitle', e.target.value)}
              placeholder="Enter initial subtitle description..."
              class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          <div class="space-y-1">
            <label class="text-xs font-medium text-zinc-300">Start Button Text</label>
            <input
              type="text"
              value={content.initialPage.buttonText || 'Give Feedback'}
              onChange={(e) => updateInitial('buttonText', e.target.value)}
              placeholder="Button label..."
              class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* 2. Feedback Screen Section */}
      <div class="bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-4 space-y-4 shadow-sm hover:border-zinc-700/80 transition-colors">
        <div class="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center">
              2
            </span>
            <h3 class="font-semibold text-zinc-100 text-sm">Feedback Screen</h3>
          </div>
          <button
            type="button"
            onClick={() => setActivePreviewStep(2)}
            class={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
              activePreviewStep === 2
                ? 'bg-amber-600 text-white font-medium shadow-sm'
                : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Preview Screen 2
          </button>
        </div>

        <div class="space-y-4">
          {/* Title / Question Header Input */}
          <div class="space-y-1">
            <label class="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
              <Type class="w-3.5 h-3.5 text-amber-400" />
              Title / Question Heading (e.g., What can we improve?)
            </label>
            <input
              type="text"
              value={content.feedbackPage.optionsTitle}
              onChange={(e) => updateFeedback('optionsTitle', e.target.value)}
              placeholder="Question heading (e.g. What can we improve?)..."
              class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>

          {/* Rating Type Switcher */}
          <div class="space-y-1.5">
            <label class="text-xs font-medium text-zinc-300">Rating System Type</label>
            <div class="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => updateFeedback('ratingType', 'stars')}
                class={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all ${
                  content.feedbackPage.ratingType === 'stars'
                    ? 'bg-amber-500/10 border-amber-500 text-amber-300 shadow-sm'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Star class="w-4 h-4 fill-amber-400 text-amber-400" />
                5 Stars Rating
              </button>
              <button
                type="button"
                onClick={() => updateFeedback('ratingType', 'numbers')}
                class={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all ${
                  content.feedbackPage.ratingType === 'numbers'
                    ? 'bg-amber-500/10 border-amber-500 text-amber-300 shadow-sm'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Hash class="w-4 h-4 text-amber-400" />
                Numbers (1 – 5)
              </button>
            </div>
          </div>

          {/* Dynamic Options List */}
          <DynamicOptions
            options={content.feedbackPage.options}
            onChange={(newOpts) => updateFeedback('options', newOpts)}
          />

          {/* Additional Comment Toggle */}
          <div class="flex items-center justify-between p-3 bg-zinc-950/70 rounded-xl border border-zinc-800">
            <div class="space-y-0.5">
              <label class="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                <MessageSquareText class="w-3.5 h-3.5 text-indigo-400" />
                Additional Comment Textbox
              </label>
              <p class="text-[11px] text-zinc-400">Allow users to type custom detailed feedback</p>
            </div>
            <button
              type="button"
              onClick={() => updateFeedback('showCommentArea', !content.feedbackPage.showCommentArea)}
              class={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                content.feedbackPage.showCommentArea ? 'bg-indigo-600 justify-end' : 'bg-zinc-800 justify-start'
              }`}
            >
              <span class="w-4 h-4 bg-white rounded-full shadow-md" />
            </button>
          </div>

          {content.feedbackPage.showCommentArea && (
            <div class="space-y-1">
              <label class="text-xs font-medium text-zinc-400">Comment Placeholder</label>
              <input
                type="text"
                value={content.feedbackPage.commentPlaceholder}
                onChange={(e) => updateFeedback('commentPlaceholder', e.target.value)}
                placeholder="Placeholder text..."
                class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500"
              />
            </div>
          )}

          {/* Submit Button Text */}
          <div class="space-y-1">
            <label class="text-xs font-medium text-zinc-300">Submit Button Text</label>
            <input
              type="text"
              value={content.feedbackPage.submitButtonText}
              onChange={(e) => updateFeedback('submitButtonText', e.target.value)}
              placeholder="e.g. Submit Feedback"
              class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>
        </div>
      </div>

      {/* 3. Thank You Page Section */}
      <div class="bg-zinc-900/80 border border-zinc-800/90 rounded-2xl p-4 space-y-4 shadow-sm hover:border-zinc-700/80 transition-colors">
        <div class="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center">
              3
            </span>
            <h3 class="font-semibold text-zinc-100 text-sm">Thank You Screen</h3>
          </div>
          <button
            type="button"
            onClick={() => setActivePreviewStep(3)}
            class={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
              activePreviewStep === 3
                ? 'bg-emerald-600 text-white font-medium shadow-sm'
                : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Preview Screen 3
          </button>
        </div>

        <div class="space-y-3">
          <MediaUploader
            value={content.thankYouPage.mediaUrl}
            mediaType={content.thankYouPage.mediaType}
            onChange={(url, type) => updateThankYou({ mediaUrl: url, mediaType: type })}
          />

          <div class="space-y-1">
            <label class="text-xs font-medium text-zinc-300">Title</label>
            <input
              type="text"
              value={content.thankYouPage.title}
              onChange={(e) => updateThankYou('title', e.target.value)}
              placeholder="Thank You Title..."
              class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div class="space-y-1">
            <label class="text-xs font-medium text-zinc-300">Subtitle</label>
            <textarea
              rows={2}
              value={content.thankYouPage.subtitle}
              onChange={(e) => updateThankYou('subtitle', e.target.value)}
              placeholder="Thank You Subtitle..."
              class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          <div class="space-y-1">
            <label class="text-xs font-medium text-zinc-300">Button Text</label>
            <input
              type="text"
              value={content.thankYouPage.buttonText}
              onChange={(e) => updateThankYou('buttonText', e.target.value)}
              placeholder="Close Button Text..."
              class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-100 focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
