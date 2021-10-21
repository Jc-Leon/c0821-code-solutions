import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const isClicked = this.state.isClicked;
    return (<label className="switch">
      <span onClick={this.handleClick} className={isClicked ? 'sliderClicked' : 'slider'}><div className='status'>{isClicked ? 'ON' : 'OFF'}</div></span>
      </label>
    );
  }
}
