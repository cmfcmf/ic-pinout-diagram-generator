import onecolor from "onecolor/one-color-all";

export function getContrastColor(color = "white") {
  const rgb = onecolor(color);
  const brightness = Math.round(
    (parseInt(rgb.red() * 0xff) * 299 +
      parseInt(rgb.green() * 0xff) * 587 +
      parseInt(rgb.blue() * 0xff) * 114) /
      1000
  );
  return brightness > 125 ? "black" : "white";
}

export function nTimes(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}

export function* reversed(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    yield arr[i];
  }
}

export function findLastIndex(arr, cmp) {
  let lastIndex = [...reversed(arr)].findIndex(cmp);
  if (lastIndex === -1) {
    return lastIndex;
  } else {
    return arr.length - lastIndex - 1;
  }
}
