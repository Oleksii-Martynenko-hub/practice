export const test = ({ input, output, expected }) => {
  const symbol = output === expected ? ">>>" : "xxx";
  const bgColor = output === expected ? "#efe" : "#fee";
  const textColor = output === expected ? "#0b0" : "#b00";
  const getColor = (value) =>
    value === undefined || value === null
      ? "#2da1fe"
      : typeof value === "number"
      ? "#053dff"
      : typeof value === "string"
      ? "#7c4b15"
      : "#000";

  const colorizedLog = [
    { value: `${symbol} - `, bg: bgColor, col: textColor },
    { value: input ? `input: ` : "", bg: bgColor, col: "#000" },
    { value: input ? `${input}` : "", bg: bgColor, col: getColor(input) },
    { value: `${input ? " - " : ""}output: `, bg: bgColor, col: "#000" },
    { value: `${output}`, bg: bgColor, col: getColor(output) },
    { value: ` = `, bg: bgColor, col: "#000" },
    { value: `${expected}`, bg: bgColor, col: getColor(expected) },
    { value: ` :expected`, bg: bgColor, col: "#000" },
  ];

  console.log(
    colorizedLog.reduce((s, i) => (s += `%c${i.value}`), ""),
    ...colorizedLog.map((i) => `background: ${i.bg}; color: ${i.col};`)
  );
};
