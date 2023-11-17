// 6 kyu

function towerBuilder(num) {
  const arr = new Array(num);
  arr.fill("");

  function repSpace(id) {
    return " ".repeat(id);
  }

  const eq = arr.map((str, id) => {
    return arr[id].replace("", "*".repeat((id + 1) * 2 - 1));
  });

  return eq.map((item, id, arr) => {
    const lastId = arr.length - 1;
    const itemLength = arr[lastId].length;
    const quantityRep = (itemLength - item.length) / 2;

    return repSpace(quantityRep) + item + repSpace(quantityRep);
  });
}
