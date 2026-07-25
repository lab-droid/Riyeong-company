import type { PointerEvent } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Clock3,
  FileCheck2,
  Hammer,
  Landmark,
  LifeBuoy,
  MapPin,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { PageMeta } from "@/components/PageMeta";
import { SITE } from "@/lib/site";
import { STATS } from "@/lib/stats";
import { CHART_DATA, GROWTH_STATS } from "@/lib/growth";

const AUDIENCE_CARDS = [
  {
    icon: Store,
    title: "소상공인 사장님",
    desc: "AI 경영 분석 프로그램 리영솔루션으로 우리 가게를 진단하고, 매출을 늘릴 수 있는 방법을 컨설팅해 드립니다.",
    to: "/services",
    linkLabel: "서비스 자세히 보기",
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
    desc: "견적서·제안서·세금계산서 등 행정 서류까지 빠짐없이 챙겨 진행합니다.",
    to: "/organizations",
    linkLabel: "기관·기업 안내 보기",
  },
];

const SERVICE_CARDS = [
  {
    icon: ScanSearch,
    title: "진단하기",
    desc: "AI 경영 분석 프로그램 리영솔루션으로 우리 회사의 문제점과 개선 방향을 정밀 진단합니다.",
    to: "/services#consulting",
  },
  {
    icon: Hammer,
    title: "만들어주기",
    desc: "AI 경영 분석 프로그램 리영솔루션으로 진단하고, 맞춤 AI 전략·CRM 구축까지 함께합니다.",
    to: "/services#consulting",
  },
  {
    icon: LifeBuoy,
    title: "관리해주기",
    desc: "구축 이후 홈페이지·마케팅을 지속적으로 관리해 드립니다.",
    to: "/services#care",
  },
];

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "사업자 등록 완료" },
  { icon: Clock3, label: "1영업일 이내 회신" },
  { icon: MapPin, label: "부산 · 전국 출장 가능" },
  { icon: Sparkles, label: "AI 실전 4년차" },
];

const WHY_US = [
  {
    icon: ScanSearch,
    title: "데이터 기반 진단",
    desc: "감이 아니라 리영솔루션의 데이터 분석으로 문제를 짚어냅니다.",
  },
  {
    icon: TrendingUp,
    title: "실전 검증 경험",
    desc: "대표가 비전공 상태로 AI만 활용해 사이트를 직접 성장시킨 경험을 그대로 적용합니다.",
  },
  {
    icon: FileCheck2,
    title: "투명한 프로세스",
    desc: "견적서·제안서·계약서까지, 절차와 서류를 빠짐없이 챙깁니다.",
  },
  {
    icon: LifeBuoy,
    title: "구축 이후에도 지속 관리",
    desc: "만들고 끝나는 게 아니라, 월 단위로 관리하며 함께 갑니다.",
  },
];

const STAT_ICONS = [TrendingUp, Users, Sparkles, Clock3];

const HERO_LINE_1 = "감이 아니라 데이터로,".split(" ");

const heroWord = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function HeroScrollHint() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
      <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50 pt-2">
        <motion.div
          className="h-2 w-1.5 rounded-full bg-white"
          animate={reduceMotion ? {} : { y: [0, 14, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <span className="text-[10px] font-bold tracking-[0.2em] text-white/50">SCROLL</span>
    </div>
  );
}

function useHeroGlow() {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const background = useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, rgba(75,116,230,0.35), transparent 70%)`;

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return { background, onPointerMove };
}

function GrowthSparkline() {
  const maxV = Math.max(...CHART_DATA.map((d) => d.visitors));
  const points = CHART_DATA.map((d, i) => {
    const x = (i / (CHART_DATA.length - 1)) * 100;
    const y = 100 - (d.visitors / maxV) * 92;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full text-brand-500"
      aria-hidden="true"
    >
      <motion.polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export function Home() {
  const heroGlow = useHeroGlow();

  return (
    <>
      <PageMeta
        title="데이터로 찾는 매출 성장의 이유"
        description="리영컴퍼니는 AI 경영 분석 프로그램 리영솔루션으로 소상공인과 기업을 진단하고, AI 맞춤 경영 컨설팅으로 문제를 개선해 성장시키는 AI 경영컨설팅 회사입니다."
      />
      {/* 히어로 */}
      <section className="relative overflow-hidden bg-ink-950" onPointerMove={heroGlow.onPointerMove}>
        <div className="ly-aurora-a pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-brand-500/40 blur-3xl" />
        <div className="ly-aurora-b pointer-events-none absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-accent-500/25 blur-3xl" />
        <div className="ly-noise pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay" />
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: heroGlow.background }} />

        {/* 로고의 '길'을 잇는 장식 경로 */}
        <svg
          viewBox="0 0 400 500"
          className="pointer-events-none absolute -right-10 top-0 hidden h-full w-auto opacity-30 lg:block"
          aria-hidden="true"
        >
          <motion.path
            d="M 40 480 C 120 420, 60 340, 160 300 C 260 260, 200 160, 300 100"
            fill="none"
            stroke="url(#heroPathGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
          <defs>
            <linearGradient id="heroPathGradient" x1="0" y1="500" x2="300" y2="0">
              <stop offset="0" stopColor="#4B74E6" />
              <stop offset="1" stopColor="#EC9D40" />
            </linearGradient>
          </defs>
          <motion.circle
            cx={300}
            cy={100}
            r={6}
            fill="#EC9D40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
          />
        </svg>

        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="dark" className="mb-6">AI 경영 진단 · 컨설팅</Badge>
          </motion.div>

          <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">
            <motion.span
              className="inline-block"
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.06, delayChildren: 0.15 }}
            >
              {HERO_LINE_1.map((word, i) => (
                <motion.span key={i} variants={heroWord} className="mr-2 inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.span>
            <br />
            <span className="text-brand-200">매출이 오르는 이유를 찾아드립니다</span>
          </h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg text-ink-200 sm:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {SITE.subCopy}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                상담 신청하기 <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="ghost" className="w-full sm:w-auto">
                서비스 살펴보기
              </Button>
            </Link>
          </motion.div>
        </div>

        <HeroScrollHint />
      </section>

      {/* 신뢰 지표 바 — 히어로와 다음 섹션 경계에 걸치는 카드 */}
      <div className="relative z-10 mx-auto -mt-8 max-w-5xl px-4 sm:-mt-9 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="grid grid-cols-2 divide-y divide-ink-100 overflow-hidden p-0 shadow-xl shadow-ink-900/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5 px-4 py-5 text-center sm:flex-col sm:gap-2 sm:py-6">
                <item.icon size={20} className="shrink-0 text-brand" />
                <span className="text-[13px] font-bold text-ink-700 sm:text-sm">{item.label}</span>
              </div>
            ))}
          </Card>
        </Reveal>
      </div>

      {/* 고객 유형 분기 */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-brand">FOR YOU</p>
          <h2 className="text-2xl font-black text-ink-900 sm:text-3xl">
            어떤 분이신가요<span className="text-accent">.</span>
          </h2>
          <p className="mt-3 text-ink-500">찾으시는 내용으로 바로 안내해 드립니다.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {AUDIENCE_CARDS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <Link to={a.to}>
                <Card className="group h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-brand-800 group-hover:text-white">
                    <a.icon size={26} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-ink-900">{a.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-500">{a.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:gap-2 transition-all">
                    {a.linkLabel} <ArrowRight size={16} />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 서비스 요약 */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-brand">SERVICE</p>
          <h2 className="text-2xl font-black text-ink-900 sm:text-3xl">
            리영컴퍼니가 하는 일<span className="text-accent">.</span>
          </h2>
          <p className="mt-3 text-ink-500">전문용어 없이, 사장님이 이해할 수 있는 방식으로 진행합니다.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICE_CARDS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <Link to={s.to}>
                <Card className="group h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-brand-800 group-hover:text-white">
                    <s.icon size={26} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-ink-900">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-500">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:gap-2 transition-all">
                    자세히 보기 <ArrowRight size={16} />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 왜 리영컴퍼니인가 */}
      <section className="relative overflow-hidden border-t border-ink-100">
        <div className="ly-grid-lines pointer-events-none absolute inset-0 text-ink-100" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-brand">WHY RIYEONG</p>
            <h2 className="text-2xl font-black text-ink-900 sm:text-3xl">
              리영컴퍼니를 선택하는 이유<span className="text-accent">.</span>
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08} className="h-full">
                <div className="relative flex h-full flex-col gap-4 bg-white p-8">
                  <span className="text-4xl font-black text-ink-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <w.icon size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-bold text-ink-900">{w.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-500">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 대표 소개 요약 */}
      <section className="bg-ink-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[220px_1fr] md:items-center lg:px-8">
          <Reveal>
            <div className="relative mx-auto w-fit md:mx-0">
              <div className="rounded-full bg-gradient-to-br from-brand to-accent-500 p-1">
                <img
                  src="/images/profile.jpg"
                  alt={`${SITE.ceo} 대표`}
                  className="h-40 w-40 rounded-full border-4 border-white object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-ink-100 bg-white px-3 py-1 text-xs font-black text-ink-900 shadow-md">
                CEO · {SITE.ceo}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">대표 소개</p>
            <h2 className="mb-4 text-2xl font-black text-ink-900 sm:text-3xl">대표 허예령</h2>
            <p className="text-[15px] leading-relaxed text-ink-600">
              소상공인과 기업 현장에서 직접 문제를 겪고, AI로 해결하는 방법을 찾아 다시 컨설팅하는 일을 해왔습니다.
              <br />
              지금까지 소상공인·기업·공공기관과 함께한 AI 경영 진단·컨설팅 경험을 바탕으로 리영컴퍼니를 이끌고 있습니다.
            </p>
            <Link to="/about" className="group mt-6 block">
              <div className="flex items-center gap-4 rounded-2xl border-2 border-brand-100 bg-brand-50 px-5 py-4 transition-colors group-hover:border-brand-300">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <TrendingUp size={24} />
                </div>
                <p className="text-left text-[15px] font-bold leading-snug text-ink-900">
                  AI만으로 월 방문자{" "}
                  <span className="text-xl font-black text-brand sm:text-2xl">
                    <CountUp to={GROWTH_STATS.peakMonthly} />명
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
          </Reveal>
        </div>
      </section>

      {/* 실적 하이라이트 */}
      <section className="relative overflow-hidden bg-ink-950 px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="ly-aurora-a pointer-events-none absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-500/20 blur-3xl" />
        <div className="ly-aurora-b pointer-events-none absolute -bottom-32 right-1/4 h-[24rem] w-[24rem] rounded-full bg-accent-500/15 blur-3xl" />
        <div className="ly-noise pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay" />
        <GrowthSparkline />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-accent-400">PROOF</p>
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              숫자로 증명합니다<span className="text-accent-400">.</span>
            </h2>
            <p className="mt-3 text-ink-300">말이 아니라, 실제로 확인 가능한 결과와 약속입니다.</p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => {
              const StatIcon = STAT_ICONS[i];
              return (
                <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-accent-400">
                    {StatIcon && <StatIcon size={20} />}
                  </div>
                  <p className="ly-serif-num text-4xl font-black text-white sm:text-5xl">
                    <span className="text-accent-100">
                      <CountUp to={stat.value} />
                    </span>
                    {stat.suffix}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink-300">{stat.label}</p>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-10 text-center text-xs text-ink-400">
            방문자 수치는 대표가 직접 기획·개발·운영 중인 사이트의 애널리틱스 실측 데이터입니다 (2023~2026).{" "}
            <Link to="/about" className="font-semibold text-brand-200 underline">
              성장 그래프 보기
            </Link>
          </p>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand to-brand-800">
        <div className="ly-dot-grid pointer-events-none absolute inset-0 text-white/[0.06]" />
        <div className="ly-aurora-b pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="ly-aurora-a pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-300/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <motion.h2
            className="text-2xl font-black text-white sm:text-4xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.05 }}
          >
            {"사장님이 원하는 대로, 지금부터 시작하세요".split(" ").map((word, i) => (
              <motion.span key={i} variants={heroWord} className="mr-2 inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="max-w-xl text-[15px] text-brand-100 sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            무엇이든 편하게 말씀해 주시면, 우리 가게 상황에 맞는 방법을 함께 찾아드립니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link to="/contact" className="group mt-4">
              <Button size="lg" variant="dark" className="!bg-white !text-brand hover:!bg-brand-50">
                무료 상담 신청하기 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
