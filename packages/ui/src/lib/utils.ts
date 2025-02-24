import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function computeDrawnBorderClass() {
  const validRandomInt = Math.floor(Math.random() * (6 - 1 + 1)) + 1
  return `drawnBorders${validRandomInt}`
}

export function computeChaosShadowsClass() {
  const validRandomInt = Math.floor(Math.random() * (4 - 1 + 1)) + 1
  return `chaos-shadows-${validRandomInt}`
}
