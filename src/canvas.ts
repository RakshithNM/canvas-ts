import { Particle } from "./particle.js";
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

  clear(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground(): void {
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fill();
  }

  drawObjects(inObjects: Particle[]): void {
    for(let obj of inObjects) {
      obj.draw(this.context);
    }
  }

  updateObjects(inObjects: Particle[]): void {
    for(let obj of inObjects) {
      obj.update();
    }
  }

  deleteObjects(inObjects: Particle[]): void {
    for(let i = inObjects.length; i > 0; i--) {
      inObjects.splice(i, 1)
    }
  }
}
