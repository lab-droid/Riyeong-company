import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Hammer, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CountUp } from "@/components/CountUp";
import { SITE } from "@/lib/site";
import { STATS } from "@/lib/stats";

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
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-brand-100 text-5xl font-black text-brand-600 md:mx-0">
            허
          </div>
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">대표 소개</p>
            <h2 className="mb-4 text-2xl font-black text-ink-900 sm:text-3xl">대표 허예령</h2>
            <p className="text-[15px] leading-relaxed text-ink-600">
              소상공인과 기업 현장에서 직접 문제를 겪고, AI로 해결하는 방법을 찾아 다시 가르치는 일을 해왔습니다.
              <br />
              지금까지 소상공인·기업·공공기관과 함께한 AI 교육·컨설팅 경험을 바탕으로 리영컴퍼니를 이끌고 있습니다.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand hover:gap-2 transition-all"
            >
              대표 스토리 보기 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 실적 하이라이트 */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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
