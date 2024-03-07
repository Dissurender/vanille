import { useCanvasContext } from "../hooks/useCanvas";
import Wave from "../classes/Wave";
import { colorShift, generateColor } from "../helpers/Colors";
import { FC } from "react";

// TODO: Refactor to be able to use instantiate multiple waves

interface SineProps {
  width: number;
  height: number;
}

const Sine: FC<SineProps> = (props) => {
  const { context } = useCanvasContext();

  let time = 0;
  const waves = [
    new Wave( generateColor(), 2, 0.01, 0.015, 250),
    new Wave( generateColor(), 1, 0.02, 0.03, 200),
    new Wave( generateColor(), 3, 0.01, 0.02, 220),
    new Wave( generateColor(), 2.5, 0.02, 0.01, 215),
  ];

  const render = () => {
    context?.clearRect(0, 0, props.width, props.height);

    waves.forEach((wave) => {
      wave.draw(context!, props.width, props.height, time);
      wave.waveColor = colorShift(wave.waveColor);
    });

    // Reset time to prevent overflow
    if (time > 100000) time = 0;
    time += 1;

    requestAnimationFrame(render);
  };
  if (context) render();
  return null;
};

export default Sine;
