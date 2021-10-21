import React from 'react';

export default class Hotbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ counter: this.state.counter + 1 }, () => console.log(this.state.counter));
  }

  render() {
    if (this.state.counter < 4) {
      return (<button onClick={this.handleClick} className='hot-button cold'>Hot Button</button>);
    } else if (this.state.counter < 7) {
      return (<button onClick={this.handleClick} className='hot-button cool'>Hot Button</button>);
    } else if (this.state.counter < 10) {
      return (<button onClick={this.handleClick} className='hot-button tepid'>Hot Button</button>);
    } else if (this.state.counter < 13) {
      return (<button onClick={this.handleClick} className='hot-button warm'>Hot Button</button>);
    } else if (this.state.counter < 16) {
      return (<button onClick={this.handleClick} className='hot-button hot'>Hot Button</button>);
    } else {
      return (<button onClick={this.handleClick} className='hot-button nuclear'>Hot Button</button>);
    }
  }
}
