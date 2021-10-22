import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ isClicked: !this.state.isClicked }, () => console.log('this is working'));
  }

  render() {
    const isClicked = this.state.isClicked;
    return (<div className='menu'>
      <div><i onClick={this.handleClick} className="fas fa-bars"></i></div>
            <div onClick={this.handleClick}className={isClicked ? 'blackout' : 'blackout hidden'}></div>

  <div className={isClicked ? 'sidebar' : 'sidebar hidden'}>
    <h2 className='padding-left'>Choose a game</h2>
    <p onClick={this.handleClick}>The Legend of Zelda</p>
    <p onClick={this.handleClick}>A Link to the Past</p>
    <p onClick={this.handleClick}>Ocarina of Time</p>
    <p onClick={this.handleClick}>The Wind Waker</p>
    <p onClick={this.handleClick}>Breath of the Wild</p>
    </div>
    </div>

    );
  }
}
