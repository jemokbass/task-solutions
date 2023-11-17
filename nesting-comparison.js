// 4 kyu

Array.prototype.sameStructureAs = function (other) {
  let endValue = true;

  if (this?.length !== other?.length) {
    return false;
  }

  for (let key = 0; key < this.length; key++) {
    const cur = this[key];
    const otherCur = other[key];

    if (Array.isArray(cur) && !Array.isArray(otherCur)) {
      return (endValue = false);
    }

    if (!Array.isArray(cur) && Array.isArray(otherCur)) {
      return (endValue = false);
    }

    if (Array.isArray(cur)) {
      if (!cur.length && !otherCur.length) {
        endValue = true;
      }

      if (cur.length !== otherCur.length) {
        return (endValue = false);
      }

      endValue = cur.sameStructureAs(otherCur);
      continue;
    }
  }

  return endValue;
};
