import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Building2, FileCheck2, MapPinned, Receipt } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { PageMeta } from "@/components/PageMeta";
import { cn } from "@/lib/utils";

const ctaWord = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const PROCESS_STEPS = [
  { title: "문의", desc: "전화·폼으로 필요하신 내용을 남겨주세요." },
  { title: "요구 파악", desc: "대상·범위·일정·예산을 함께 확인합니다." },
  { title: "제안·견적", desc: "진단·컨설팅 제안서와 견적서를 보내드립니다." },
  { title: "계약", desc: "계약서 작성 후 일정을 확정합니다." },
  { title: "수행", desc: "AI 경영 진단·컨설팅을 진행하고 진행 상황을 공유합니다." },
  { title: "결과 보고", desc: "완료 후 결과보고서·세금계산서를 발행합니다." },
];

const DOCS = [
  { icon: FileCheck2, title: "견적서 · 제안서", desc: "요청 시 1영업일 이내 제공합니다." },
  { icon: Building2, title: "컨설턴트 프로필 · 사업자등록증", desc: "내부 결재·품의에 필요한 서류를 즉시 드립니다." },
  { icon: Receipt, title: "세금계산서", desc: "수행 완료 후 정상 발행합니다." },
  { icon: MapPinned, title: "출장 컨설팅", desc: "부산 외 지역도 협의 후 방문 가능합니다." },
];

const FAQ = [
  {
    q: "AI 경영 진단은 어떻게 진행되나요?",
    a: "리영솔루션으로 매출·업무 데이터를 분석한 뒤, 진단 결과를 바탕으로 개선 방향과 컨설팅 전략을 제안합니다. 소요 기간은 기업 규모에 따라 상담 시 안내드립니다.",
  },
  {
    q: "부산 외 지역에도 출장 방문이 가능한가요?",
    a: "가능합니다. 일정과 이동 경비 등은 문의 시 사전에 안내드립니다.",
  },
  {
    q: "견적서·제안서를 내부 결재용으로 받을 수 있나요?",
    a: "네, 상담 후 요청하시면 결재·품의에 필요한 형식으로 1영업일 이내 보내드립니다.",
  },
  {
    q: "온라인·오프라인 병행이 가능한가요?",
    a: "네, 대상과 목적에 맞춰 오프라인·온라인·병행 방식 중 선택하실 수 있습니다.",
  },
  {
    q: "계약과 정산은 어떻게 진행되나요?",
    a: "제안·견적 확인 후 계약서를 작성하고, 수행 완료 시점에 세금계산서를 발행해 정산합니다.",
  },
];

export function Organizations() {
  return (
    <>
      <PageMeta
        title="기관·기업 안내"
        description="공공기관·기업 대상 AI 경영 진단·컨설팅 진행 절차와 견적서·제안서·세금계산서 등 행정 지원 안내입니다."
      />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">기관 · 기업 안내</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">
            공공기관 · 기업 담당자님께<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            AI 경영 분석 프로그램 리영솔루션 진단부터 설계·구축·전수까지, 필요한 행정 서류까지 빠짐없이 챙겨드립니다.
          </p>
        </div>
      </section>

      {/* 서류·지원 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-8 text-center text-2xl font-black text-ink-900">
            담당자님이 걱정 없이 진행하시도록<span className="text-accent">.</span>
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DOCS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <Card className="h-full p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand">
                  <d.icon size={22} />
                </div>
                <h3 className="mb-1.5 font-bold text-ink-900">{d.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{d.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 진행 절차 */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-10 text-center text-2xl font-black text-ink-900">
              진행 절차<span className="text-accent">.</span>
            </h2>
          </Reveal>

          {/* 진행 경로 트래커 */}
          <div className="relative mb-6 hidden lg:grid lg:grid-cols-6 lg:gap-4">
            <motion.div
              className="absolute top-[calc(50%-1px)] h-0.5 origin-left bg-brand-200"
              style={{ left: "calc(8.333% - 6.667px)", right: "calc(8.333% - 6.667px)" }}
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

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <Card className="h-full p-5 text-center">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-8 text-center text-2xl font-black text-ink-900">
            자주 묻는 질문<span className="text-accent">.</span>
          </h2>
        </Reveal>
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <Card className="p-6">
                <p className="mb-2 font-bold text-ink-900">Q. {item.q}</p>
                <p className="text-[15px] leading-relaxed text-ink-600">A. {item.a}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand to-brand-800">
        <div className="ly-dot-grid pointer-events-none absolute inset-0 text-white/[0.06]" />
        <div className="ly-aurora-b pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="ly-aurora-a pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-300/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <motion.h2
            className="text-2xl font-black text-white sm:text-4xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.05 }}
          >
            {"지금 문의하시면, 필요한 서류부터 챙겨드립니다".split(" ").map((word, i) => (
              <motion.span key={i} variants={ctaWord} className="mr-2 inline-block">
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
            견적서·제안서·컨설턴트 프로필까지 1영업일 이내 준비해 드립니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link to="/contact?type=organization" className="group mt-4">
              <Button size="lg" variant="dark" className="!bg-white !text-brand hover:!bg-brand-50">
                기관·기업 상담 신청하기 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
