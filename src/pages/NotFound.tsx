import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/PageMeta";

export function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center sm:px-6">
      <PageMeta title="페이지를 찾을 수 없습니다" description="요청하신 페이지를 찾을 수 없습니다." />
      <p className="text-6xl font-black text-brand-200">404</p>
      <h1 className="mt-4 text-xl font-black text-ink-900">페이지를 찾을 수 없습니다</h1>
      <p className="mt-2 text-ink-500">주소가 잘못되었거나 삭제된 페이지입니다.</p>
      <Link to="/" className="mt-8">
        <Button>메인으로 돌아가기</Button>
      </Link>
    </section>
  );
}
