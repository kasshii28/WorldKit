import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value: number, maxDecimals = 10): string {
  // 大きすぎる・小さすぎる数値を指数表記にせずに表示
  return value.toLocaleString("fullwide", {
    useGrouping: false,
    maximumFractionDigits: maxDecimals
  })
}