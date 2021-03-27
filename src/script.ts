import { Ball } from "./ball.js";
import { Canvas } from "./canvas.js";

const view = new Canvas('#canvas');
const ball = new Ball();

view.drawBackground();
view.drawObject(ball);