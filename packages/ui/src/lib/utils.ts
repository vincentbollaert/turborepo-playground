import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function computeDrawnRadiusStyle() {
  const validRandomInt = Math.floor(Math.random() * (6 - 1 + 1)) + 1
  return { borderRadius: `var(--radius-drawn-${validRandomInt})` }
}
