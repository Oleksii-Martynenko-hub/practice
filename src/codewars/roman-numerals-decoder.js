//my solution
export function mySolution(roman) {
  if (!roman || typeof roman !== "string") return 0;
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0, n = 0; i <= roman.length; i++) {
    if (!values[roman[i]]) return 0;
    if (i !== roman.length - 1) {
      if (values[roman[i]] < values[roman[i + 1]]) n += values[roman[i]] * -1;
      else n += values[roman[i]];
    } else {
      if (i === roman.length - 1) return (n += values[roman[i]]);
    }
  }
}

//better solution
export function betterSolution(roman) {
  var value = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return roman
    .split("")
    .map((d) => value[d])
    .reduce((s, v, i, o) => s + (o[i + 1] > v ? -v : v), 0);
}
