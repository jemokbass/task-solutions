// 6 kyu

function likes(arr) {
  switch (arr.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${arr[0]} likes this`;
    case 2:
      return `${arr.join(" and ")} like this`;
    case 3:
      return `${arr.join(", ").replace(/,(?=[^,]*$)/, " and")} like this`;
    default:
      return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
}
