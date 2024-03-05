interface Color extends Array<number> {
  0: number;
  1: number;
  2: number;
}

// Generate a random RGB color
export function generateColor(): Color {
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();

  return [red, green, blue];
}

// Generate a random color value
export function randomColor(): number {
  return 255 - Math.random() * 200;
}
// Shift the color of the wave over time
export function colorShift(wave: number[]) {
  let red = wave[0];
  let green = wave[1];
  let blue = wave[2];

  // Randomly decide whether to increase or decrease the color values
  const check = Math.random() > 0.5;

  // Shift the color values
  red = check ? red + 2 : red - 2;
  green = check ? green + 1 : green - 1;
  blue = check ? blue + 2 : blue - 2;

  // Ensure the color values are within the range of 0-255
  if (red > 255) red = 254;
  if (red < 0) red = 1;

  if (green > 255) green = 254;
  if (green < 0) green = 1;

  if (blue > 255) blue = 254;
  if (blue < 0) blue = 1;

  return [red, green, blue];
}