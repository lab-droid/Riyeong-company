import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Sparkles, User } from "lucide-react";
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
        {item.isPersonalHistory && (
          <Badge variant="muted" className="mb-4">
            <User size={12} /> 대표 수행 이력
          </Badge>
        )}
        <h1 className="text-2xl font-black text-ink-900 sm:text-3xl">{item.title}</h1>
        <p className="mt-3 text-lg text-ink-500">{item.summary}</p>

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
