import { randomNumBetween } from './helpers'

export default class Particle {
  constructor(props) {
    this.x =  Math.random() * props.ww
    this.y =  Math.random() * props.wh
    this.dest = {
      x : props.x,
      y: props.y
    }
    this.originPosition = {
      x : props.x,
      y: props.y
    }
    this.r =  Math.random() * 4 + 2
    this.vx = (Math.random() - 0.5) * 20
    this.vy = (Math.random() - 0.5) * 20
    this.accX = 0
    this.accY = 0
    this.friction = Math.random() * 0.05 + 0.94
    this.isWithinTarget = false
    /*
    this.colors = [
      '#fff7ca',
      '#fff',
      '#ffbc82',
      '#fff',
      '#fff',
      '#fff',
      '#ffd930',
      '#fff',
      '#ffaf04',
      '#fff',
    ]
    */
   
    this.color = `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a})`    //this.colors[Math.round(randomNumBetween(0,4))]
    this.radius = 1
    this.mouse = {
      x: 0,
      y: 0,
    }
    this.direction = {
      x: 0,
      y: 0,
    }
    this.delete = false
    //this.onTarget = props.onTarget
  }
  shake(direction) {
    this.direction = direction
  }

  destroy(byWho=null) {
    this.delete = true;
  }
  delayedDestroy(milisec) {
    setTimeout(() => this.destroy(), milisec)
  }
  setNewTarget({ x, y }) {
    this.dest = { x, y, }
  }

  render(state) {
    const ctx = state.context
    if (this.direction.x !== 0) {
      if (this.direction.x > 0 ) {
        this.x++
        this.direction.x--
      } else {
        this.x--
        this.direction.x++
      }
    }
    if (this.direction.y !== 0) {
      if (this.direction.y > 0) {
        this.y++
        this.direction.y--
      } else {
        this.y--
        this.direction.y++
      }
    }


    this.accX = (this.dest.x - this.x) / 1000
    this.accY = (this.dest.y - this.y) / 1000
    this.vx += this.accX
    this.vy += this.accY
    this.vx *= this.friction
    this.vy *= this.friction

    this.x += this.vx
    this.y +=  this.vy

    //const gradient = ctx.createRadialGradient(0, 0, 0, 1, 1, this.r )
    //gradient.addColorStop(0.2, this.color)
    //gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false)
    ctx.fill()
    ctx.closePath()

    const a = this.x - this.mouse.x
    const b = this.y - this.mouse.y
    /*
    const distance = Math.sqrt( a * a + b * b )
    if (distance < (this.radius * 70)) {
      this.accX = (this.x - this.mouse.x) / 100
      this.accY = (this.y - this.mouse.y) / 100
      this.vx += this.accX
      this.vy += this.accY
    }
    */


    if (this.x > this.dest.x - 10 && this.x < this.dest.x + 10 &&
      this.y > this.dest.y - 10 && this.y < this.dest.y + 10 ) {
      this.isWithinTarget = true
    } else {
      this.isWithinTarget = false
    }
  }
}
