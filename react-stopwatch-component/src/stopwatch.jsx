import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, count: 0 };

    this.counter = this.counter.bind(this);
    this.startTime = this.startTime.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);

  }

  startTime() {
    this.setState({ isClicked: true }, () => {
      const timer = setInterval(() => {
        if (this.state.isClicked === true) {
          this.counter();
        } else {
          clearInterval(timer);
        }
      }, 1000);
    });
  }

  counter() {
    this.setState({ count: this.state.count + 1 });
  }

  stop() {
    this.setState({ isClicked: false });
  }

  reset() {
    if (this.state.isClicked === false) { this.setState({ count: 0 }); }
  }

  render() {
    if (this.state.isClicked === false) {
      return (<>
    <div className="column">
    <div onClick={this.reset} className='circle'>{this.state.count}</div>
    <i
      onClick={this.startTime}
      className='fas fa-play'>
    </i>
    </div>
    </>
      );
    } else {
      return (<>
    <div className="column">
    <div className='circle'>{this.state.count}</div>
    <i
      onClick={this.stop}
      className='fas fa-pause'>
    </i>
    </div>
    </>
      );
    }
  }
}
