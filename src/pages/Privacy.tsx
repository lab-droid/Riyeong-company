import { SITE } from "@/lib/site";

export function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-2xl font-black text-ink-900 sm:text-3xl">개인정보처리방침</h1>
      <p className="mb-10 text-sm text-ink-400">
        본 방침은 프로토타입 검토용 초안입니다. 오픈 전 최종 문구를 발주처와 함께 확정합니다.
      </p>

      <div className="space-y-8 text-[15px] leading-relaxed text-ink-700">
        <div>
          <h2 className="mb-2 text-lg font-bold text-ink-900">1. 수집하는 개인정보 항목</h2>
          <p>{SITE.name}(이하 "회사")는 상담 신청 접수를 위해 아래 항목을 수집합니다.</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>필수 항목: 이름, 연락처</li>
            <li>선택 항목: 업종, 관심 분야, 문의 내용</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-ink-900">2. 개인정보의 수집 및 이용 목적</h2>
          <p>수집한 개인정보는 상담 문의 응대 및 안내를 위한 목적으로만 사용됩니다.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-ink-900">3. 개인정보의 보유 및 이용 기간</h2>
          <p>
            상담 목적 달성 후 지체 없이 파기하며, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
            (예: 상담 완료 후 1년)
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-ink-900">4. 개인정보의 제3자 제공</h2>
          <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-ink-900">5. 문의처</h2>
          <p>
            개인정보 관련 문의는 {SITE.email} 또는 {SITE.phoneDisplay}로 연락해 주시기 바랍니다.
          </p>
        </div>
      </div>
    </section>
  );
}
