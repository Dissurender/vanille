import { useRef, FC, useEffect, useState } from "react";

import { CanvasContext } from "../hooks/useCanvas";
import useDims from "../hooks/useDim";
import Sine from "./Sine";

const Canvas: FC<HTMLCanvasElement> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useDims();

  const [context, setContext] = useState<
    CanvasRenderingContext2D | undefined
  >();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (ctx) setContext(ctx);
  }, []);

  return (
    <>
      <CanvasContext.Provider value={{ context: context }}>
        <canvas
          id="main--canvas"
          role="canvas"
          ref={canvasRef}
          width={width}
          height={height}
        ></canvas>
        <Sine width={width} height={height} />
      </CanvasContext.Provider>
    </>
  );
};

export default Canvas;
