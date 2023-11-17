// 5 kyu

function hexStringToRGB(hexString) {
  const regex = /[\w\d]{2}/gi;

  return hexString.match(regex).reduce((acc, item, index) => {
    const literals = ["r", "g", "b"];
    return { ...acc, [literals[index]]: parseInt(item, 16) };
  }, {});
}
