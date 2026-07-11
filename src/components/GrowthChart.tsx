import { useMemo, useRef, useState, type PointerEvent } from "react";
import { motion, useInView } from "motion/react";
import type { MonthlyVisitors } from "@/lib/growth";

const PADDING = { top: 32, right: 16, bottom: 32, left: 56 };
const WIDTH = 900;
const HEIGHT = 320;
const PLOT_W = WIDTH - PADDING.left - PADDING.right;
const PLOT_H = HEIGHT - PADDING.top - PADDING.bottom;
const Y_MAX = 80000;
const Y_TICKS = [0, 20000, 40000, 60000, 80000];

function formatMonth(date: string) {
  const [y, m] = date.split("-");
  return `${y}.${m}`;
}

function xFor(i: number, n: number) {
  return PADDING.left + (n === 1 ? 0 : (i / (n - 1)) * PLOT_W);
}

function yFor(value: number) {
  return PADDING.top + PLOT_H - (value / Y_MAX) * PLOT_H;
}

export function GrowthChart({
  data,
  peakDate,
  highlightLastPoint = true,
}: {
  data: MonthlyVisitors[];
  peakDate: string;
  highlightLastPoint?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [showTable, setShowTable] = useState(false);

  const n = data.length;
  const peakIndex = data.findIndex((d) => d.date === peakDate);
  const lastIndex = n - 1;

  const linePath = useMemo(
    () =>
      data
        .map((d, i) => `${i === 0 ? "M" : "L"} ${xFor(i, n).toFixed(2)} ${yFor(d.visitors).toFixed(2)}`)
        .join(" "),
    [data, n],
  );

  const areaPath = useMemo(() => {
    const base = yFor(0);
    return `${linePath} L ${xFor(lastIndex, n).toFixed(2)} ${base} L ${xFor(0, n).toFixed(2)} ${base} Z`;
  }, [linePath, lastIndex, n]);

  const yearTicks = data
    .map((d, i) => ({ ...d, i }))
    .filter((d) => d.date.endsWith("-01") || d.i === lastIndex);

  function handleMove(e: PointerEvent<SVGRectElement>) {
    const svg = ref.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * WIDTH;
    const ratio = Math.min(1, Math.max(0, (px - PADDING.left) / PLOT_W));
    const idx = Math.round(ratio * (n - 1));
    setHoverIndex(idx);
  }

  const active = hoverIndex !== null ? data[hoverIndex] : null;

  return (
    <div>
      <div className="relative">
        <svg
          ref={ref}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full"
          role="img"
          aria-label={`${formatMonth(data[0].date)}부터 ${formatMonth(data[lastIndex].date)}까지 월별 방문자 추이`}
        >
          {/* 가로 그리드 + y축 라벨 */}
          {Y_TICKS.map((t) => (
            <g key={t}>
              <line
                x1={PADDING.left}
                x2={WIDTH - PADDING.right}
                y1={yFor(t)}
                y2={yFor(t)}
                stroke="#e2e8f2"
                strokeWidth={1}
              />
              <text x={PADDING.left - 10} y={yFor(t) + 4} textAnchor="end" fontSize={12} fill="#7688a8">
                {t === 0 ? "0" : `${(t / 10000).toFixed(0)}만`}
              </text>
            </g>
          ))}

          {/* x축 연도 라벨 */}
          {yearTicks.map((d) => (
            <text
              key={d.date}
              x={xFor(d.i, n)}
              y={HEIGHT - 8}
              textAnchor="middle"
              fontSize={12}
              fill="#7688a8"
            >
              {d.date.slice(0, 4)}
            </text>
          ))}

          {/* 영역 채우기 */}
          <motion.path
            d={areaPath}
            fill="#1E4FD6"
            fillOpacity={0.1}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
          />

          {/* 라인 */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="#1E4FD6"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* 최고점 */}
          <motion.circle
            cx={xFor(peakIndex, n)}
            cy={yFor(data[peakIndex].visitors)}
            r={5}
            fill="#1E4FD6"
            stroke="#fff"
            strokeWidth={2}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.5 }}
          />
          <motion.text
            x={xFor(peakIndex, n)}
            y={yFor(data[peakIndex].visitors) - 14}
            textAnchor="middle"
            fontSize={13}
            fontWeight={800}
            fill="#141b2e"
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 1.6 }}
          >
            최고 {data[peakIndex].visitors.toLocaleString()}명
          </motion.text>

          {/* 마지막 지점 */}
          {highlightLastPoint && (
            <>
              <motion.circle
                cx={xFor(lastIndex, n)}
                cy={yFor(data[lastIndex].visitors)}
                r={5}
                fill="#141b2e"
                stroke="#fff"
                strokeWidth={2}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.7 }}
              />
            </>
          )}

          {/* 시작점 */}
          <motion.circle
            cx={xFor(0, n)}
            cy={yFor(data[0].visitors)}
            r={4}
            fill="#7688a8"
            stroke="#fff"
            strokeWidth={2}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          />

          {/* 호버 크로스헤어 */}
          {active && (
            <g>
              <line
                x1={xFor(hoverIndex!, n)}
                x2={xFor(hoverIndex!, n)}
                y1={PADDING.top}
                y2={HEIGHT - PADDING.bottom}
                stroke="#a2b2cc"
                strokeWidth={1}
              />
              <circle
                cx={xFor(hoverIndex!, n)}
                cy={yFor(active.visitors)}
                r={5}
                fill="#1E4FD6"
                stroke="#fff"
                strokeWidth={2}
              />
            </g>
          )}

          {/* 호버 캡처 영역 */}
          <rect
            x={PADDING.left}
            y={PADDING.top}
            width={PLOT_W}
            height={PLOT_H}
            fill="transparent"
            onPointerMove={handleMove}
            onPointerLeave={() => setHoverIndex(null)}
          />
        </svg>

        {active && (
          <div
            className="pointer-events-none absolute top-2 rounded-lg border border-ink-100 bg-white px-3 py-2 text-xs shadow-md"
            style={{
              left: `${(xFor(hoverIndex!, n) / WIDTH) * 100}%`,
              transform: hoverIndex! > n / 2 ? "translateX(-100%)" : "translateX(0)",
            }}
          >
            <p className="font-bold text-ink-900">{formatMonth(active.date)}</p>
            <p className="text-ink-500">{active.visitors.toLocaleString()}명</p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => setShowTable((v) => !v)}
        className="mt-3 text-xs font-semibold text-ink-400 hover:text-brand"
      >
        {showTable ? "표 접기" : "월별 수치 표로 보기"}
      </button>

      {showTable && (
        <div className="mt-3 max-h-64 overflow-y-auto rounded-xl border border-ink-100">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-ink-50">
              <tr>
                <th className="px-3 py-2 text-left font-bold text-ink-500">월</th>
                <th className="px-3 py-2 text-right font-bold text-ink-500">방문자</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.date} className="border-t border-ink-100">
                  <td className="px-3 py-1.5 text-ink-700">{formatMonth(d.date)}</td>
                  <td className="px-3 py-1.5 text-right font-semibold text-ink-900">
                    {d.visitors.toLocaleString()}명
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
