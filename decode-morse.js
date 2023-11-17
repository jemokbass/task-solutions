// 6 kyu

decodeMorse = function (morseCode) {
  return morseCode
    .replace(/^\s+|\s+$/g, "")
    .split(/\s{3,3}/g)
    .reduce((acc, item, idx, arr) => {
      acc += item.split(/\s/g).reduce((word, letter) => {
        word += MORSE_CODE[letter];
        return word;
      }, "");

      if (idx === arr.length - 1) {
        return acc;
      } else {
        acc += " ";
      }

      return acc;
    }, "");
};
