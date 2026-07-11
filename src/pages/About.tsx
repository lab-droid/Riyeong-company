import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageMeta } from "@/components/PageMeta";
import { CountUp } from "@/components/CountUp";
import { GrowthChart } from "@/components/GrowthChart";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { TIMELINE } from "@/lib/stats";
import { CASE_STUDY, CHART_DATA, GROWTH_STATS } from "@/lib/growth";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <>
      <PageMeta
        title="회사 소개"
        description={`${SITE.name} 대표 ${SITE.ceo}와 미션, 대표 스토리를 소개합니다.`}
      />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
          <Reveal>
            <div className="w-fit flex-shrink-0 rounded-full bg-gradient-to-br from-brand to-accent-500 p-1">
              <img
                src="/images/profile.jpg"
                alt={`${SITE.ceo} 대표`}
                className="h-40 w-40 rounded-full border-4 border-white object-cover object-top sm:h-48 sm:w-48"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Badge variant="brand" className="mb-4">회사 소개</Badge>
            <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">{SITE.name}</h1>
            <p className="mt-4 text-lg text-ink-500">
              AI를 활용해 소상공인과 기업이 마케팅·반복 업무를 스스로 해결할 수 있도록 가르치는
              <br className="hidden sm:block" />
              AI 경영컨설팅·교육 회사입니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 회사 개요 */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-6 text-2xl font-black text-ink-900">
            회사 개요<span className="text-accent">.</span>
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          <Reveal>
            <Card className="h-full p-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ink-400">소재지</p>
              <p className="text-lg font-bold text-ink-900">{SITE.region}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card className="h-full p-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ink-400">대표</p>
              <p className="text-lg font-bold text-ink-900">{SITE.ceo}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="h-full p-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ink-400">사업 영역</p>
              <p className="text-lg font-bold text-ink-900">AI 경영컨설팅 · 교육</p>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 rounded-2xl bg-brand-50 p-6">
            <p className="mb-1 text-sm font-bold text-brand">미션</p>
            <p className="text-[15px] leading-relaxed text-ink-700">
              소상공인과 기업이 대행에 의존하지 않고, AI를 활용해 스스로 문제를 해결할 수 있는 힘을 갖도록 돕습니다.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 대표 스토리 */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-10 text-center text-2xl font-black text-ink-900">
              대표 스토리<span className="text-accent">.</span>
            </h2>
          </Reveal>

          {/* 진행 경로 트래커 */}
          <div className="relative mb-6 hidden sm:grid sm:grid-cols-3 sm:gap-6">
            <motion.div
              className="absolute top-[calc(50%-1px)] h-0.5 origin-left bg-brand-200"
              style={{ left: "calc(16.667% - 8px)", right: "calc(16.667% - 8px)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {TIMELINE.map((item, i) => (
              <div key={item.title} className="flex items-center justify-center">
                <div
                  className={cn(
                    "z-10 h-3 w-3 shrink-0 rounded-full",
                    i === TIMELINE.length - 1 ? "bg-accent-500" : "bg-brand",
                  )}
                />
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <Card className="relative h-full p-6">
                  <span
                    className={cn(
                      "mb-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white",
                      i === TIMELINE.length - 1 ? "bg-accent-500" : "bg-brand",
                    )}
                  >
                    {i + 1}
                  </span>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brand">{item.year}</p>
                  <h3 className="mb-2 text-lg font-bold text-ink-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI 직접 증명 사례 */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <Badge variant="accent" className="mb-4">말이 아니라 결과로</Badge>
          <h2 className="text-2xl font-black text-ink-900 sm:text-3xl">
            비전공자가 AI만으로 직접 키운 사이트<span className="text-accent">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            대표가 {CASE_STUDY.launchLabel}부터 지금까지 {CASE_STUDY.role.split(" ")[0]}하고 있는
            <br className="hidden sm:block" />
            {CASE_STUDY.category} 사이트의 실측 방문자 데이터입니다.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
        <Card className="p-6 sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-ink-400">{CASE_STUDY.siteName}</p>
              <p className="text-xs text-ink-400">월별 방문자 추이 (2023.01 ~ 2026.06)</p>
            </div>
            <a
              href={CASE_STUDY.siteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:gap-1.5 transition-all"
            >
              사이트 방문하기 <ExternalLink size={15} />
            </a>
          </div>

          <GrowthChart data={CHART_DATA} peakDate="2026-01" />

          <div className="mt-10 grid gap-6 border-t border-ink-100 pt-8 text-center sm:grid-cols-3">
            <div>
              <p className="text-3xl font-black text-brand sm:text-4xl">
                <CountUp to={GROWTH_STATS.growthMultiple} />배
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-500">
                시작({GROWTH_STATS.startLabel}) 대비 최고월 성장
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-brand sm:text-4xl">
                <CountUp to={GROWTH_STATS.peakMonthly} />명
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-500">
                월 최고 방문자 ({GROWTH_STATS.peakLabel})
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-brand sm:text-4xl">
                <CountUp to={GROWTH_STATS.cumulativeVisitors} />명+
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-500">누적 방문자 (2023~2026)</p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-ink-400">
            자체 운영 사이트 애널리틱스 실측 데이터 기준입니다. 리영컴퍼니의 회사 실적이 아닌, 대표 개인 수행 이력입니다.
          </p>
        </Card>
        </Reveal>
      </section>

      {/* 대표 이력 */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-8 text-2xl font-black text-ink-900">
            대표 이력 · 수행 역량<span className="text-accent">.</span>
          </h2>
        </Reveal>
        <ul className="space-y-4 border-l-2 border-brand-100 pl-6">
          <motion.li
            className="relative"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-brand" />
            <p className="font-bold text-ink-900">소상공인 대상 AI 마케팅 교육 다수 진행</p>
            <p className="text-sm text-ink-500">전통시장·소상공인 지원기관 협력 교육 경험</p>
          </motion.li>
          <motion.li
            className="relative"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-accent-500" />
            <p className="font-bold text-ink-900">비전공 상태로 AI만 활용해 온라인 학원 사이트 직접 개발·운영</p>
            <p className="text-sm text-ink-500">2022년 오픈, 4년째 기획·개발·운영 전담 (위 성장 그래프 참고)</p>
          </motion.li>
        </ul>
      </section>
    </>
  );
}
