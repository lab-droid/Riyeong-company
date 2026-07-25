// 실적 하이라이트 — 대표가 직접 운영 중인 사이트의 실측 데이터(growth.ts)와
// 검증 가능한 사실·약속으로 구성. (컨설팅 수행 건수 등은 리영컴퍼니 자체 실적이
// 쌓이는 대로 별도 항목으로 추가 예정)
import { GROWTH_STATS } from "@/lib/growth";

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const STATS: Stat[] = [
  { label: "월 최고 방문자 (실측)", value: GROWTH_STATS.peakMonthly, suffix: "명" },
  { label: "누적 방문자 (2023~2026)", value: GROWTH_STATS.cumulativeVisitors, suffix: "명+" },
  { label: "AI 실무 활용", value: 4, suffix: "년차" },
  { label: "견적·서류 회신", value: 1, suffix: "영업일 이내" },
];

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export const TIMELINE: TimelineItem[] = [
  { year: "Step 1", title: "직접 겪고", desc: "소상공인·기업 현장에서 반복되는 마케팅·업무 문제를 직접 마주했습니다." },
  { year: "Step 2", title: "AI로 해결하고", desc: "그 문제를 AI로 해결하는 방법을 스스로 찾고 검증했습니다." },
  { year: "Step 3", title: "그 방법을 컨설팅한다", desc: "검증한 방법으로 AI 맞춤 경영 컨설팅을 진행해 사장님과 기업이 스스로 성장할 수 있도록 돕습니다." },
];
