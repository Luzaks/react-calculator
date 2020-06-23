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
    const defStyle = 'button-item';
    const transparent = 'reColored-button';
    return (
      <div className="button-panel-container">
        <div className="number-panel">
          <div className="number-row">
            {this.renderButtons('AC', `${defStyle} ${transparent}`)}
            {this.renderButtons('+/-', `${defStyle} ${transparent}`)}
            {this.renderButtons('%', `${defStyle} ${transparent}`)}
            {this.renderButtons('÷')}
          </div>
          <div className="number-row">
            {this.renderButtons('7', `${defStyle} ${transparent}`)}
            {this.renderButtons('8', `${defStyle} ${transparent}`)}
            {this.renderButtons('9', `${defStyle} ${transparent}`)}
            {this.renderButtons('x')}
          </div>
          <div className="number-row">
            {this.renderButtons('4', `${defStyle} ${transparent}`)}
            {this.renderButtons('5', `${defStyle} ${transparent}`)}
            {this.renderButtons('6', `${defStyle} ${transparent}`)}
            {this.renderButtons('-')}
          </div>
          <div className="number-row">
            {this.renderButtons('1', `${defStyle} ${transparent}`)}
            {this.renderButtons('2', `${defStyle} ${transparent}`)}
            {this.renderButtons('3', `${defStyle} ${transparent}`)}
            {this.renderButtons('+')}
          </div>
          <div className="number-row">
            {this.renderButtons('0', `${defStyle} ${transparent}`, '50%')}
            {this.renderButtons('.', `${defStyle} ${transparent}`)}
            {this.renderButtons('=')}
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
