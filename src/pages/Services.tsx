import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Check, GraduationCap, Hammer, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { PageMeta } from "@/components/PageMeta";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = ["진단", "설계", "구축", "전수"];

export function Services() {
  return (
    <>
      <PageMeta
        title="서비스 소개"
        description="AI 활용 교육, 업무 자동화 컨설팅·구축, 구축 이후 유지관리까지 리영컴퍼니의 서비스를 소개합니다."
      />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">서비스 소개</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">
            가르치고, 만들어주고, 관리해 드립니다<span className="text-accent">.</span>
          </h1>
        </div>
      </section>

      {/* 교육 */}
      <section id="education" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-2xl font-black text-ink-900">
            교육<span className="text-accent">.</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full p-7">
              <h3 className="mb-2 text-lg font-bold text-ink-900">기업 임직원 AI 교육</h3>
              <p className="mb-4 text-[15px] leading-relaxed text-ink-500">
                AI 도입을 검토하는 기업 임직원을 대상으로, 실제 업무에 바로 적용할 수 있는 AI 활용법을 교육합니다.
              </p>
              <ul className="space-y-2 text-sm text-ink-600">
                <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 부서·업무 맞춤 커리큘럼</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 반나절~1일형, 출장 교육 가능</li>
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full p-7">
              <h3 className="mb-2 text-lg font-bold text-ink-900">소상공인 공개 과정</h3>
              <p className="mb-4 text-[15px] leading-relaxed text-ink-500">
                원데이 클래스부터 4주 과정까지, AI가 처음인 사장님도 쉽게 따라올 수 있도록 구성합니다.
              </p>
              <ul className="space-y-2 text-sm text-ink-600">
                <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 부산 오프라인 · 온라인 병행</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 전문용어 없는 실습 위주 진행</li>
              </ul>
            </Card>
          </Reveal>
        </div>
        <Link to="/programs" className="mt-6 inline-block">
          <Button variant="outline">
            교육 프로그램 보기 <ArrowRight size={18} />
          </Button>
        </Link>
      </section>

      {/* 컨설팅·구축 */}
      <section id="consulting" className="scroll-mt-24 bg-ink-50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand">
              <Hammer size={24} />
            </div>
            <h2 className="text-2xl font-black text-ink-900">
              컨설팅 · 구축<span className="text-accent">.</span>
            </h2>
          </Reveal>
          <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-ink-600">
            반복되는 업무를 진단하고, 우리 회사에 맞는 AI 에이전트·홈페이지를 직접 설계·구축한 뒤 활용법까지 전수합니다.
          </p>

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
              <div key={step} className="flex items-center justify-center">
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
              <Reveal key={step} delay={i * 0.08}>
                <Card className="p-5 text-center">
                  <p
                    className={cn(
                      "mb-1 text-xs font-bold",
                      i === PROCESS_STEPS.length - 1 ? "text-accent-600" : "text-brand",
                    )}
                  >
                    STEP {i + 1}
                  </p>
                  <p className="font-bold text-ink-900">{step}</p>
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
        <Reveal className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand">
            <LifeBuoy size={24} />
          </div>
          <h2 className="text-2xl font-black text-ink-900">
            유지관리<span className="text-accent">.</span>
          </h2>
        </Reveal>
        <Reveal>
          <Card className="p-7">
            <p className="mb-4 text-[15px] leading-relaxed text-ink-600">
              홈페이지·AI 에이전트 구축 또는 교육을 받은 고객을 대상으로, 월 단위 홈페이지·마케팅 관리를 제공합니다.
            </p>
            <ul className="grid gap-2 text-sm text-ink-600 sm:grid-cols-2">
              <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 콘텐츠·과정 정보 업데이트 지원</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 마케팅 채널 정기 점검</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 오류·장애 대응</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-brand" /> 월간 리포트 제공</li>
            </ul>
          </Card>
        </Reveal>
        <Link to="/contact" className="mt-6 inline-block">
          <Button variant="outline">
            유지관리 문의하기 <ArrowRight size={18} />
          </Button>
        </Link>
      </section>
    </>
  );
}
