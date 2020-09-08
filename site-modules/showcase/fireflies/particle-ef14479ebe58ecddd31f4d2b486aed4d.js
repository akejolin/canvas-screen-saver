export default class Particle {
  constructor(props) {
    this.x = Math.random() * props.ww;
    this.y = Math.random() * props.wh;
    this.dest = {
      x: props.x,
      y: props.y
    };
    this.originPosition = {
      x: props.x,
      y: props.y
    };
    this.vx = (Math.random() - 0.5) * 20;
    this.vy = (Math.random() - 0.5) * 20;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.05 + 0.94;
    this.color = `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a})`;
    this.radius = props.radius || Math.random() * 4 + 2;
    this.delete = false;
  }

  destroy(byWho = null) {
    this.delete = true;
  }

  delayedDestroy(milisec) {
    setTimeout(() => this.destroy(), milisec);
  }

  setNewTarget({
    x,
    y
  }) {
    this.dest = {
      x,
      y
    };
  }

  render(state) {
    const ctx = state.context;
    this.accX = (this.dest.x - this.x) / 1000;
    this.accY = (this.dest.y - this.y) / 1000;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }

}