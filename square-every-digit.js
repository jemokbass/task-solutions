// 7 kyu

function squareDigits(num) {
  return Number(
    Array.from(String(num), Number)
      .map(i => i ** 2)
      .join("")
  );
}
