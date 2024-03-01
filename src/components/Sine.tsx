import { useCanvasContext } from "../hooks/useCanvas";
import useDims from "../hooks/useDim";
import Wave from "../classes/Wave";

const Sine = () => {
  const { context } = useCanvasContext();
  const { width, height } = useDims();

  let phase = 0;
  let time = 0;
  const waves = [
    new Wave(generateColor(), 0.01, 0.015, 250),
    new Wave(generateColor(), 0.02, 0.02, 200),
    new Wave(generateColor(), 0.01, 0.015, 220),
    new Wave(generateColor(), 0.02, 0.01, 215),
  ];

  const render = () => {
    context?.clearRect(0, 0, width, height);

    waves.forEach((wave) => {
      wave.draw(context!, width, height, phase);
      colorShift(wave);
    });

    if (time > 100) {
      time = 0;
    }
    time += 1;

    if (phase > 2 * Math.PI) {
      phase = 0;
    }
    phase += 0.03;

    requestAnimationFrame(render);
  };
  if (context) render();
  return null;
};

function generateColor() {
  const red = 255 - Math.random() * 200;
  const green = 255 - Math.random() * 200;
  const blue = 255 - Math.random() * 200;

  return [red, green, blue];
}

function colorShift(wave: Wave) {
  const currentColor = wave.waveColor;
  let red = currentColor[0];
  let green = currentColor[1];
  let blue = currentColor[2];

  const check = Math.random() * 100 > 50;

  red = check ? red + 2 : red - 2;
  green = check ? green + 1 : green - 1;
  blue = check ? blue + 2 : blue - 2;

  if (red > 255) red = 254;
  if (red < 0) red = 1;
  if (green > 255) green = 254;
  if (green < 0) green = 1;
  if (blue > 255) blue = 254;
  if (blue < 0) blue = 1;

  wave.waveColor = [red, green, blue];
}

export default Sine;
