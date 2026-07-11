// 포트폴리오 목업 데이터 — 추후 Supabase `portfolio` 테이블로 이전.
// isPersonalHistory: true인 항목은 "대표 수행 이력" 배지로 표기해 회사 실적과 구분합니다. (콘텐츠 원칙 7-2)
export interface PortfolioItem {
  slug: string;
  title: string;
  summary: string;
  content: string;
  result: string;
  isPersonalHistory: boolean;
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "busan-market-ai-marketing",
    title: "부산 전통시장 소상공인 AI 마케팅 교육",
    summary: "전통시장 상인회와 함께 진행한 AI 마케팅 실습 교육",
    content:
      "부산 지역 전통시장 상인회 소속 소상공인을 대상으로 AI를 활용한 SNS 홍보·메뉴판 제작 실습 교육을 진행했습니다. 참여자 대부분이 디지털 기기에 익숙하지 않은 점을 고려해, 스마트폰만으로 따라할 수 있는 실습 위주로 커리큘럼을 구성했습니다.",
    result: "참여 상인 다수가 교육 직후 자신의 가게 홍보물에 AI로 만든 콘텐츠를 직접 적용했습니다.",
    isPersonalHistory: false,
  },
  {
    slug: "startup-ai-agent-site",
    title: "스타트업 AI 에이전트 홈페이지 구축",
    summary: "고객 문의를 자동 응대하는 AI 에이전트 탑재 홈페이지 구축",
    content:
      "초기 스타트업을 위해 브랜드 홈페이지와 함께, 방문자 문의에 자동으로 응대하는 AI 에이전트를 함께 구축했습니다. 홈페이지 오픈 이후에도 발주처가 직접 콘텐츠를 관리할 수 있도록 관리 환경을 구성했습니다.",
    result: "오픈 이후 발주처가 개발자 도움 없이 콘텐츠를 직접 갱신하고 있습니다.",
    isPersonalHistory: false,
  },
];

export function getPortfolioBySlug(slug: string) {
  return PORTFOLIO.find((p) => p.slug === slug);
}
