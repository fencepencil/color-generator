import { colorIsLight, colorFromRandomRGB } from './color';
import { rgbToHex } from './colorConversion';
import { randomRGB } from './randomRGB';

const bodyEl = document.body;

export const bgColorChange = () => {
  const $h1s = document.querySelectorAll('h1');
  const rgbEl = document.getElementById('rgb');
  const hexEl = document.getElementById('hex');
  const bgRGB = randomRGB();
  const bgColorRGB = colorFromRandomRGB(bgRGB[0], bgRGB[1], bgRGB[2]);
  const textColorRGB = colorIsLight(bgRGB[0], bgRGB[1], bgRGB[2])
    ? '#22292c'
    : '#ffffff';

  const borderColorRGB = colorIsLight(bgRGB[0], bgRGB[1], bgRGB[2])
    ? 'rgba(34,41,44, 0.3)'
    : 'rgba(255,255,255, 0.3)';

  bodyEl.style.cssText = bgColorRGB + '; color: ' + textColorRGB;
  rgbEl.innerHTML = 'rgb(' + bgRGB[0] + ', ' + bgRGB[1] + ', ' + bgRGB[2] + ')';
  hexEl.innerHTML = rgbToHex(bgRGB[0], bgRGB[1], bgRGB[2]);
  [...$h1s].forEach(
    $h1 => ($h1.style.cssText = `border-color: ${borderColorRGB}`)
  );
};

bodyEl.addEventListener('keypress', bgColorChange);
