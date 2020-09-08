import React from '../../../web_modules/react-d5feeccd9551fb7f62a2e2573736736e.js';
import PropTypes from '../../../web_modules/prop-types-76f17b5f1ab0157dea4931c8b7a2f947.js';
import ParticlesProgram from './particles-program-7e51922d8b950a177bd674ef5369ba3b.js';
import { clearAllIntervals } from './interval-handler-c2a464ee22e041ce506d89f42f719423.js';

class _cls extends React.Component {
  constructor(props) {
    super();
    this.canvas = /*#__PURE__*/React.createRef();
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1
      },
      context: null,
      count: 0,
      mostActiveRepo: '',
      records: [],
      sinceYesterday: 0,
      week: 0
    };
    this.particles = [];
    this.run = this.run.bind(this);
  }

  componentWillMount() {
    this.handleResize(null, null);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.context !== this.state.context && prevState.context === null) {
      this.run();
    }
  } // -----------------------------------------------------


  componentDidMount() {
    const context = this.canvas.current.getContext('2d');
    this.setState({
      context
    });
  } // -----------------------------------------------------


  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    clearAllIntervals();
  }

  run() {
    clearAllIntervals();
    const context = this.state.context;
    context.save();
    context.scale(this.state.screen.ratio, this.state.screen.ratio); // Motion trail

    context.fillStyle = '#000000';
    context.globalAlpha = 0.4;
    context.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
    context.globalAlpha = 1;
    context.restore();
    requestAnimationFrame(() => this.update());
    window.addEventListener('resize', this.handleResize.bind(this, false));
    this.startProgram();
  } // -----------------------------------------------------


  handleResize(value, e) {
    const ratio = window.devicePixelRatio || 1;
    const width = window.innerWidth * ratio;
    const height = window.innerHeight * ratio;
    this.setState({
      screen: {
        width,
        height,
        ratio,
        size: width > 600 ? 'L' : 'S'
      }
    });
  } // -----------------------------------------------------


  update() {
    const context = this.state.context;
    context.save();
    this.updateObjects(this.particles, 'particles');
    context.restore(); // Next frame

    requestAnimationFrame(() => this.update());
  } // -----------------------------------------------------


  updateObjects(items, group) {
    let index = 0;

    for (let item of items) {
      if (item.delete) {
        this[group].splice(index, 1);
      } else {
        items[index].render(this.state);
      }

      index++;
    }
  } // -----------------------------------------------------


  startProgram() {
    const text = '😜';

    const _particlesProgram = new ParticlesProgram({
      size: 300,
      position: {
        x: Math.ceil(this.state.screen.width / 2),
        y: Math.ceil(this.state.screen.height / 2 - this.state.screen.height * 0.5)
      },
      create: this.createObject.bind(this),
      text,
      count: 2019,
      id: 'counter',
      ctx: this.state.context,
      screen: this.state.screen
    });

    _particlesProgram.init(this.state, text);

    this.createObject(_particlesProgram, 'particles');
  } // -----------------------------------------------------


  createObject(item, group) {
    this[group].push(item);
  } // -----------------------------------------------------


  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("canvas", {
      style: {
        display: 'block',
        backgroundColor: 'black',
        color: 'white',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: `100vw`,
        height: `100vh`
      },
      ref: this.canvas,
      width: this.state.screen.width,
      height: this.state.screen.height
    }));
  }

}

export default _cls;