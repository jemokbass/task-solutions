// 5 kyu

function landPerimeter(arr) {
  let perimeter = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    const currentString = arr[ind];
    const nextString = ind + 1 < arr.length && arr[ind + 1];
    const prevString = ind - 1 > -1 && arr[ind - 1];

    for (let index = 0; index < currentString.length; index++) {
      const currentLetter = currentString[index];
      const prevLetter = currentString[index - 1];
      const nextLetter = currentString[index + 1];
      const topLetter = prevString && prevString[index];
      const bottomLetter = nextString && nextString[index];

      if (currentLetter === "X") {
        perimeter += prevLetter === "X" ? 0 : 1;
        perimeter += nextLetter === "X" ? 0 : 1;
        perimeter += topLetter === "X" ? 0 : 1;
        perimeter += bottomLetter === "X" ? 0 : 1;
      }
    }
  }

  return `Total land perimeter: ${perimeter}`;
}
