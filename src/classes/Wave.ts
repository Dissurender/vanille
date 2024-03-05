class Wave {
  private color: number[]
  private vShift: number
  private hShift: number // hShift is used to offset the wave to appear unique
  private period: number
  private amplitude: number

  constructor(color: number[], hShift: number, vShift: number, period: number, amplitude: number) {
    this.color = color
    this.vShift = vShift
    this.hShift = hShift
    this.period = period
    this.amplitude = amplitude
  }

  public set waveColor(color: number[]) {
    this.color = color
  }

  public get waveColor(): number[] {
    return this.color
  }

  private createStroke = () => {
    const color = this.color

    return `rgba(${color[0] / 2}, ${color[1] / 2}, ${color[2] / 2}, 0.8)`
  }

  public draw = (
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    phase: number
  ): void => {
    context.beginPath()
    context.moveTo(0, height - 400 + Math.sin((phase + this.hShift)) * this.amplitude)

    for (let i = 0; i < width; i++) {
      const x = i * 2.5
      const y = Math.sin((i * this.period) - (phase + this.hShift)) * this.amplitude + this.vShift
      context.lineTo(x, height - 400 - y)
    }

    context.lineTo(width, height)
    
    context.strokeStyle = this.createStroke()
    context.lineWidth = 2
    context.stroke()

    context.closePath()
  }
}

export default Wave

// https://www.mathsisfun.com/algebra/amplitude-period-frequency-phase-shift.html