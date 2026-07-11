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
      document.title = "리영컴퍼니 | AI로, 사장님이 직접 할 수 있게";
      if (prevContent !== null) tag.setAttribute("content", prevContent);
    };
  }, [title, description]);

  return null;
}
