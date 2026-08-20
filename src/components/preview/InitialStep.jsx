import React from 'react';

export default function InitialStep({ content, styling, onNext }) {
  const { initialPage } = content;

  return (
    <div className="flex flex-col items-center text-center p-6 space-y-5">
      {/* Decorative Icon Badge */}
      <div
        style={{
          backgroundColor: `${styling.buttonColor}15`,
          borderColor: `${styling.buttonColor}30`
        }}
        className="w-14 h-14 rounded-2xl border flex items-center justify-center shadow-inner mb-1 transition-all"
      >
        <svg
          className="w-7 h-7 transition-all"
          style={{ color: styling.buttonColor }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </div>

      <div className="space-y-2 max-w-xs">
        <h2
          style={{
            color: styling.titleColor,
            fontSize: `${styling.titleFontSize}px`,
            fontWeight: styling.fontWeight
          }}
          className="leading-tight transition-all"
        >
          {initialPage.title || 'We value your feedback!'}
        </h2>
        <p
          style={{
            color: styling.subtitleColor,
            fontSize: `${styling.subtitleFontSize}px`
          }}
          className="leading-relaxed transition-all"
        >
          {initialPage.subtitle || 'Help us improve by sharing your quick thoughts.'}
        </p>
      </div>

      <div className="w-full pt-2">
        <button
          type="button"
          onClick={onNext}
          style={{
            backgroundColor: styling.buttonColor,
            color: styling.buttonTextColor,
            borderRadius: `${styling.buttonRadius}px`,
            height: `${styling.buttonHeight}px`,
            width: styling.buttonWidth === 'full' ? '100%' : 'auto',
            paddingLeft: styling.buttonWidth === 'auto' ? '24px' : '0px',
            paddingRight: styling.buttonWidth === 'auto' ? '24px' : '0px'
          }}
          className="font-semibold text-xs transition-all hover:brightness-110 active:scale-[0.98] shadow-md flex items-center justify-center mx-auto"
        >
          {initialPage.buttonText || 'Give Feedback'}
        </button>
      </div>
    </div>
  );
}
