import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/PageMeta";
import { Reveal } from "@/components/Reveal";
import { COURSES, type CourseStatus } from "@/lib/courses";
import { cn } from "@/lib/utils";

const STATUS_STYLE: Record<CourseStatus, "brand" | "accent" | "muted"> = {
  모집중: "accent",
  예정: "brand",
  마감: "muted",
};

export function Programs() {
  const sorted = [...COURSES].sort((a, b) => {
    const order: CourseStatus[] = ["모집중", "예정", "마감"];
    return order.indexOf(a.status) - order.indexOf(b.status);
  });

  return (
    <>
      <PageMeta
        title="교육 프로그램"
        description="리영컴퍼니 AI 교육 프로그램 목록입니다. 다음 모집 일정은 상담 신청 시 안내해 드립니다."
      />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">교육 프로그램</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">교육 프로그램 안내<span className="text-accent">.</span></h1>
          <p className="mt-4 text-lg text-ink-500">
            현재 모든 과정이 마감되었습니다. 다음 모집 일정은 상담 신청 시 안내해 드립니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {sorted.map((course, i) => (
            <Reveal key={course.slug} delay={i * 0.06}>
              <Link to={`/programs/${course.slug}`}>
                <Card
                  className={cn(
                    "group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                    course.status === "마감" && "opacity-70",
                  )}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant={STATUS_STYLE[course.status]}>{course.status}</Badge>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-ink-900">{course.title}</h3>
                  <p className="mb-4 flex-1 text-[15px] leading-relaxed text-ink-500">{course.summary}</p>
                  <div className="space-y-1.5 text-sm text-ink-500">
                    <p className="flex items-center gap-2"><Users size={15} /> {course.target}</p>
                    <p className="flex items-center gap-2"><MapPin size={15} /> {course.location}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:gap-2 transition-all">
                    자세히 보기 <ArrowRight size={16} />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Card className="mt-10 flex flex-col items-center gap-4 p-8 text-center">
            <p className="text-[15px] leading-relaxed text-ink-600">
              다음 모집 일정을 가장 먼저 안내받고 싶으시면 상담을 신청해 주세요.
            </p>
            <Link to="/contact" className="group">
              <Button size="lg">
                다음 모집 알림 신청 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
