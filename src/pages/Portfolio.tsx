import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageMeta } from "@/components/PageMeta";
import { Reveal } from "@/components/Reveal";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, type PortfolioCategory } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | "전체">("전체");

  const filtered =
    activeCategory === "전체" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageMeta
        title="포트폴리오"
        description="리영컴퍼니가 실제로 함께 진행한 AI 경영 진단·컨설팅 수행 사례입니다."
      />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">포트폴리오</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">수행 사례<span className="text-accent">.</span></h1>
          <p className="mt-4 text-lg text-ink-500">진단부터 구축·전수까지, 실제로 함께 진행한 사례입니다.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* 카테고리 필터 */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {(["전체", ...PORTFOLIO_CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                activeCategory === cat
                  ? "border-brand bg-brand text-white"
                  : "border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.slug} delay={Math.min(i, 5) * 0.06}>
              <Link to={`/portfolio/${item.slug}`}>
                <Card className="group flex h-full flex-col p-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-100 to-brand-50 transition-colors duration-300 group-hover:from-brand-200 group-hover:to-brand-100">
                    <div className="ly-dot-grid pointer-events-none absolute inset-0 text-brand-300/40" />
                    <Sparkles size={32} className="relative text-brand-300 transition-colors duration-300 group-hover:text-accent-500" />
                    <span className="absolute left-4 top-4 rounded-full border border-brand-200 bg-white/90 px-2.5 py-1 text-[11px] font-bold text-brand">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {item.isPersonalHistory && (
                      <Badge variant="muted" className="mb-3 w-fit">
                        <User size={12} /> 대표 수행 이력
                      </Badge>
                    )}
                    <h3 className="mb-2 text-lg font-bold leading-snug text-ink-900">{item.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-ink-500">{item.summary}</p>
                    <p className="mt-4 flex items-center gap-1.5 text-[13px] font-bold text-accent-600">
                      <TrendingUp size={14} className="shrink-0" /> {item.highlight}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:gap-2 transition-all">
                      자세히 보기 <ArrowRight size={16} />
                    </span>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
