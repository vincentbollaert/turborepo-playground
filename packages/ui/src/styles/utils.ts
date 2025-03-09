export function computeDrawnBorderClass() {
  const validRandomInt = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  return `drawn-borders-${validRandomInt}`;
}

export function computeChaosShadowsClass() {
  const validRandomInt = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  return `chaos-shadows-${validRandomInt}`;
}
