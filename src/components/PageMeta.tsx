import { useEffect } from "react";

export function PageMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    const fullTitle = `${title} | 리영컴퍼니`;
    document.title = fullTitle;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    const prevContent = tag.getAttribute("content");
    tag.setAttribute("content", description);

    return () => {
      document.title = "리영컴퍼니 | 데이터로 찾는 매출 성장의 이유";
      if (prevContent !== null) tag.setAttribute("content", prevContent);
    };
  }, [title, description]);

  return null;
}
