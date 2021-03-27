import { Ball } from "./ball.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants.js";

export class Canvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(selector: string) {
    this.canvas = document.querySelector(selector) as HTMLCanvasElement; 
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
  }

  drawBackground(): void {
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawObject(inObject: Ball): void {
    this.context.beginPath();
    this.context.fillStyle = "#ff0000";
    this.context.arc(inObject.position.x, inObject.position.y, 30, 0, 2 * Math.PI, false);
    this.context.fill();
  }
}
