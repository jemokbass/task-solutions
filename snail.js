// 4 kyu

function snail(array) {
  const result = [];

  while (array.length) {
    result.push(...array.shift());

    for (let idx = 0; idx < array.length; idx++) {
      result.push(array[idx].pop());
    }

    result.push(...(array.pop() || []).reverse());

    for (let idx = array.length - 1; idx >= 0; idx--) {
      result.push(array[idx].shift());
    }
  }

  return result;
}
