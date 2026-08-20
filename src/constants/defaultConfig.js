export const DEFAULT_CONFIG = {
  // Content Page Configuration
  content: {
    initialPage: {
      title: "We value your feedback!",
      subtitle: "Help us make App-Versal even better by sharing your quick thoughts.",
      buttonText: "Give Feedback"
    },
    feedbackPage: {
      ratingType: "stars", // "stars" | "numbers"
      optionsTitle: "What can we improve?",
      options: [
        { id: "opt-1", text: "User Interface & Experience", isPredefined: true },
        { id: "opt-2", text: "App Speed & Performance", isPredefined: true },
        { id: "opt-3", text: "New Feature Requests", isPredefined: true },
        { id: "opt-4", text: "Bug Reports & Errors", isPredefined: true }
      ],
      showCommentArea: true,
      commentPlaceholder: "Tell us more details (optional)...",
      submitButtonText: "Submit Feedback"
    },
    thankYouPage: {
      mediaUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80",
      mediaType: "image", // "image" | "gif" | "lottie"
      title: "Thank You So Much!",
      subtitle: "Your valuable feedback has been submitted successfully. We appreciate your time!",
      buttonText: "Done"
    }
  },
  // Styling Page Configuration
  styling: {
    bgColor: "#ffffff",
    cardBgColor: "#ffffff",
    titleColor: "#0f172a",
    subtitleColor: "#64748b",
    buttonColor: "#6366f1",
    buttonTextColor: "#ffffff",
    titleFontSize: 20, // px
    subtitleFontSize: 14, // px
    fontWeight: "600", // "400" | "500" | "600" | "700"
    borderRadius: 16, // px
    buttonRadius: 10, // px
    buttonWidth: "full", // "full" | "auto"
    buttonHeight: 44, // px
    ratingSelectedColor: "#f59e0b",
    ratingUnselectedColor: "#e2e8f0"
  }
};

export const PRESET_THEMES = [
  {
    id: "indigo-modern",
    name: "Indigo Modern",
    previewBg: "bg-indigo-600",
    styling: {
      bgColor: "#ffffff",
      cardBgColor: "#ffffff",
      titleColor: "#0f172a",
      subtitleColor: "#64748b",
      buttonColor: "#6366f1",
      buttonTextColor: "#ffffff",
      titleFontSize: 20,
      subtitleFontSize: 14,
      fontWeight: "600",
      borderRadius: 16,
      buttonRadius: 10,
      buttonWidth: "full",
      buttonHeight: 44,
      ratingSelectedColor: "#f59e0b",
      ratingUnselectedColor: "#e2e8f0"
    }
  },
  {
    id: "dark-emerald",
    name: "Dark Emerald",
    previewBg: "bg-emerald-600",
    styling: {
      bgColor: "#0f172a",
      cardBgColor: "#0f172a",
      titleColor: "#f8fafc",
      subtitleColor: "#94a3b8",
      buttonColor: "#10b981",
      buttonTextColor: "#0f172a",
      titleFontSize: 22,
      subtitleFontSize: 14,
      fontWeight: "700",
      borderRadius: 20,
      buttonRadius: 12,
      buttonWidth: "full",
      buttonHeight: 46,
      ratingSelectedColor: "#10b981",
      ratingUnselectedColor: "#334155"
    }
  },
  {
    id: "coral-pop",
    name: "Sunset Coral",
    previewBg: "bg-rose-500",
    styling: {
      bgColor: "#fffafb",
      cardBgColor: "#fffafb",
      titleColor: "#881337",
      subtitleColor: "#9f1239",
      buttonColor: "#f43f5e",
      buttonTextColor: "#ffffff",
      titleFontSize: 20,
      subtitleFontSize: 14,
      fontWeight: "600",
      borderRadius: 14,
      buttonRadius: 8,
      buttonWidth: "full",
      buttonHeight: 44,
      ratingSelectedColor: "#f43f5e",
      ratingUnselectedColor: "#ffe4e6"
    }
  },
  {
    id: "cyber-purple",
    name: "Cyber Neon",
    previewBg: "bg-purple-600",
    styling: {
      bgColor: "#18181b",
      cardBgColor: "#18181b",
      titleColor: "#fafafa",
      subtitleColor: "#a1a1aa",
      buttonColor: "#a855f7",
      buttonTextColor: "#ffffff",
      titleFontSize: 20,
      subtitleFontSize: 13,
      fontWeight: "600",
      borderRadius: 16,
      buttonRadius: 999, // Pill style
      buttonWidth: "full",
      buttonHeight: 48,
      ratingSelectedColor: "#c084fc",
      ratingUnselectedColor: "#3f3f46"
    }
  }
];

export const PRESET_MEDIA = [
  {
    id: "celebration",
    name: "Celebration",
    url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80",
    type: "image"
  },
  {
    id: "sparkler-party",
    name: "Sparkler Party",
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80",
    type: "image"
  },
  {
    id: "heart-success",
    name: "Warm Heart",
    url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80",
    type: "image"
  },
  {
    id: "star-glow",
    name: "Star Trophy",
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80",
    type: "image"
  }
];
