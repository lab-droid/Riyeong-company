import { useId } from "react";

// 시안 A "배움의 길" — ㄹ을 이어진 길로 그린 심볼. public/favicon.svg와 동일한 도형을 유지할 것.
export function LogoMark({ size = 36, className }: { size?: number; className?: string }) {
  const gradientId = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2C53D9" />
          <stop offset="1" stopColor="#182E6C" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill={`url(#${gradientId})`} />
      <path
        d="M21 20.5 H43 V31.5 H21 V42.5 H37"
        fill="none"
        stroke="#fff"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="45.5" cy="42.5" r="4" fill="#EC9D40" />
    </svg>
  );
}
