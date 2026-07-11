// 교육 프로그램 목업 데이터 — 추후 Supabase `courses` 테이블로 이전, 관리자 페이지에서 CRUD 예정.
export type CourseStatus = "모집중" | "예정" | "마감";

export interface Course {
  slug: string;
  title: string;
  summary: string;
  target: string;
  schedule: string;
  location: string;
  capacity: string;
  status: CourseStatus;
  curriculum: { week: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export const COURSES: Course[] = [
  {
    slug: "ai-marketing-oneday",
    title: "소상공인을 위한 AI 마케팅 첫걸음",
    summary: "AI가 처음이어도 괜찮습니다. 하루 만에 내 가게 마케팅에 AI를 써볼 수 있어요.",
    target: "AI를 한 번도 써본 적 없는 소상공인 사장님",
    schedule: "매월 2회, 토요일 오후 2시 (3시간)",
    location: "부산 (오프라인)",
    capacity: "12명",
    status: "모집중",
    curriculum: [
      { week: "1교시", title: "AI, 어렵지 않습니다", desc: "챗GPT가 뭔지, 사장님 언어로 쉽게 설명합니다." },
      { week: "2교시", title: "AI로 블로그·SNS 글쓰기", desc: "내 가게 홍보 글을 AI와 함께 직접 써봅니다." },
      { week: "3교시", title: "AI로 메뉴판·전단지 이미지 만들기", desc: "디자이너 없이 AI로 홍보 이미지를 만드는 법." },
      { week: "4교시", title: "내 가게에 바로 적용하기", desc: "오늘 배운 걸 실제 내 가게에 적용하는 실습." },
    ],
    faq: [
      { q: "컴퓨터를 잘 못 다루는데 참여할 수 있나요?", a: "네, 스마트폰만 다룰 줄 아셔도 충분합니다. 진행 내내 옆에서 도와드립니다." },
      { q: "노트북을 꼭 가져가야 하나요?", a: "스마트폰으로도 실습 가능합니다. 노트북이 있으면 더 편합니다." },
    ],
  },
  {
    slug: "ai-agent-4weeks",
    title: "AI 에이전트로 반복업무 줄이기 (4주 과정)",
    summary: "예약 응대, 문의 답변처럼 매일 반복되는 일을 AI가 대신하게 만드는 법을 배웁니다.",
    target: "예약·문의 응대에 시간을 많이 쓰는 소상공인·소규모 사업장",
    schedule: "매주 화요일 저녁 7시, 총 4주",
    location: "온라인 (Zoom)",
    capacity: "10명",
    status: "모집중",
    curriculum: [
      { week: "1주차", title: "AI 에이전트란 무엇인가", desc: "자동화와 AI 에이전트의 차이, 우리 가게에 필요한 것 찾기." },
      { week: "2주차", title: "자주 묻는 질문 자동 응대 만들기", desc: "고객 문의에 자동으로 답하는 챗봇 뼈대 만들기." },
      { week: "3주차", title: "예약·주문 흐름에 연결하기", desc: "만든 챗봇을 실제 예약·주문 과정에 연결하는 법." },
      { week: "4주차", title: "직접 운영하고 점검하기", desc: "완성한 에이전트를 실제로 써보고 개선하는 법." },
    ],
    faq: [
      { q: "코딩을 몰라도 되나요?", a: "네, 코딩 없이 화면 클릭만으로 만들 수 있는 도구를 사용합니다." },
      { q: "4주 중 한 번 빠지면 어떻게 되나요?", a: "녹화본을 제공해 드리며, 다음 회차 전 개별 보충 상담을 도와드립니다." },
    ],
  },
  {
    slug: "corp-ai-literacy",
    title: "기업 임직원 AI 활용 역량 교육",
    summary: "AI 도입을 검토하는 기업을 위한 맞춤형 임직원 교육입니다.",
    target: "AI 업무 적용을 검토하는 기업·기관 임직원",
    schedule: "기업 일정에 맞춰 협의 진행 (반나절 또는 1일형)",
    location: "출장 교육 (전국 가능)",
    capacity: "부서 단위 협의",
    status: "예정",
    curriculum: [
      { week: "1부", title: "우리 회사 업무에서 AI가 줄일 수 있는 일", desc: "실제 업무 사례로 AI 활용 지점을 함께 찾습니다." },
      { week: "2부", title: "부서별 실습", desc: "참석자 업무에 맞춘 프롬프트·도구 실습." },
      { week: "3부", title: "도입 로드맵", desc: "교육 이후 사내 확산을 위한 실행 계획 수립." },
    ],
    faq: [
      { q: "인원·시간을 조정할 수 있나요?", a: "네, 부서 규모와 일정에 맞춰 커리큘럼을 조정합니다. 상담을 통해 협의합니다." },
    ],
  },
  {
    slug: "ai-marketing-basic-3rd",
    title: "AI 마케팅 기초반 3기",
    summary: "소상공인 대상 AI 마케팅 기초 과정 3기 (모집 마감).",
    target: "AI를 한 번도 써본 적 없는 소상공인 사장님",
    schedule: "종료됨",
    location: "부산 (오프라인)",
    capacity: "마감",
    status: "마감",
    curriculum: [],
    faq: [],
  },
];

export function getCourseBySlug(slug: string) {
  return COURSES.find((c) => c.slug === slug);
}
