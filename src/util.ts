import onecolor from "onecolor/one-color-all";

export function getContrastColor(color: string = "white") {
  const rgb = onecolor(color);
  const brightness = Math.round(
    (rgb.red() * 0xff * 299 +
      rgb.green() * 0xff * 587 +
      rgb.blue() * 0xff * 114) /
      1000
  );
  return brightness > 125 ? "black" : "white";
}

export function nTimes(n: number) {
  return Array.from({ length: n }, (_, i) => i);
}

export function* reversed<T>(arr: T[]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    yield arr[i]!;
  }
}

export function findLastIndex<T>(arr: T[], cmp: (element: T) => boolean) {
  let lastIndex = [...reversed(arr)].findIndex(cmp);
  if (lastIndex === -1) {
    return lastIndex;
  } else {
    return arr.length - lastIndex - 1;
  }
}
