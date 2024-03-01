import { useCanvasContext } from "../hooks/useCanvas";
import useDims from "../hooks/useDim"
import Wave from "../classes/Wave";

const Sine = () => {
  const { context } = useCanvasContext();
  const { width, height } = useDims();

  let frequency = 0.02;
  let timer = 1;
  const waves = [
    new Wave([0.01, 0.03, 0.04], generateColor()),
    new Wave([0.03, 0.04, 0.05], generateColor()),
    new Wave([0.04, 0.05, 0.06], generateColor()),
  ];

  const render = () => {
    context?.clearRect(0, 0, width, height);
    
    waves.forEach((wave) => {
      wave.draw(context, width, height, frequency);
    })

    if (timer === 100) {
      timer = 1;
    }
    timer++;
    frequency += 0.02;
    requestAnimationFrame(render);
  };
  if (context) render();
  return null;
};

function generateColor() {
  const red = 255 - Math.random() * 255;
  const green = 255 - Math.random() * 255;
  const blue = 255 - Math.random() * 255;

  return `rgba(${red}, ${green}, ${blue}, 0.5)`;
}

export default Sine;
