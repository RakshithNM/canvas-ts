import { Vector } from "vector.js";

export class Ball {
  public position: Vector;
  constructor() {
    this.position = { x: window.innerWidth/2, y: window.innerHeight/2 }
  }
}