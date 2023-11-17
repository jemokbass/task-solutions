// 7 kyu

function longest(str1, str2) {
  const set = new Set([...str1, ...str2]);
  let newArr = [];

  for (let key of set) {
    newArr.push(key);
  }

  return newArr
    .sort((a1, a2) => {
      if (a1 < a2) return -1;
      if (a1 > a2) return 1;
      return 0;
    })
    .join("");
}
