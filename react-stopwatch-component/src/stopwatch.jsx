import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, count: 0 };

    this.handleClick = this.handleClick.bind(this);
    this.startTime = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(e) {
    this.setState({ isClicked: !this.state.isClicked });
  }

  startTime() {
    this.setState({ count: this.state.count + 1 });
  }

  reset() {
    this.setState({ count: this.state.count });
  }

  render() {
    const isClicked = this.state.isClicked;
    return (<>
    <div className="column">
    <div className='circle'>0</div>
    <i
      onClick={this.handleClick}
      className={isClicked ? 'fas fa-pause' : 'fas fa-play'}>
    </i>
    </div>
    </>
    );
  }
}
