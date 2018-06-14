export const colorIsLight = (r, g, b) => {
  let lightness = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lightness < 0.4;
};

export const colorFromRandomRGB = (r, b, g) => {
  return 'background-color: rgb(' + r + ',' + b + ',' + g + ');';
};
