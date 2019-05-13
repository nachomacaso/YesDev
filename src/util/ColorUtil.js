export const getHue = (value, min, max) => `hsl(${(110 * (value - min)) / (max - min)},75%,65%)`;
