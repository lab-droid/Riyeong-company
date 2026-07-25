import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/PageMeta";
import { getPortfolioBySlug } from "@/lib/portfolio";

export function PortfolioDetail() {
  const { slug } = useParams();
  const item = slug ? getPortfolioBySlug(slug) : undefined;

  if (!item) return <Navigate to="/portfolio" replace />;

  return (
    <>
      <PageMeta title={item.title} description={item.summary} />
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-100 to-brand-50 sm:h-72">
        <div className="ly-dot-grid pointer-events-none absolute inset-0 text-brand-300/40" />
        <Sparkles size={48} className="relative text-brand-300" />
      </div>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="brand">{item.category}</Badge>
          {item.isPersonalHistory && (
            <Badge variant="muted">
              <User size={12} /> 대표 수행 이력
            </Badge>
          )}
        </div>
        <h1 className="text-2xl font-black text-ink-900 sm:text-3xl">{item.title}</h1>
        <p className="mt-3 text-lg text-ink-500">{item.summary}</p>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border-2 border-accent-100 bg-accent-50 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white">
            <TrendingUp size={20} />
          </div>
          <p className="font-bold text-ink-900">{item.highlight}</p>
        </div>

        <Card className="mt-8 p-7">
          <p className="mb-2 text-sm font-bold text-brand">수행 내용</p>
          <p className="text-[15px] leading-relaxed text-ink-700">{item.content}</p>
        </Card>

        <Card className="mt-4 p-7">
          <p className="mb-2 text-sm font-bold text-brand">결과</p>
          <p className="text-[15px] leading-relaxed text-ink-700">{item.result}</p>
        </Card>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/portfolio" className="text-sm font-bold text-ink-500 hover:text-brand">
            ← 목록으로
          </Link>
          <Link to="/contact">
            <Button>
              비슷한 사례 상담하기 <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
