import React from "react";
import { TableQuickChartProps, QuickChartType } from "./TableQuickChart.types";
import styles from "./themes/TableQuickChart.module.css";
import { useChartData } from "./TableQuickChart.hooks";
import { getTotalValue } from "./TableQuickChart.utils";

// Sử dụng chart thư viện nhẹ (vd: recharts), hoặc SVG thuần nếu muốn tối giản
// Ở đây demo với SVG cho self-contained.

const COLOR_SET = ["#6b8cff", "#43d1a2", "#ffa83b", "#ff568a", "#8566ff", "#ffe955"];

function getColor(idx: number, d?: { color?: string }) {
  return d?.color || COLOR_SET[idx % COLOR_SET.length];
}

// Bar/Column chart
function BarChart({ data, width = 220, height = 64, horizontal = false }: { data: any[]; width?: number; height?: number; horizontal?: boolean }) {
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const color = getColor(i, d);
        if (horizontal) {
          // horizontal bar
          const barHeight = (height - 10) / data.length - 3;
          return (
            <rect
              key={d.label}
              x={0}
              y={i * (barHeight + 4)}
              width={(d.value / max) * (width - 50)}
              height={barHeight}
              fill={color}
              rx={2}
            />
          );
        } else {
          // column
          const barWidth = (width - 20) / data.length - 4;
          return (
            <rect
              key={d.label}
              x={10 + i * (barWidth + 4)}
              y={height - (d.value / max) * (height - 16)}
              width={barWidth}
              height={(d.value / max) * (height - 16)}
              fill={color}
              rx={3}
            />
          );
        }
      })}
    </svg>
  );
}

// Line chart (mini, không trục)
function LineChart({ data, width = 220, height = 64 }: { data: any[]; width?: number; height?: number }) {
  const max = Math.max(...data.map(d => d.value), 1);
  const min = Math.min(...data.map(d => d.value), 0);
  const step = (width - 22) / (data.length - 1 || 1);
  const points = data.map((d, i) => [
    11 + i * step,
    height - 8 - ((d.value - min) / (max - min || 1)) * (height - 18),
  ]);
  const path = points
    .map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`))
    .join(" ");
  return (
    <svg width={width} height={height}>
      <path d={path} fill="none" stroke="#1976d2" strokeWidth={2.3} />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={3.1} fill={getColor(i, data[i])} />
      ))}
    </svg>
  );
}

// Donut chart (mini)
function DonutChart({ data, width = 82, height = 82 }: { data: any[]; width?: number; height?: number }) {
  const total = getTotalValue(data);
  let acc = 0;
  const center = width / 2;
  const radius = width / 2 - 6;
  const strokeWidth = 14;
  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const value = d.value / (total || 1);
        const start = acc;
        acc += value;
        const x1 = center + radius * Math.cos(2 * Math.PI * start - Math.PI / 2);
        const y1 = center + radius * Math.sin(2 * Math.PI * start - Math.PI / 2);
        const x2 = center + radius * Math.cos(2 * Math.PI * acc - Math.PI / 2);
        const y2 = center + radius * Math.sin(2 * Math.PI * acc - Math.PI / 2);
        const large = value > 0.499 ? 1 : 0;
        const color = getColor(i, d);
        const path = `
          M${center},${center}
          L${x1},${y1}
          A${radius},${radius} 0 ${large},1 ${x2},${y2}
          Z
        `;
        return <path key={i} d={path} fill={color} />;
      })}
      <circle
        cx={center}
        cy={center}
        r={radius - strokeWidth / 2}
        fill="#fff"
        opacity={0.85}
      />
      <text
        x={center}
        y={center + 4}
        textAnchor="middle"
        fontSize="1.17em"
        fontWeight={600}
        fill="#1976d2"
      >
        {total}
      </text>
    </svg>
  );
}

// Sparkline (dòng nhỏ, không trục)
function Sparkline({ data, width = 120, height = 28 }: { data: any[]; width?: number; height?: number }) {
  const max = Math.max(...data.map(d => d.value), 1);
  const min = Math.min(...data.map(d => d.value), 0);
  const step = (width - 10) / (data.length - 1 || 1);
  const points = data.map((d, i) => [
    5 + i * step,
    height - 5 - ((d.value - min) / (max - min || 1)) * (height - 11),
  ]);
  const path = points
    .map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`))
    .join(" ");
  return (
    <svg width={width} height={height}>
      <path d={path} fill="none" stroke="#45c8ec" strokeWidth={1.7} />
      <circle cx={points[points.length - 1][0]} cy={points[points.length - 1][1]} r={2.5} fill="#1976d2" />
    </svg>
  );
}

const CHART_MAP: Record<QuickChartType, any> = {
  bar: (props: any) => <BarChart {...props} horizontal />,
  column: (props: any) => <BarChart {...props} />,
  line: (props: any) => <LineChart {...props} />,
  donut: (props: any) => <DonutChart {...props} />,
  spark: (props: any) => <Sparkline {...props} />,
};

const TableQuickChart: React.FC<TableQuickChartProps> = ({
  type,
  data,
  height,
  width,
  title,
  showLegend = false,
  className = "",
}) => {
  const chartData = useChartData(data);

  return (
    <div className={`${styles.chartWrap} ${className}`} data-testid="table-quick-chart">
      {title && <div className={styles.chartTitle}>{title}</div>}
      {CHART_MAP[type]({
        data: chartData,
        width: width || (type === "donut" ? 82 : 220),
        height: height || (type === "spark" ? 28 : type === "donut" ? 82 : 64),
      })}
      {showLegend && (
        <div className={styles.legend}>
          {chartData.map((d, i) => (
            <span key={d.label} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: getColor(i, d) }} />
              {d.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableQuickChart;
