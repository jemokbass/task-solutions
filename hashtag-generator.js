// 5 kyu

function generateHashtag(str) {
  if (!str || /(\w{140,}|[^ a-zA-z]+|^\s+$)/g.test(str)) {
    return false;
  }
  return (
    "#" +
    str
      .match(/\w+/g)
      .map(word => word.replace(/^\w/, value => value.toUpperCase()))
      .join("")
  );
}
