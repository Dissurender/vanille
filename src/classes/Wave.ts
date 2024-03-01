class Wave {
  private waveLength: number[]
  private color: string

  constructor(waveLength: number[], color: string) {
    this.waveLength = waveLength
    this.color = color
  }

  public set waveColor(color: string) {
    this.color = color
  }

  public draw = (
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    frequency: number
  ): void => {
    context.beginPath()
    context.moveTo(0, height - 400 + Math.sin(-frequency) * 200)
    if (this.waveLength.length < 3) {
      return
    }
    for (let i = 0; i < width; i++) {
      const wave1 = Math.sin(i * this.waveLength[0] - frequency)

      context.lineTo(i * 2.5, height - 400 + wave1 * 200)
    }
    context.lineTo(width, height)
    context.strokeStyle = this.color
    context.lineWidth = 2
    context.stroke()
    // context.fillStyle = this.color
    // context.fill()
    context.closePath()
  }
}

export default Wave