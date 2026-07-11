import { Link } from "react-router-dom";
import { ArrowRight, Building2, GraduationCap, Hammer, Landmark, LifeBuoy, Store, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CountUp } from "@/components/CountUp";
import { PageMeta } from "@/components/PageMeta";
import { SITE } from "@/lib/site";
import { STATS } from "@/lib/stats";
import { GROWTH_STATS } from "@/lib/growth";

const AUDIENCE_CARDS = [
  {
    icon: Store,
    title: "소상공인 사장님",
    desc: "AI로 홍보물·SNS를 직접 만들고 운영할 수 있도록 실습 위주로 가르쳐 드립니다.",
    to: "/programs",
    linkLabel: "교육 프로그램 보기",
  },
  {
    icon: Building2,
    title: "기업 담당자",
    desc: "반복 업무를 진단하고, 우리 회사에 맞는 AI 자동화·홈페이지를 구축·전수합니다.",
    to: "/organizations",
    linkLabel: "기관·기업 안내 보기",
  },
  {
    icon: Landmark,
    title: "공공기관·지자체 담당자",
    desc: "견적서·강의계획서·세금계산서 등 행정 서류까지 빠짐없이 챙겨 진행합니다.",
    to: "/organizations",
    linkLabel: "기관·기업 안내 보기",
  },
];

const SERVICE_CARDS = [
  {
    icon: GraduationCap,
    title: "가르치기",
    desc: "AI 활용법을 사장님과 임직원이 스스로 할 수 있도록 교육합니다.",
    to: "/services#education",
  },
  {
    icon: Hammer,
    title: "만들어주기",
    desc: "AI 업무 자동화 진단부터 맞춤 AI 에이전트·홈페이지 구축까지 함께합니다.",
    to: "/services#consulting",
  },
  {
    icon: LifeBuoy,
    title: "관리해주기",
    desc: "구축 이후 홈페이지·마케팅을 지속적으로 관리해 드립니다.",
    to: "/services#care",
  },
];

export function Home() {
  return (
    <>
      <PageMeta
        title="AI로, 사장님이 직접 할 수 있게"
        description="리영컴퍼니는 AI를 활용해 소상공인과 기업이 마케팅·반복 업무를 스스로 해결할 수 있도록 가르치는 AI 경영컨설팅·교육 회사입니다."
      />
      {/* 히어로 */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="ly-aurora-a pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-brand-500/40 blur-3xl" />
        <div className="ly-aurora-b pointer-events-none absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-accent-500/25 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <Badge variant="dark" className="mb-6">AI 경영컨설팅 · 교육</Badge>
          <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">
            물고기를 잡아주는 대행이 아니라,
            <br />
            <span className="text-brand-200">잡는 법을 가르치는 회사</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-200 sm:text-xl">{SITE.subCopy}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                상담 신청하기 <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/programs" className="w-full sm:w-auto">
              <Button size="lg" variant="ghost" className="w-full sm:w-auto">
                교육 프로그램 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 고객 유형 분기 */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black text-ink-900 sm:text-3xl">어떤 분이신가요?</h2>
          <p className="mt-3 text-ink-500">찾으시는 내용으로 바로 안내해 드립니다.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {AUDIENCE_CARDS.map((a) => (
            <Link key={a.title} to={a.to}>
              <Card className="group h-full p-8 transition-shadow hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand">
                  <a.icon size={26} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-ink-900">{a.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-500">{a.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:gap-2 transition-all">
                  {a.linkLabel} <ArrowRight size={16} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* 서비스 요약 */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black text-ink-900 sm:text-3xl">리영컴퍼니가 하는 일</h2>
          <p className="mt-3 text-ink-500">전문용어 없이, 사장님이 이해할 수 있는 방식으로 진행합니다.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICE_CARDS.map((s) => (
            <Link key={s.title} to={s.to}>
              <Card className="group h-full p-8 transition-shadow hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand">
                  <s.icon size={26} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-ink-900">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-500">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:gap-2 transition-all">
                  자세히 보기 <ArrowRight size={16} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* 대표 소개 요약 */}
      <section className="bg-ink-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[220px_1fr] md:items-center lg:px-8">
          <img
            src="/images/profile.jpg"
            alt={`${SITE.ceo} 대표`}
            className="mx-auto h-40 w-40 rounded-full object-cover object-top shadow-lg md:mx-0"
          />
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">대표 소개</p>
            <h2 className="mb-4 text-2xl font-black text-ink-900 sm:text-3xl">대표 허예령</h2>
            <p className="text-[15px] leading-relaxed text-ink-600">
              소상공인과 기업 현장에서 직접 문제를 겪고, AI로 해결하는 방법을 찾아 다시 가르치는 일을 해왔습니다.
              <br />
              지금까지 소상공인·기업·공공기관과 함께한 AI 교육·컨설팅 경험을 바탕으로 리영컴퍼니를 이끌고 있습니다.
            </p>
            <Link to="/about" className="group mt-6 block">
              <div className="flex items-center gap-4 rounded-2xl border-2 border-brand-100 bg-brand-50 px-5 py-4 transition-colors group-hover:border-brand-300">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <TrendingUp size={24} />
                </div>
                <p className="text-left text-[15px] font-bold leading-snug text-ink-900">
                  AI만으로 월 방문자{" "}
                  <span className="text-xl font-black text-brand sm:text-2xl">
                    {GROWTH_STATS.peakMonthly.toLocaleString()}명
                  </span>{" "}
                  사이트를 직접 키운 대표
                </p>
              </div>
            </Link>
            <Link
              to="/about"
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand hover:gap-2 transition-all"
            >
              대표 스토리 보기 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 실적 하이라이트 */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black text-ink-900 sm:text-3xl">숫자로 증명합니다</h2>
          <p className="mt-3 text-ink-500">말이 아니라, 실제로 확인 가능한 결과와 약속입니다.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-black text-brand sm:text-5xl">
                <CountUp to={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-500">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-ink-400">
          방문자 수치는 대표가 직접 기획·개발·운영 중인 사이트의 애널리틱스 실측 데이터입니다 (2023~2026).{" "}
          <Link to="/about" className="font-semibold text-brand underline">
            성장 그래프 보기
          </Link>
        </p>
      </section>

      {/* 하단 CTA */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            지금 상담을 신청하시면
            <br className="sm:hidden" /> 우리 가게에 맞는 방법을 함께 찾아드립니다.
          </h2>
          <Link to="/contact">
            <Button size="lg" variant="dark" className="!bg-white !text-brand hover:!bg-brand-50">
              상담 신청하기 <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
