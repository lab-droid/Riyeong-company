import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileCheck2, MapPinned, Receipt } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/PageMeta";

const PROCESS_STEPS = [
  { title: "문의", desc: "전화·폼으로 필요하신 내용을 남겨주세요." },
  { title: "요구 파악", desc: "대상·인원·일정·예산을 함께 확인합니다." },
  { title: "제안·견적", desc: "커리큘럼과 견적서·강의계획서를 보내드립니다." },
  { title: "계약", desc: "계약서 작성 후 일정을 확정합니다." },
  { title: "수행", desc: "교육·컨설팅을 진행하고 진행 상황을 공유합니다." },
  { title: "결과 보고", desc: "완료 후 결과보고서·세금계산서를 발행합니다." },
];

const DOCS = [
  { icon: FileCheck2, title: "견적서 · 제안서", desc: "요청 시 1영업일 이내 제공합니다." },
  { icon: Building2, title: "강사 프로필 · 사업자등록증", desc: "내부 결재·품의에 필요한 서류를 즉시 드립니다." },
  { icon: Receipt, title: "세금계산서", desc: "수행 완료 후 정상 발행합니다." },
  { icon: MapPinned, title: "출장 교육", desc: "부산 외 지역도 협의 후 출강 가능합니다." },
];

const FAQ = [
  {
    q: "최소 인원 제한이 있나요?",
    a: "소규모 부서 단위(5~10명)부터 진행 가능합니다. 정확한 인원과 예산은 상담 시 함께 조율합니다.",
  },
  {
    q: "부산 외 지역에도 출강이 가능한가요?",
    a: "가능합니다. 일정과 이동 경비 등은 문의 시 사전에 안내드립니다.",
  },
  {
    q: "견적서·강의계획서를 내부 결재용으로 받을 수 있나요?",
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
        description="공공기관·기업 대상 AI 교육·컨설팅 진행 절차와 견적서·강의계획서·세금계산서 등 행정 지원 안내입니다."
      />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">기관 · 기업 안내</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">
            공공기관 · 기업 담당자님께
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            진단부터 설계·구축·전수까지, 필요한 행정 서류까지 빠짐없이 챙겨드립니다.
          </p>
        </div>
      </section>

      {/* 서류·지원 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-black text-ink-900">담당자님이 걱정 없이 진행하시도록</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DOCS.map((d) => (
            <Card key={d.title} className="p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand">
                <d.icon size={22} />
              </div>
              <h3 className="mb-1.5 font-bold text-ink-900">{d.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{d.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 진행 절차 */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-black text-ink-900">진행 절차</h2>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PROCESS_STEPS.map((step, i) => (
              <Card key={step.title} className="p-5 text-center">
                <p className="mb-1 text-xs font-bold text-brand">STEP {i + 1}</p>
                <p className="mb-1.5 font-bold text-ink-900">{step.title}</p>
                <p className="text-xs leading-relaxed text-ink-500">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-black text-ink-900">자주 묻는 질문</h2>
        <div className="space-y-4">
          {FAQ.map((item) => (
            <Card key={item.q} className="p-6">
              <p className="mb-2 font-bold text-ink-900">Q. {item.q}</p>
              <p className="text-[15px] leading-relaxed text-ink-600">A. {item.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            기관·기업 대상 교육·컨설팅을 검토 중이시라면
          </h2>
          <Link to="/contact?type=organization">
            <Button size="lg" variant="dark" className="!bg-white !text-brand hover:!bg-brand-50">
              기관·기업 상담 신청 <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
