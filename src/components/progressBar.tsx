import type { ProgressBarProps } from "../types";
import { getLevel } from "../utils/helper";

export function ProgressBar({ icon, title, value }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));
  const level = getLevel(safeValue);

  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center h-9 w-9 rounded-lg bg-(--background) border border-(--border) text-(--primary) text-lg shrink-0">
            <i className={icon} />
          </span>
          <span className="text-(--text) font-medium text-base md:text-lg">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`text-xs font-mono font-medium ${level.className}`}>
            {level.label}
          </span>
          <span className="text-(--text-muted) font-mono text-sm w-10 text-right">
            {safeValue}%
          </span>
        </div>
      </div>

      <div
        role="progressbar"
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={title}
        className="h-2 w-full rounded-full bg-(--border) overflow-hidden"
      >
        <div
          className="h-full rounded-full bg-(--primary)"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}