import { Link } from "react-router-dom";
import { LogoMark } from "@/components/LogoMark";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <LogoMark size={36} />
              <span className="text-base font-black text-white">{SITE.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-400">
              물고기를 잡아주는 대행이 아니라,
              <br />
              스스로 잡을 수 있게 만드는 회사
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-500">바로가기</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white">회사 소개</Link></li>
              <li><Link to="/services" className="hover:text-white">서비스</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">포트폴리오</Link></li>
              <li><Link to="/organizations" className="hover:text-white">기관·기업 안내</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-500">상담</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/contact" className="hover:text-white">상담 신청</Link></li>
              <li><a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phoneDisplay}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-ink-500">정책</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/privacy" className="hover:text-white">개인정보처리방침</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs leading-relaxed text-ink-500">
          <p>{SITE.name} · 대표: {SITE.ceo} · 사업자등록번호: {SITE.bizNumber}</p>
          <p>{SITE.address} · {SITE.phoneDisplay} · {SITE.email}</p>
          <p className="mt-4">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
