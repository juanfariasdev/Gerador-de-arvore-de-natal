function middle() {
  let s = "";
  for (let i = 4; i >= 0; i--) {
    s += " ".repeat(i) + "* ".repeat(4 - i) + "\n";
  }
  return s;
}

console.log(middle());
