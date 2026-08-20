import React from 'react';

export default function ThankYouStep({ content, styling, onReset }) {
  const { thankYouPage } = content;

  return (
    <div class="flex flex-col items-center text-center p-6 space-y-4">
      {/* Thank You Media (Image / GIF / Lottie) */}
      {thankYouPage.mediaUrl && (
        <div class="relative w-24 h-24 rounded-2xl overflow-hidden shadow-lg border border-white/20 my-1 bg-slate-900 flex items-center justify-center shrink-0 group">
          <img
            src={thankYouPage.mediaUrl}
            alt="Thank you visual"
            class="w-full h-full object-cover transition-transform group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400';
            }}
          />
        </div>
      )}

      {/* Copy */}
      <div class="space-y-2 max-w-xs">
        <h2
          style={{
            color: styling.titleColor,
            fontSize: `${styling.titleFontSize}px`,
            fontWeight: styling.fontWeight
          }}
          class="leading-tight transition-all"
        >
          {thankYouPage.title || 'Thank You!'}
        </h2>
        <p
          style={{
            color: styling.subtitleColor,
            fontSize: `${styling.subtitleFontSize}px`
          }}
          class="leading-relaxed transition-all"
        >
          {thankYouPage.subtitle || 'Your feedback has been received.'}
        </p>
      </div>

      {/* Done / Close Button */}
      <div class="w-full pt-2">
        <button
          type="button"
          onClick={onReset}
          style={{
            backgroundColor: styling.buttonColor,
            color: styling.buttonTextColor,
            borderRadius: `${styling.buttonRadius}px`,
            height: `${styling.buttonHeight}px`,
            width: styling.buttonWidth === 'full' ? '100%' : 'auto',
            paddingLeft: styling.buttonWidth === 'auto' ? '24px' : '0px',
            paddingRight: styling.buttonWidth === 'auto' ? '24px' : '0px'
          }}
          class="font-semibold text-xs transition-all hover:brightness-110 active:scale-[0.98] shadow-md flex items-center justify-center mx-auto"
        >
          {thankYouPage.buttonText || 'Done'}
        </button>
      </div>
    </div>
  );
}
