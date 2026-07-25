import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Compass,
  FileBarChart,
  Handshake,
  Hammer,
  LifeBuoy,
  Radar,
  RefreshCw,
  ScanSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { PageMeta } from "@/components/PageMeta";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = [
  { icon: ScanSearch, title: "진단", desc: "AI 경영 분석 프로그램 리영솔루션으로 매출·업무 데이터를 정밀 분석합니다." },
  { icon: Compass, title: "설계", desc: "분석 결과를 바탕으로 우리 회사에 맞는 AI 전략을 설계합니다." },
  { icon: Hammer, title: "구축", desc: "AI 에이전트·홈페이지·CRM을 직접 구축합니다." },
  { icon: Handshake, title: "전수", desc: "사장님이 직접 운영할 수 있도록 활용법을 전수합니다." },
];

const DIAGNOSTIC_EXAMPLE = [
  { label: "매출 구조 개선 여지", value: 72 },
  { label: "반복 업무 자동화 가능성", value: 58 },
  { label: "온라인 채널 활용도", value: 41 },
];

const CARE_ITEMS = [
  { icon: RefreshCw, title: "콘텐츠·서비스 정보 업데이트 지원" },
  { icon: Radar, title: "마케팅 채널 정기 점검" },
  { icon: AlertTriangle, title: "오류·장애 대응" },
  { icon: FileBarChart, title: "월간 리포트 제공" },
];

export function Services() {
  return (
    <>
      <PageMeta
        title="서비스 소개"
        description="AI 경영 진단, 맞춤 컨설팅·구축, 구축 이후 유지관리까지 리영컴퍼니의 서비스를 소개합니다."
      />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">서비스 소개</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">
            진단하고, 만들어주고, 관리해 드립니다<span className="text-accent">.</span>
          </h1>
        </div>
      </section>

      {/* 컨설팅·구축 */}
      <section id="consulting" className="scroll-mt-24 bg-ink-50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-brand">CONSULTING</p>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand">
                <Hammer size={24} />
              </div>
              <h2 className="text-2xl font-black text-ink-900">
                컨설팅 · 구축<span className="text-accent">.</span>
              </h2>
            </div>
          </Reveal>
          <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-ink-600">
            AI 경영 분석 프로그램 리영솔루션으로 우리 회사의 문제점과 개선 방향을 진단하고, 맞춤 AI 전략을 설계해 AI 에이전트·홈페이지·CRM까지 직접 구축한 뒤 활용법을 전수합니다.
          </p>

          {/* 리영솔루션 소개 */}
          <Reveal className="mb-10">
            <Card className="overflow-hidden border-brand-100 bg-gradient-to-br from-brand-50 to-white p-7 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                    <ScanSearch size={26} />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brand">AI 경영 분석 프로그램</p>
                    <h3 className="mb-3 text-xl font-black text-ink-900">리영솔루션</h3>
                    <p className="mb-4 text-[15px] leading-relaxed text-ink-600">
                      기업 맞춤 AI 경영 진단 시 리영컴퍼니가 실제로 사용하는 자체 분석 프로그램입니다. 데이터를 기반으로 문제점과 개선 방향, 매출 향상 포인트를 정밀 분석합니다.
                    </p>
                    <ul className="grid gap-2 text-sm text-ink-600 sm:grid-cols-3 lg:grid-cols-1">
                      <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 문제점 진단</li>
                      <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 개선 방향 도출</li>
                      <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 매출 향상 전략 제시</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-ink-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-400">진단 리포트 예시</p>
                  <div className="space-y-4">
                    {DIAGNOSTIC_EXAMPLE.map((item, i) => (
                      <div key={item.label}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="font-semibold text-ink-700">{item.label}</span>
                          <span className="font-black text-brand">{item.value}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-ink-100">
                          <motion.div
                            className={cn(
                              "h-full rounded-full",
                              i === 0 ? "bg-accent-500" : "bg-brand",
                            )}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-ink-400">※ 실제 진단 항목은 업종·데이터에 따라 달라지는 예시 화면입니다.</p>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* 진행 경로 트래커 */}
          <div className="relative mb-6 hidden sm:grid sm:grid-cols-4 sm:gap-4">
            <motion.div
              className="absolute top-[calc(50%-1px)] h-0.5 origin-left bg-brand-200"
              style={{ left: "calc(12.5% - 6px)", right: "calc(12.5% - 6px)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="flex items-center justify-center">
                <div
                  className={cn(
                    "z-10 h-3 w-3 shrink-0 rounded-full",
                    i === PROCESS_STEPS.length - 1 ? "bg-accent-500" : "bg-brand",
                  )}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <Card className="h-full p-5 text-center">
                  <div
                    className={cn(
                      "mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl",
                      i === PROCESS_STEPS.length - 1 ? "bg-accent-50 text-accent-600" : "bg-brand-50 text-brand",
                    )}
                  >
                    <step.icon size={18} />
                  </div>
                  <p
                    className={cn(
                      "mb-1 text-xs font-bold",
                      i === PROCESS_STEPS.length - 1 ? "text-accent-600" : "text-brand",
                    )}
                  >
                    STEP {i + 1}
                  </p>
                  <p className="mb-1.5 font-bold text-ink-900">{step.title}</p>
                  <p className="text-xs leading-relaxed text-ink-500">{step.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-block">
            <Button variant="outline">
              컨설팅 문의하기 <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* 유지관리 */}
      <section id="care" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-8">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-brand">CARE</p>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand">
              <LifeBuoy size={24} />
            </div>
            <h2 className="text-2xl font-black text-ink-900">
              유지관리<span className="text-accent">.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-ink-600">
            홈페이지·AI 에이전트 구축 또는 컨설팅을 받은 고객을 대상으로, 월 단위 홈페이지·마케팅 관리를 제공합니다.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {CARE_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card className="flex h-full items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <item.icon size={20} />
                </div>
                <p className="font-semibold text-ink-800">{item.title}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Link to="/contact" className="mt-8 inline-block">
          <Button variant="outline">
            유지관리 문의하기 <ArrowRight size={18} />
          </Button>
        </Link>
      </section>
    </>
  );
}
