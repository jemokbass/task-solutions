// 5 kyu

function pickPeaks(arr) {
  const data = { pos: [], peaks: [] };

  const arrFilter = (values, start) => {
    if (!values.length) return false;
    for (let i in values) {
      if (values[i] > start) {
        return false;
      }
      if (values.length - 1 === i && values[i] === start) {
        return false;
      }
      if (values[i] < start) {
        return true;
      }
    }
  };

  if (arr.length > 0) {
    let start = 0;
    const end = arr.length;

    while (start < end) {
      const numbers = [...arr];
      const left = [...numbers.slice(0, start).reverse()];
      const right = [...numbers.slice(start + 1, end)];
      const leftPos = arrFilter(left, arr[start]);
      const rightPos = arrFilter(right, arr[start]);

      if (arr[start] === arr[start - 1]) {
        start += 1;
        continue;
      }

      if (leftPos && rightPos) {
        data.peaks.push(arr[start]);
        data.pos.push(start);
      }

      start += 1;
    }

    return data;
  }

  return data;
}
