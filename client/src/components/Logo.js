import React from 'react';

export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: '8px' }}
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#5d2d4a" strokeWidth="3" />
      
      {/* Inner pearl with decorative swirls */}
      <defs>
        <radialGradient id="pearlGradient" cx="35%" cy="35%">
          <stop offset="0%" style={{ stopColor: '#f0e6e8', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#d4a5b0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8b5a6a', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      
      {/* Pearl sphere */}
      <circle cx="50" cy="45" r="20" fill="url(#pearlGradient)" />
      
      {/* Decorative swirls around pearl */}
      <path d="M 40 30 Q 35 25 40 20 Q 45 15 50 20" fill="none" stroke="#5d2d4a" strokeWidth="2" strokeLinecap="round" />
      <path d="M 50 20 Q 55 15 60 20 Q 65 25 60 30" fill="none" stroke="#5d2d4a" strokeWidth="2" strokeLinecap="round" />
      <path d="M 60 30 Q 65 35 60 40 Q 55 45 50 40" fill="none" stroke="#5d2d4a" strokeWidth="2" strokeLinecap="round" />
      <path d="M 50 40 Q 45 45 40 40 Q 35 35 40 30" fill="none" stroke="#5d2d4a" strokeWidth="2" strokeLinecap="round" />
      
      {/* Small decorative dots */}
      <circle cx="45" cy="22" r="2" fill="#5d2d4a" />
      <circle cx="55" cy="22" r="2" fill="#5d2d4a" />
      <circle cx="62" cy="35" r="2" fill="#5d2d4a" />
      <circle cx="55" cy="50" r="2" fill="#5d2d4a" />
      <circle cx="45" cy="50" r="2" fill="#5d2d4a" />
    </svg>
  );
}
