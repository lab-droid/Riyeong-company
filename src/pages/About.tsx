import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SITE } from "@/lib/site";
import { TIMELINE } from "@/lib/stats";

export function About() {
  return (
    <>
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
          <img
            src="/images/profile.jpg"
            alt={`${SITE.ceo} 대표`}
            className="h-40 w-40 flex-shrink-0 rounded-full object-cover object-top shadow-lg sm:h-48 sm:w-48"
          />
          <div>
            <Badge variant="brand" className="mb-4">회사 소개</Badge>
            <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">{SITE.name}</h1>
            <p className="mt-4 text-lg text-ink-500">
              AI를 활용해 소상공인과 기업이 마케팅·반복 업무를 스스로 해결할 수 있도록 가르치는
              <br className="hidden sm:block" />
              AI 경영컨설팅·교육 회사입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 회사 개요 */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-black text-ink-900">회사 개요</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="p-6">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ink-400">소재지</p>
            <p className="text-lg font-bold text-ink-900">{SITE.region}</p>
          </Card>
          <Card className="p-6">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ink-400">대표</p>
            <p className="text-lg font-bold text-ink-900">{SITE.ceo}</p>
          </Card>
          <Card className="p-6">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ink-400">사업 영역</p>
            <p className="text-lg font-bold text-ink-900">AI 경영컨설팅 · 교육</p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl bg-brand-50 p-6">
          <p className="mb-1 text-sm font-bold text-brand">미션</p>
          <p className="text-[15px] leading-relaxed text-ink-700">
            소상공인과 기업이 대행에 의존하지 않고, AI를 활용해 스스로 문제를 해결할 수 있는 힘을 갖도록 돕습니다.
          </p>
        </div>
      </section>

      {/* 대표 스토리 */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-black text-ink-900">대표 스토리</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {TIMELINE.map((item, i) => (
              <Card key={item.title} className="relative p-6">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-black text-white">
                  {i + 1}
                </span>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brand">{item.year}</p>
                <h3 className="mb-2 text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{item.desc}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-400">
            (대표 스토리 상세 원고는 발주처 제공 후 반영 예정입니다)
          </p>
        </div>
      </section>

      {/* 대표 이력 */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-black text-ink-900">대표 이력 · 수행 역량</h2>
        <ul className="space-y-4 border-l-2 border-brand-100 pl-6">
          <li className="relative">
            <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-brand" />
            <p className="font-bold text-ink-900">소상공인 대상 AI 마케팅 교육 다수 진행</p>
            <p className="text-sm text-ink-500">전통시장·소상공인 지원기관 협력 교육 경험</p>
          </li>
          <li className="relative">
            <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-brand" />
            <p className="font-bold text-ink-900">기업 대상 AI 업무 자동화 컨설팅 수행</p>
            <p className="text-sm text-ink-500">진단부터 구축·전수까지 전 과정 수행</p>
          </li>
          <li className="relative">
            <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-brand" />
            <p className="font-bold text-ink-900">공공기관 협력 디지털 역량 강화 강의</p>
            <p className="text-sm text-ink-500">소상공인 지원기관 주관 프로그램 강사 참여</p>
          </li>
        </ul>
        <p className="mt-6 text-sm text-ink-400">
          (실제 이력·경력 사항은 발주처 제공 원고로 교체됩니다)
        </p>
      </section>
    </>
  );
}
