import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageMeta } from "@/components/PageMeta";
import { PORTFOLIO } from "@/lib/portfolio";

export function Portfolio() {
  return (
    <>
      <PageMeta
        title="포트폴리오"
        description="리영컴퍼니가 실제로 함께 진행한 AI 교육·컨설팅 수행 사례입니다."
      />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">포트폴리오</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">수행 사례</h1>
          <p className="mt-4 text-lg text-ink-500">실제로 함께 진행한 교육·컨설팅 사례입니다.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {PORTFOLIO.map((item) => (
            <Link key={item.slug} to={`/portfolio/${item.slug}`}>
              <Card className="flex h-full flex-col p-0 overflow-hidden transition-shadow hover:shadow-xl">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50">
                  <Sparkles size={36} className="text-brand-300" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {item.isPersonalHistory && (
                    <Badge variant="muted" className="mb-3 w-fit">
                      <User size={12} /> 대표 수행 이력
                    </Badge>
                  )}
                  <h3 className="mb-2 text-lg font-bold text-ink-900">{item.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-500">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">
                    자세히 보기 <ArrowRight size={16} />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
