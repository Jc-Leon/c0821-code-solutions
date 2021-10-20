import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    return (<button onClick={this.handleClick}>{isClicked && 'Thanks!' } {!isClicked && 'Click Me!'} </button>);
  }
}

ReactDOM.render(<CustomButton />, document.getElementById('root'));
