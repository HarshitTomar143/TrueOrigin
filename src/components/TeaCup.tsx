"use client";

import React from "react";

export default function TeaCup() {
  return (
    <div className="tea-bowl-container mb-8 mx-auto">
      <svg className="tea-bowl-svg" width="100" height="80" viewBox="0 0 100 80">
        <path d="M 20 20 Q 0 80 50 80 Q 100 80 80 20 Z" fill="#6A5A4A" /> {/* Cup body */}
        <ellipse cx="50" cy="20" rx="35" ry="10" fill="#8B735C" /> {/* Cup rim */}
        <rect x="80" y="30" width="10" height="30" rx="5" ry="5" fill="#6A5A4A" /> {/* Handle part 1 */}
        <rect x="80" y="50" width="10" height="30" rx="5" ry="5" fill="#6A5A4A" transform="rotate(90 85 50)" /> {/* Handle part 2 */}
      </svg>
      <div className="steam steam-1"></div>
      <div className="steam steam-2"></div>
      <div className="steam steam-3"></div>
    </div>
  );
} 