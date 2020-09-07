import Particle from './particle'
import { randomNumBetween } from './helpers'
import {
  addInterval as aIntv,
  removeInterval,
} from '../game-interval-handler'


const wait = ms => new Promise(
  resolve => setTimeout(() => {
    clearTimeout()
    resolve()
  }, ms)
)

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export default class StickyParticlesProgram {
  constructor(props) {

    this.particles = []
    this.preparticles = []
    this.text = props.text
    this.type = 'text'
    this.hasStarted = false
  }
  getFont(width) {
    const fontBase = 1000
    const fontSize = 200
    var ratio = fontSize / fontBase   // calc ratio
    var size = width * ratio   // get font size based on current width
    return (size | 0) + 'px BlocketSans-Bold' // set font
  }

  async drawText(state) {

    const ctx = state.context
    let { width, height } = state.screen
    return new Promise((resolve) => {
      ctx.save()
      ctx.clearRect(0, 0, width, height)
      ctx.font = this.getFont(width)
      ctx.textAlign = "center";
      ctx.fillText(this.text, width/2, height/2 + 250/2);
      ctx.restore()
      resolve()
    })
  }

  async init(state, type='text') {
    const ctx = state.context

    await this.drawText(state)

    let { width, height } = state.screen

    const imageData  = await ctx.getImageData(0, 0, width, height)

    const data = imageData.data
    ctx.clearRect(0, 0, width, height)
    ctx.globalCompositeOperation = "screen"
    const preparticles = []
    this.particles = []

    const getColorIndicesForCoord = (x, y, width) => {
      const red = y * (width * 4) + x * 4;
      return [red, red + 1, red + 2, red + 3];
    };

    for (var i=0; i < width; i += Math.round(width/150)) {
      for (var j=0; j < height; j += Math.round(width/150)) {
        const colorIndices = getColorIndicesForCoord(i, j, width);
        const [redIndex, greenIndex, blueIndex, alphaIndex] = colorIndices;
        if (data[ ((i + j * width) * 4) + 3] > 150) {
          preparticles.push(new Particle({x: i, y: j, ww: width, wh: height, color: {r: data[redIndex], g: data[greenIndex], b: data[blueIndex], a: data[alphaIndex]}}))
        }
      }
    }

    this.preparticles = preparticles
    this.startAddParticlesToRender(state)

    ctx.restore()
  }

  // ---------------------------------------------------
  async startAddParticlesToRender(state) {
    let { particles, preparticles } = this
    preparticles = shuffle(preparticles)

    let i = preparticles.length
    let maxdelay = 8000


    while (i > 0) {
      i--
      maxdelay = maxdelay > 0 ? maxdelay - 1 : 0
      this.delay(randomNumBetween(0, maxdelay), () => {
        particles.push(preparticles[i])
      })
    }

    wait(10000).then(() => {
      //this.startRemoveParticlesFromRender(state)
      this.newAction(state)
    })

  }

  delay(ms, callback) {
    setTimeout(callback(), ms)
  }
  // ---------------------------------------------------
  newAction(state) {

    let particles = this.particles
    let pi = particles.length

    const moveToNewTarget = async () => {

      particles = shuffle(particles)

      const approxFontSize = Math.round(250/2)
      const deltaX = randomNumBetween(Math.round(0 - ((state.screen.width/2) + approxFontSize)), Math.round((state.screen.width/2) - approxFontSize))
      const deltaY = randomNumBetween(Math.round(0 - ((state.screen.height/2) - approxFontSize)), Math.round((state.screen.height/2) - approxFontSize))

      const promiseShape = (i, d) => new Promise(resolve => {
        particles[i].setNewTarget({
          x: particles[i].originPosition.x + deltaX,
          y: particles[i].originPosition.y + deltaY,
        })
        setTimeout(() => resolve(), randomNumBetween(0, d))
      })
      const promiseMove = (i, d) => new Promise(resolve => {
        particles[i].setNewTarget({
          x: particles[i].originPosition.x + randomNumBetween(-deltaX, deltaX),
          y: particles[i].originPosition.y + randomNumBetween(-deltaY, deltaY),
        })
        setTimeout(() => resolve(), randomNumBetween(0, d))
      })

      let maxdelay = 8000

      removeInterval('time-to-move')
      aIntv('time-to-move', 500, () => {
      console.log('Time to move')
        removeInterval('time-to-move')
        pi = particles.length
        while (pi > 0) {
          pi = pi - 1
          maxdelay = maxdelay > 0 ? maxdelay - 1 : 0
          promiseMove(pi, maxdelay)
        }
      })
      removeInterval('time-to-shape')
      aIntv('time-to-shape', 1000, () => {
        console.log('Time to shape')
        removeInterval('time-to-shape')
        pi = particles.length
        while (pi > 0) {
          pi = pi - 1
          maxdelay = maxdelay > 0 ? maxdelay - 1 : 0
          promiseShape(pi, maxdelay)
        }
      })

      removeInterval('time-for-next-round')
      aIntv('time-for-next-round', 15000, () => {
        removeInterval('time-for-next-round')
        console.log('Time for next round')
        moveToNewTarget()
      })
    }
    moveToNewTarget()
  }

  // ---------------------------------------------------
  async startRemoveParticlesFromRender(state) {
    removeInterval('shake_stickyParticles')

    let particles = this.particles
    let pi = particles.length

    particles = shuffle(particles)
    const spreadOut = i => new Promise(resolve => {
        particles[i].setNewTarget({
          x: state.screen.width*3,
          y: randomNumBetween(0, state.screen.height),
        })
        particles[i].delayedDestroy(randomNumBetween(0, 3000))
        resolve()
      }
    )

    let maxdelay = 8000
    while (pi > 0) {
      pi--
      maxdelay = maxdelay > 0 ? maxdelay - 1 : 0
      this.delay(randomNumBetween(0, maxdelay), () => {
        spreadOut(pi)
      })
    }
    await wait(2000)
    this.finished(state)
  }
  // ---------------------------------------------------
  finished(state) {
    removeInterval('wait_for_reloading')
    aIntv('wait_for_reloading', 500, () => {
      if (this.particles.length < 1) {
        removeInterval('wait_for_reloading')
        this.init(state)
      }
    })
    return null
  }
  // ---------------------------------------------------
  render(state) {
    const { width, height } = state.screen
    const ctx = state.context
    ctx.clearRect(0, 0, width, height)

    const { particles } = this
    var ip = particles.length
    while (ip > 0 ) {
      ip--
      if (particles[ip].delete === true) {
        particles.splice(ip, 1)
      } else {
        particles[ip].render(state)
      }
    }
  }
}
