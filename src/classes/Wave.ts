class Wave {
  private color: number[]
  private vShift: number
  private period: number
  private amplitude: number

  constructor(color: number[], vShift: number, period: number, amplitude: number) {
    this.color = color
    this.vShift = vShift
    this.period = period
    this.amplitude = amplitude
  }

  public set waveColor(color: number[]) {
    this.color = color
  }

  public get waveColor(): number[] {
    return this.color
  }

  private formatColor = (color: number[]): string => {
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`
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
    context.moveTo(0, height - 400 + Math.sin(phase) * this.amplitude)

    for (let i = 0; i < width; i++) {
      const y = Math.sin((i * this.period) + phase)
      context.lineTo(i * 2, height - 400 + y * this.amplitude)
    }
    
    context.lineTo(width, height)
    context.strokeStyle = this.createStroke()
    context.lineWidth = 2
    context.stroke()
    // context.fillStyle = this.formatColor(this.color)
    // context.fill()
    context.closePath()
  }
}

export default Wave