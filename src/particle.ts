import { Vector } from "./vector.js";
import { getRandom } from "./utilities.js";
import { ALPHA, RADIUS } from "./constants.js";

export class Particle {
  private position: Vector;
  private velocity: Vector;
  private alpha: number;
  constructor() {
    this.position = { x: window.innerWidth/2, y: window.innerHeight - RADIUS }
    this.velocity = { x: getRandom(-1, 1), y: getRandom(-1, 1)}
    this.alpha = ALPHA;
  }

  draw(inContext: CanvasRenderingContext2D): void {
    inContext.beginPath();
    inContext.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    inContext.arc(this.position.x, this.position.y, RADIUS, 0, 2 * Math.PI, false);
    inContext.fill();
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.alpha -= 0.01;
  }

  faded(): boolean {
    return this.alpha < 0;
  }
}