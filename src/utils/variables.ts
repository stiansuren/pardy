export const colors = {
  blue: "#4154FC",
  pink: "#FF37BB",
  lightpink: "#FFA7E1",
  yellow: "#FFC163",
  magenta: "#B00495",
};

export function getGradientColors(index: number) {
  return index === 1
    ? { start: colors.pink, end: "#BF6DFF" }
    : index === 2
    ? { start: "#BF6DFF", end: "#7737FF" }
    : index === 3
    ? { start: "#7737FF", end: "#6D8DFF" }
    : { start: "#6D8DFF", end: "#4DA9FF" };
}
