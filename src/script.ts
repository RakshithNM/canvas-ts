import { Particle } from "./particle.js";
import { Canvas } from "./canvas.js";

let view: Canvas;
let particles: Particle[] = [];

const setup = () => {
  view = new Canvas("#canvas");
  requestAnimationFrame(draw);
};

const draw = () => {
  view.clear();
  view.drawBackground();
  const p = new Particle();
  particles.push(p);
  const toDelete = particles.filter((p) => p.faded());
  view.deleteObjects(toDelete);
  view.updateObjects(particles);
  view.drawObjects(particles);
  requestAnimationFrame(draw)
};

setup();