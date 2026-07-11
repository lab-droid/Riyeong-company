import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageMeta } from "@/components/PageMeta";
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
        description="지금 신청할 수 있는 AI 교육 프로그램 목록입니다. AI가 처음이어도 사장님 속도에 맞춰 진행합니다."
      />
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">교육 프로그램</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">지금 신청할 수 있는 과정</h1>
          <p className="mt-4 text-lg text-ink-500">AI가 처음이어도 괜찮습니다. 사장님 속도에 맞춰 진행합니다.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {sorted.map((course) => (
            <Link key={course.slug} to={`/programs/${course.slug}`}>
              <Card
                className={cn(
                  "flex h-full flex-col p-7 transition-shadow hover:shadow-xl",
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
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand">
                  자세히 보기 <ArrowRight size={16} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
