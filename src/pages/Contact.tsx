import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const INTERESTS = ["교육", "컨설팅", "유지관리"] as const;

export function Contact() {
  const [searchParams] = useSearchParams();
  const courseNote = searchParams.get("course");

  const [interests, setInterests] = useState<string[]>([]);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function toggleInterest(v: string) {
    setInterests((prev) => (prev.includes(v) ? prev.filter((i) => i !== v) : [...prev, v]));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();

    if (!name || !phone) {
      setError("이름과 연락처를 입력해 주세요.");
      return;
    }
    if (!agreed) {
      setError("개인정보 수집·이용에 동의해 주세요.");
      return;
    }
    setError("");
    // 프로토타입 단계: 실제 저장·이메일 발송은 2단계(백엔드 연동)에서 구현 예정입니다.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center sm:px-6">
        <CheckCircle2 size={56} className="mb-6 text-brand" />
        <h1 className="text-2xl font-black text-ink-900">상담 신청이 접수되었습니다</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
          영업일 기준 1일 이내에 남겨주신 연락처로 연락드리겠습니다.
          <br />
          급하신 경우 아래 번호로 바로 전화해 주세요.
        </p>
        <a href={`tel:${SITE.phone}`} className="mt-6">
          <Button size="lg">
            <Phone size={20} /> {SITE.phoneDisplay}
          </Button>
        </a>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">상담 신청</Badge>
          <h1 className="text-3xl font-black text-ink-900 sm:text-4xl">편하게 문의해 주세요</h1>
          <p className="mt-4 text-lg text-ink-500">전화, 카카오톡, 폼 무엇이든 편하신 방법으로 연락 주세요.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        {/* 빠른 연락 */}
        <div className="space-y-4">
          <a href={`tel:${SITE.phone}`}>
            <Card className="flex items-center gap-4 p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-ink-400">전화로 문의하기</p>
                <p className="text-lg font-black text-ink-900">{SITE.phoneDisplay}</p>
              </div>
            </Card>
          </a>

          <Card className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <MessageCircle size={22} />
            </div>
            <div>
              <p className="text-sm font-bold text-ink-400">카카오톡 채널</p>
              <p className="text-[15px] font-semibold text-ink-500">채널 개설 후 연결 예정</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-ink-400">
              <MapPin size={18} /> 오시는 길
            </div>
            <div className="flex h-40 items-center justify-center rounded-xl bg-ink-100 text-sm text-ink-400">
              지도 영역 (카카오맵 연동 예정)
            </div>
            <p className="mt-3 text-sm text-ink-500">{SITE.address}</p>
          </Card>
        </div>

        {/* 상담 폼 */}
        <Card className="p-7 sm:p-8">
          {courseNote && (
            <div className="mb-6 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand">
              「{courseNote}」 신청을 위한 상담입니다.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-bold text-ink-700">이름 *</label>
              <input
                name="name"
                type="text"
                className="h-12 w-full rounded-xl border border-ink-200 px-4 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-100"
                placeholder="홍길동"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold text-ink-700">연락처 *</label>
              <input
                name="phone"
                type="tel"
                className="h-12 w-full rounded-xl border border-ink-200 px-4 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-100"
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold text-ink-700">업종</label>
              <input
                name="businessType"
                type="text"
                className="h-12 w-full rounded-xl border border-ink-200 px-4 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-100"
                placeholder="예: 음식점, 제조업, 소매업"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-ink-700">관심 분야</label>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((v) => (
                  <button
                    type="button"
                    key={v}
                    onClick={() => toggleInterest(v)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                      interests.includes(v)
                        ? "border-brand bg-brand text-white"
                        : "border-ink-200 text-ink-600 hover:border-brand-300"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold text-ink-700">문의 내용</label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-ink-200 px-4 py-3 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-100"
                placeholder="편하게 궁금하신 점을 적어 주세요."
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-ink-600">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 rounded border-ink-300 text-brand focus:ring-brand-200"
              />
              <span>
                개인정보 수집·이용에 동의합니다. (필수) — 자세한 내용은{" "}
                <a href="/privacy" className="font-semibold text-brand underline">개인정보처리방침</a>을 확인해 주세요.
              </span>
            </label>

            {error && <p className="text-sm font-semibold text-red-600">{error}</p>}

            <Button type="submit" size="lg" className="w-full">
              상담 신청하기
            </Button>
          </form>
        </Card>
      </section>
    </>
  );
}
