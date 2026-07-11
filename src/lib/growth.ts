// 대표가 실제로 기획·개발·운영 중인 사이트(coachingpass.co.kr)의 방문자 애널리틱스 실측 데이터.
// 리영컴퍼니의 회사 실적이 아닌 대표 개인 수행 이력입니다 — About "대표 스토리"에서만 사용합니다.
export interface MonthlyVisitors {
  date: string; // "YYYY-MM"
  visitors: number;
}

export const CASE_STUDY = {
  siteName: "코칭패스 (합격의 열쇠)",
  siteUrl: "https://coachingpass.co.kr",
  category: "온라인 원격학원 (1:1 면접·자소서 코칭)",
  launchLabel: "2022년 12월 오픈",
  role: "기획·개발·운영 전담 (비전공, AI 활용 자체 개발)",
};

// 전체 월별 방문자 (2023.01 ~ 2026.07). 마지막 달은 진행 중인 달로 다른 달과 합산 기준이 다릅니다.
export const MONTHLY_VISITORS: MonthlyVisitors[] = [
  { date: "2023-01", visitors: 469 },
  { date: "2023-02", visitors: 551 },
  { date: "2023-03", visitors: 1066 },
  { date: "2023-04", visitors: 1200 },
  { date: "2023-05", visitors: 1784 },
  { date: "2023-06", visitors: 1028 },
  { date: "2023-07", visitors: 1480 },
  { date: "2023-08", visitors: 1176 },
  { date: "2023-09", visitors: 1128 },
  { date: "2023-10", visitors: 1947 },
  { date: "2023-11", visitors: 2216 },
  { date: "2023-12", visitors: 1690 },
  { date: "2024-01", visitors: 1095 },
  { date: "2024-02", visitors: 1267 },
  { date: "2024-03", visitors: 1804 },
  { date: "2024-04", visitors: 2542 },
  { date: "2024-05", visitors: 3382 },
  { date: "2024-06", visitors: 3587 },
  { date: "2024-07", visitors: 3927 },
  { date: "2024-08", visitors: 3778 },
  { date: "2024-09", visitors: 4769 },
  { date: "2024-10", visitors: 6182 },
  { date: "2024-11", visitors: 8377 },
  { date: "2024-12", visitors: 5345 },
  { date: "2025-01", visitors: 5872 },
  { date: "2025-02", visitors: 6504 },
  { date: "2025-03", visitors: 8244 },
  { date: "2025-04", visitors: 7423 },
  { date: "2025-05", visitors: 7689 },
  { date: "2025-06", visitors: 6742 },
  { date: "2025-07", visitors: 6654 },
  { date: "2025-08", visitors: 27546 },
  { date: "2025-09", visitors: 18917 },
  { date: "2025-10", visitors: 12362 },
  { date: "2025-11", visitors: 11877 },
  { date: "2025-12", visitors: 51078 },
  { date: "2026-01", visitors: 73400 },
  { date: "2026-02", visitors: 52746 },
  { date: "2026-03", visitors: 49095 },
  { date: "2026-04", visitors: 41401 },
  { date: "2026-05", visitors: 47306 },
  { date: "2026-06", visitors: 36493 },
  { date: "2026-07", visitors: 13744 }, // 진행 중인 달 (월 중 집계) — 차트에서는 제외
];

// 차트에는 마감된 달까지만 표시 (진행 중인 달은 저조하게 보여 추세를 왜곡함)
export const CHART_DATA = MONTHLY_VISITORS.slice(0, -1);

export const CUMULATIVE_VISITORS = MONTHLY_VISITORS.reduce((sum, m) => sum + m.visitors, 0);

const START = MONTHLY_VISITORS[0];
const PEAK = MONTHLY_VISITORS.reduce((max, m) => (m.visitors > max.visitors ? m : max), MONTHLY_VISITORS[0]);

export const GROWTH_STATS = {
  startMonthly: START.visitors,
  startLabel: "2023년 1월",
  peakMonthly: PEAK.visitors,
  peakLabel: `${PEAK.date.slice(0, 4)}년 ${Number(PEAK.date.slice(5))}월`,
  growthMultiple: Math.round(PEAK.visitors / START.visitors),
  cumulativeVisitors: CUMULATIVE_VISITORS,
};
