// 포트폴리오 데이터 — 추후 Supabase `portfolio` 테이블로 이전.
// isPersonalHistory: true인 항목은 "대표 수행 이력" 배지로 표기해 회사 실적과 구분합니다. (콘텐츠 원칙 7-2)
//
// ⚠️ 주의: 아래 항목 중 상당수는 서비스 구조에 맞춰 기획된 예시 초안입니다.
// 배포 전 반드시 실제 수행 사례의 사실관계(업체·시기·성과)로 교체·검증해야 합니다.
// 실제 사례가 아닌 항목을 실제처럼 게시하면 허위·과장 광고에 해당할 수 있습니다.

export type PortfolioCategory =
  | "AI 경영 진단"
  | "AI 자동화 구축"
  | "홈페이지 구축"
  | "CRM 구축"
  | "기관 협력";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  summary: string;
  content: string;
  result: string;
  highlight: string; // 카드에 노출되는 핵심 성과 한 줄
  isPersonalHistory: boolean;
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "AI 경영 진단",
  "AI 자동화 구축",
  "홈페이지 구축",
  "CRM 구축",
  "기관 협력",
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "coachingpass-online-academy",
    title: "온라인 원격학원 사이트 직접 개발·운영 (코칭패스)",
    category: "홈페이지 구축",
    summary: "비전공 상태에서 AI만 활용해 직접 개발하고, 4년째 운영하며 월 방문자 7만 명까지 성장시킨 사이트",
    content:
      "대표가 2022년 12월 오픈부터 지금까지 기획·개발·운영을 전담하고 있는 1:1 면접·자소서 코칭 온라인 학원 사이트입니다. 개발 경력이 없는 상태에서 AI 도구만으로 사이트를 직접 구축했고, 콘텐츠 전략과 검색 유입 구조도 데이터를 보며 스스로 개선해 왔습니다.",
    result: "2023년 1월 월 469명이던 방문자가 2026년 1월 월 73,400명까지 성장했습니다. 애널리틱스 실측 데이터는 회사소개 페이지에서 그래프로 공개하고 있습니다.",
    highlight: "월 방문자 469명 → 73,400명 (156배)",
    isPersonalHistory: true,
  },
  {
    slug: "busan-cafe-diagnosis",
    title: "부산 카페 매출 구조 진단·개선",
    category: "AI 경영 진단",
    summary: "리영솔루션으로 시간대별 매출·메뉴 데이터를 분석해 저수익 구간의 원인을 찾아낸 사례",
    content:
      "매출은 유지되는데 순이익이 계속 줄어드는 부산 시내 카페를 리영솔루션으로 진단했습니다. POS 데이터를 시간대·메뉴 단위로 분석한 결과, 원가율 높은 메뉴가 피크 시간대 주문을 잠식하고 있다는 점과 오후 유휴 시간대의 고정비 부담이 핵심 원인으로 나타났습니다.",
    result: "메뉴 구성 재편과 오후 시간대 세트 상품 도입을 제안했고, 사장님이 직접 실행할 수 있는 주간 점검 체크리스트를 전수했습니다.",
    highlight: "저수익 원인 2가지 데이터로 특정",
    isPersonalHistory: false,
  },
  {
    slug: "delivery-restaurant-profit",
    title: "배달 중심 음식점 수익성 진단",
    category: "AI 경영 진단",
    summary: "배달앱 수수료·광고비를 포함한 실질 마진을 메뉴별로 계산해 가격 전략을 다시 세운 사례",
    content:
      "배달 매출이 늘어도 남는 게 없다는 음식점의 정산 내역과 메뉴별 주문 데이터를 리영솔루션으로 분석했습니다. 배달앱 수수료·광고비·포장비까지 반영한 메뉴별 실질 마진을 계산하자, 주력이라 믿었던 메뉴가 사실상 역마진이라는 결과가 나왔습니다.",
    result: "역마진 메뉴의 가격·구성 조정안과 광고비 배분 기준을 제안하고, 매월 스스로 마진을 점검하는 방법을 전수했습니다.",
    highlight: "메뉴별 실질 마진 전수 계산",
    isPersonalHistory: false,
  },
  {
    slug: "online-shop-funnel",
    title: "온라인 쇼핑몰 구매 전환 진단",
    category: "AI 경영 진단",
    summary: "유입은 많은데 구매가 없는 쇼핑몰의 이탈 지점을 데이터로 찾아낸 사례",
    content:
      "광고비를 늘려도 매출이 따라오지 않는 온라인 쇼핑몰의 유입~구매 데이터를 분석했습니다. 방문자 대부분이 상품 상세 페이지까지는 도달하지만 배송비 확인 단계에서 이탈한다는 패턴을 확인했고, 광고 소재와 실제 상품 구성의 불일치도 함께 발견했습니다.",
    result: "배송비 정책 개선안과 광고 소재-상세페이지 메시지 일치 가이드를 제안했습니다.",
    highlight: "핵심 이탈 지점 1곳 특정",
    isPersonalHistory: false,
  },
  {
    slug: "smartstore-food-brand",
    title: "식품 브랜드 스마트스토어 운영 진단",
    category: "AI 경영 진단",
    summary: "리뷰·검색 키워드 데이터를 분석해 상위 노출을 가로막던 요인을 정리한 사례",
    content:
      "오프라인에서는 자리를 잡았지만 스마트스토어 매출이 정체된 식품 브랜드를 진단했습니다. 검색 키워드와 리뷰 데이터를 AI로 분석해, 고객이 실제로 검색하는 표현과 상품명·태그가 어긋나 있다는 점을 확인했습니다.",
    result: "상품명·태그·상세페이지 키워드 정비안을 제안하고, 사장님이 직접 키워드를 점검하는 방법을 전수했습니다.",
    highlight: "검색-상품명 불일치 키워드 정비",
    isPersonalHistory: false,
  },
  {
    slug: "manufacturing-quote-automation",
    title: "소규모 제조업체 견적·발주 업무 자동화",
    category: "AI 자동화 구축",
    summary: "매일 반복되는 견적서·발주서 작성을 AI 자동화로 전환한 사례",
    content:
      "직원 4명이 견적서와 발주 서류 작성에 매일 상당한 시간을 쓰던 제조업체의 업무를 진단하고, 거래처·품목 정보를 입력하면 견적서 초안이 자동 생성되는 체계를 구축했습니다. 기존 엑셀 자료를 그대로 활용할 수 있도록 설계해 도입 부담을 줄였습니다.",
    result: "견적서 작성 과정이 수기 작성에서 검토·확정 중심으로 바뀌었고, 담당 직원이 직접 양식을 수정할 수 있도록 전수했습니다.",
    highlight: "견적서 작성, 수기에서 자동 생성으로",
    isPersonalHistory: false,
  },
  {
    slug: "beauty-shop-booking-agent",
    title: "미용실 예약 응대 AI 에이전트 구축",
    category: "AI 자동화 구축",
    summary: "영업 중 놓치던 예약 문의를 AI 에이전트가 응대하도록 만든 사례",
    content:
      "시술 중에는 전화를 받지 못해 예약 문의를 놓치던 1인 미용실에 카카오톡 채널 기반 예약 응대 AI 에이전트를 구축했습니다. 시술 메뉴·소요 시간·가능 시간대를 학습시켜, 문의 접수부터 예약 확정 제안까지 자동으로 진행되도록 했습니다.",
    result: "영업시간 중 놓치는 문의가 줄었고, 원장님이 직접 응대 문구와 메뉴 정보를 수정할 수 있도록 전수했습니다.",
    highlight: "부재중 예약 문의 자동 응대",
    isPersonalHistory: false,
  },
  {
    slug: "tax-office-document-automation",
    title: "세무사무소 자료 수집 안내 자동화",
    category: "AI 자동화 구축",
    summary: "기장 고객에게 매월 반복하던 자료 요청·안내 업무를 자동화한 사례",
    content:
      "매월 초 수십 곳의 기장 고객에게 자료 요청 연락을 돌리던 세무사무소의 반복 업무를 자동화했습니다. 고객별 필요 자료 목록과 마감 일정에 맞춰 안내 메시지가 자동 발송되고, 미제출 고객만 따로 정리되는 체계를 만들었습니다.",
    result: "월초 자료 수집 안내에 쓰던 시간이 크게 줄었고, 직원이 직접 발송 문구·일정을 관리할 수 있도록 전수했습니다.",
    highlight: "월초 반복 안내 업무 자동 발송 전환",
    isPersonalHistory: false,
  },
  {
    slug: "florist-sns-automation",
    title: "꽃집 SNS 콘텐츠 제작 체계 구축",
    category: "AI 자동화 구축",
    summary: "사진 한 장으로 인스타그램 게시물 초안이 만들어지는 콘텐츠 제작 흐름을 만든 사례",
    content:
      "SNS 홍보가 중요하지만 글쓰기에 시간을 낼 수 없던 꽃집 사장님을 위해, 상품 사진을 올리면 AI가 게시물 문구·해시태그 초안을 만들어 주는 제작 흐름을 구축했습니다. 브랜드 말투를 학습시켜 사장님이 쓴 것 같은 문체를 유지하도록 했습니다.",
    result: "게시물 발행 주기가 안정됐고, 사장님이 도구를 직접 다루며 콘텐츠를 운영하고 있습니다.",
    highlight: "사진 1장 → 게시물 초안 자동 생성",
    isPersonalHistory: false,
  },
  {
    slug: "startup-ai-agent-site",
    title: "스타트업 AI 에이전트 홈페이지 구축",
    category: "홈페이지 구축",
    summary: "고객 문의를 자동 응대하는 AI 에이전트 탑재 홈페이지 구축",
    content:
      "초기 스타트업을 위해 브랜드 홈페이지와 함께, 방문자 문의에 자동으로 응대하는 AI 에이전트를 함께 구축했습니다. 홈페이지 오픈 이후에도 발주처가 직접 콘텐츠를 관리할 수 있도록 관리 환경을 구성했습니다.",
    result: "오픈 이후 발주처가 개발자 도움 없이 콘텐츠를 직접 갱신하고 있습니다.",
    highlight: "개발자 없이 자체 운영 가능한 구조",
    isPersonalHistory: false,
  },
  {
    slug: "guesthouse-homepage-booking",
    title: "게스트하우스 홈페이지·예약 문의 통합 구축",
    category: "홈페이지 구축",
    summary: "예약 플랫폼 수수료 부담을 줄이기 위한 자체 홈페이지와 문의 자동 응대 구축",
    content:
      "예약 플랫폼 수수료 부담이 컸던 게스트하우스에 자체 홈페이지를 구축하고, 객실·요금·위치 문의에 자동으로 답하는 AI 응대를 연결했습니다. 사진과 후기 중심으로 구성해 플랫폼을 거치지 않는 직접 예약 경로를 만들었습니다.",
    result: "플랫폼 외 직접 예약 문의 경로가 생겼고, 사장님이 객실 정보를 직접 수정하며 운영 중입니다.",
    highlight: "수수료 없는 직접 예약 경로 확보",
    isPersonalHistory: false,
  },
  {
    slug: "interior-lead-crm",
    title: "인테리어 업체 견적 문의 관리 CRM 구축",
    category: "CRM 구축",
    summary: "여러 채널로 흩어지던 견적 문의를 한곳에 모아 놓치지 않게 만든 사례",
    content:
      "전화·블로그·인스타그램으로 흩어져 들어오던 견적 문의를 놓치는 일이 잦았던 인테리어 업체에 문의 통합 관리 CRM을 구축했습니다. 문의 접수부터 상담·견적 발송·계약까지 단계별 상태가 한눈에 보이도록 만들고, 후속 연락 시점 알림을 붙였습니다.",
    result: "문의 누락이 줄고 상담 이력이 남기 시작했으며, 실장님이 직접 고객 상태를 관리하도록 전수했습니다.",
    highlight: "흩어진 문의 채널 1곳으로 통합",
    isPersonalHistory: false,
  },
  {
    slug: "fitness-member-crm",
    title: "피트니스 센터 회원 관리 CRM 구축",
    category: "CRM 구축",
    summary: "회원권 만료·장기 미방문 회원을 자동으로 챙기는 재등록 관리 체계 구축",
    content:
      "회원권 만료를 놓쳐 재등록 시기를 지나치는 일이 많던 피트니스 센터에 회원 관리 CRM을 구축했습니다. 만료 임박·장기 미방문 회원이 자동으로 분류되고, 시점에 맞는 안내 메시지가 발송되도록 설계했습니다.",
    result: "만료 회원 안내가 빠짐없이 나가기 시작했고, 데스크 직원이 직접 명단과 문구를 관리하도록 전수했습니다.",
    highlight: "만료·이탈 위험 회원 자동 분류",
    isPersonalHistory: false,
  },
  {
    slug: "academy-consult-crm",
    title: "보습학원 상담·등록 관리 CRM 구축",
    category: "CRM 구축",
    summary: "상담 이후 연락이 끊기던 잠재 학부모를 단계별로 관리하는 체계를 만든 사례",
    content:
      "상담은 많은데 등록으로 이어지지 않던 보습학원의 상담 데이터를 진단하고, 상담 접수부터 시범 수업·등록까지 단계별로 관리되는 CRM을 구축했습니다. 상담 후 일정 기간이 지나면 후속 안내가 나가도록 자동화했습니다.",
    result: "상담 이력이 데이터로 쌓이기 시작했고, 원장님이 직접 단계별 현황을 보며 운영하도록 전수했습니다.",
    highlight: "상담 → 등록 단계별 이탈 관리",
    isPersonalHistory: false,
  },
  {
    slug: "busan-support-org-consulting",
    title: "부산 소상공인 지원기관 협력 AI 컨설팅",
    category: "기관 협력",
    summary: "지원기관과 함께 관내 소상공인 대상 AI 경영 진단·컨설팅을 진행한 사례",
    content:
      "부산 지역 소상공인 지원기관과 협력해 관내 업체를 대상으로 AI 경영 진단·컨설팅을 진행했습니다. 업체별 데이터 상황에 맞춰 진단 범위를 조정하고, 종료 후 기관에 결과보고서를 제출하는 절차까지 수행했습니다.",
    result: "참여 업체별 진단 리포트와 개선 과제를 전달했고, 기관 요청 서류(결과보고서·정산 서류)를 기한 내 제출했습니다.",
    highlight: "기관 절차·서류까지 완수한 협력 수행",
    isPersonalHistory: false,
  },
  {
    slug: "traditional-market-consulting",
    title: "전통시장 상인회 협력 디지털 전환 지원",
    category: "기관 협력",
    summary: "전통시장 상인들의 온라인 홍보 진입을 도운 협력 프로젝트",
    content:
      "부산 지역 전통시장 상인회와 협력해 점포별 온라인 홍보 현황을 진단하고, 스마트폰만으로 실행할 수 있는 홍보 방법을 점포별 상황에 맞춰 컨설팅했습니다. 디지털 기기에 익숙하지 않은 상인분들의 눈높이에 맞춰 진행했습니다.",
    result: "참여 점포들이 AI로 만든 홍보 콘텐츠를 직접 게시하기 시작했습니다.",
    highlight: "점포별 맞춤 디지털 전환 지원",
    isPersonalHistory: false,
  },
];

export function getPortfolioBySlug(slug: string) {
  return PORTFOLIO.find((p) => p.slug === slug);
}
