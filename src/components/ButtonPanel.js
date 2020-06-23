import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderButtons(name, style, width) {
    return (
      <Button
        value={name}
        color={style}
        wide={width}
        event={this.state}
      />
    );
  }

  render() {
    const reColor = 'transparent';
    return (
      <div className="button-panel-container">
        <div className="number-panel">
          <div className="number-row">
            {this.renderButtons('AC', `${reColor}`)}
            {this.renderButtons('+/-', `${reColor}`)}
            {this.renderButtons('%', `${reColor}`)}
            {this.renderButtons('÷')}
          </div>
          <div className="number-row">
            {this.renderButtons('7', `${reColor}`)}
            {this.renderButtons('8', `${reColor}`)}
            {this.renderButtons('9', `${reColor}`)}
            {this.renderButtons('x')}
          </div>
          <div className="number-row">
            {this.renderButtons('4', `${reColor}`)}
            {this.renderButtons('5', `${reColor}`)}
            {this.renderButtons('6', `${reColor}`)}
            {this.renderButtons('-')}
          </div>
          <div className="number-row">
            {this.renderButtons('1', `${reColor}`)}
            {this.renderButtons('2', `${reColor}`)}
            {this.renderButtons('3', `${reColor}`)}
            {this.renderButtons('+')}
          </div>
          <div className="number-row">
            {this.renderButtons('0', `${reColor}`, true)}
            {this.renderButtons('.', `${reColor}`)}
            {this.renderButtons('=')}
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
