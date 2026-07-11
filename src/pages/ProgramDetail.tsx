import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Calendar, ChevronDown, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/PageMeta";
import { getCourseBySlug, type CourseStatus } from "@/lib/courses";
import { cn } from "@/lib/utils";

const STATUS_STYLE: Record<CourseStatus, "brand" | "accent" | "muted"> = {
  모집중: "accent",
  예정: "brand",
  마감: "muted",
};

export function ProgramDetail() {
  const { slug } = useParams();
  const course = slug ? getCourseBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!course) return <Navigate to="/programs" replace />;

  return (
    <>
      <PageMeta title={course.title} description={course.summary} />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge variant={STATUS_STYLE[course.status]} className="mb-4">{course.status}</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">{course.title}</h1>
          <p className="mt-4 text-lg text-ink-500">{course.summary}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Card className="p-5">
              <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-400">
                <Users size={14} /> 수강 대상
              </p>
              <p className="text-[15px] font-semibold text-ink-900">{course.target}</p>
            </Card>
            <Card className="p-5">
              <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-400">
                <Calendar size={14} /> 일정
              </p>
              <p className="text-[15px] font-semibold text-ink-900">{course.schedule}</p>
            </Card>
            <Card className="p-5">
              <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-400">
                <MapPin size={14} /> 장소 · 정원
              </p>
              <p className="text-[15px] font-semibold text-ink-900">{course.location} · {course.capacity}</p>
            </Card>
          </div>

          {course.status !== "마감" && (
            <Link to={`/contact?course=${encodeURIComponent(course.title)}`} className="mt-8 inline-block">
              <Button size="lg">
                신청하기 <ArrowRight size={20} />
              </Button>
            </Link>
          )}
        </div>
      </section>

      {course.curriculum.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-black text-ink-900">커리큘럼</h2>
          <div className="space-y-4">
            {course.curriculum.map((c) => (
              <Card key={c.week} className="flex gap-4 p-6">
                <Badge variant="brand" className="h-fit shrink-0">{c.week}</Badge>
                <div>
                  <p className="font-bold text-ink-900">{c.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{c.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section className="bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-black text-ink-900">강사 소개</h2>
          <Card className="flex flex-col items-center gap-5 p-8 text-center sm:flex-row sm:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-100 text-3xl font-black text-brand-600">
              허
            </div>
            <div>
              <p className="font-bold text-ink-900">허예령 (리영컴퍼니 대표)</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">
                소상공인 대상 AI 교육을 직접 진행해 온 강사가 함께합니다.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {course.faq.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-black text-ink-900">자주 묻는 질문</h2>
          <div className="space-y-3">
            {course.faq.map((item, i) => (
              <Card key={item.q} className="overflow-hidden p-0">
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-ink-900">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={cn("shrink-0 text-ink-400 transition-transform", openFaq === i && "rotate-180")}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-500">{item.a}</p>
                )}
              </Card>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
