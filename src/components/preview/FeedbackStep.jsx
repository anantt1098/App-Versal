import React, { useState } from 'react';
import { Star, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FeedbackStep({ content, styling, onSubmit }) {
  const { feedbackPage } = content;
  const [selectedRating, setSelectedRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([feedbackPage.options[0]?.id || '']);
  const [commentText, setCommentText] = useState('');

  const toggleOption = (id) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      console.log('Confetti error', err);
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-5 space-y-4">
      {/* Header */}
      <div className="text-center space-y-1">
        <h2
          style={{
            color: styling.titleColor,
            fontSize: `${styling.titleFontSize}px`,
            fontWeight: styling.fontWeight
          }}
          className="leading-tight transition-all"
        >
          {feedbackPage.optionsTitle || 'How was your experience?'}
        </h2>
      </div>

      {/* Rating Picker */}
      <div className="flex items-center justify-center gap-1.5 py-1">
        {feedbackPage.ratingType === 'stars' ? (
          [1, 2, 3, 4, 5].map((starVal) => {
            const isFilled = (hoverRating || selectedRating) >= starVal;
            return (
              <button
                key={starVal}
                type="button"
                onMouseEnter={() => setHoverRating(starVal)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setSelectedRating(starVal)}
                className="p-1 transition-transform hover:scale-125 focus:outline-none"
              >
                <Star
                  className="w-7 h-7 transition-colors"
                  style={{
                    fill: isFilled ? styling.ratingSelectedColor : 'transparent',
                    color: isFilled ? styling.ratingSelectedColor : styling.ratingUnselectedColor,
                    strokeWidth: isFilled ? 1 : 1.5
                  }}
                />
              </button>
            );
          })
        ) : (
          [1, 2, 3, 4, 5].map((numVal) => {
            const isSelected = selectedRating === numVal;
            return (
              <button
                key={numVal}
                type="button"
                onClick={() => setSelectedRating(numVal)}
                style={{
                  backgroundColor: isSelected ? styling.ratingSelectedColor : 'transparent',
                  color: isSelected ? '#ffffff' : styling.titleColor,
                  borderColor: isSelected ? styling.ratingSelectedColor : styling.ratingUnselectedColor
                }}
                className="w-8 h-8 rounded-full border text-xs font-bold transition-all hover:scale-110 flex items-center justify-center"
              >
                {numVal}
              </button>
            );
          })
        )}
      </div>

      {/* Dynamic Options */}
      {feedbackPage.options.length > 0 && (
        <div className="space-y-1.5">
          <div className="flex flex-wrap gap-1.5 justify-center max-h-36 overflow-y-auto py-1">
            {feedbackPage.options.map((opt) => {
              const isChecked = selectedOptions.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleOption(opt.id)}
                  style={{
                    borderColor: isChecked ? styling.buttonColor : `${styling.subtitleColor}30`,
                    backgroundColor: isChecked ? `${styling.buttonColor}15` : 'transparent',
                    color: isChecked ? styling.buttonColor : styling.titleColor
                  }}
                  className="px-2.5 py-1 rounded-full border text-[11px] font-medium transition-all flex items-center gap-1 hover:scale-[1.02]"
                >
                  {isChecked && <Check className="w-3 h-3" />}
                  <span>{opt.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Additional Comment Text Area */}
      {feedbackPage.showCommentArea && (
        <div className="space-y-1">
          <textarea
            rows={2}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder={feedbackPage.commentPlaceholder || 'Tell us more details (optional)...'}
            style={{
              borderColor: `${styling.subtitleColor}40`,
              color: styling.titleColor,
              backgroundColor: `${styling.subtitleColor}08`
            }}
            className="w-full rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none transition-all"
          />
        </div>
      )}

      {/* Submit Action Button */}
      <div className="w-full pt-1">
        <button
          type="submit"
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
          {feedbackPage.submitButtonText || 'Submit Feedback'}
        </button>
      </div>
    </form>
  );
}
