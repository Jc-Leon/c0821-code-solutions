import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataView: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.getAttribute('data-view') === this.state.dataView) {
      this.setState({ dataView: '' });
    } else {
      this.setState({ dataView: e.target.getAttribute('data-view') });

    }
  }

  render() {
    const isClicked = this.state.dataView;
    return (
    <div className='border'>
      {this.props.languages.map(language => {
        return (
          <div key={language.name}>
            <h1 onClick={this.handleClick} className='title' data-view={language.name}>{language.name}</h1>
            <p className={isClicked === language.name ? 'content' : 'content hidden'}>{language.content}</p>
          </div>
        );
      })}
    </div>
    );
  }
}
