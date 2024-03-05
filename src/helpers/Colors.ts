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