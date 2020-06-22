import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderButtons(name, style) {
    return (
      <Button
        value={name}
        classStyle={style}
        event={this.state}
      />
    );
  }

  render() {
    return (
      <div className="button-panel-container">
        <div className="number-panel">
          <div className="number-row">
            {this.renderButtons('AC')}
            {this.renderButtons('+/-')}
            {this.renderButtons('%')}
            {this.renderButtons('÷', 'button-item reColored-button')}
          </div>
          <div className="number-row">
            {this.renderButtons('7')}
            {this.renderButtons('8')}
            {this.renderButtons('9')}
            {this.renderButtons('x', 'button-item reColored-button')}
          </div>
          <div className="number-row">
            {this.renderButtons('4')}
            {this.renderButtons('5')}
            {this.renderButtons('6')}
            {this.renderButtons('-', 'button-item reColored-button')}
          </div>
          <div className="number-row">
            {this.renderButtons('1')}
            {this.renderButtons('2')}
            {this.renderButtons('3')}
            {this.renderButtons('+', 'button-item reColored-button')}
          </div>
          <div className="number-row">
            {this.renderButtons('0', 'button-item reSize-button')}
            {this.renderButtons('.')}
            {this.renderButtons('=', 'button-item reColored-button')}
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
