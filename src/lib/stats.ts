// 실적 하이라이트 목업 수치 — 반드시 발주처가 제공하는 사실 데이터로 교체 후 오픈합니다. (콘텐츠 원칙 7-2)
export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const STATS: Stat[] = [
  { label: "교육 수행 인원 (누적)", value: 500, suffix: "명+" },
  { label: "기업·기관 협업", value: 30, suffix: "개사+" },
  { label: "컨설팅·구축 프로젝트", value: 40, suffix: "건+" },
  { label: "운영 홈페이지 월 방문자", value: 1200, suffix: "명+" },
];

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export const TIMELINE: TimelineItem[] = [
  { year: "Step 1", title: "직접 겪고", desc: "소상공인·기업 현장에서 반복되는 마케팅·업무 문제를 직접 마주했습니다." },
  { year: "Step 2", title: "AI로 해결하고", desc: "그 문제를 AI로 해결하는 방법을 스스로 찾고 검증했습니다." },
  { year: "Step 3", title: "그 방법을 가르친다", desc: "검증한 방법을 다시 사장님과 기업이 스스로 할 수 있도록 가르칩니다." },
];
