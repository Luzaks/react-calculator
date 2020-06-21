import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderButtons(name) {
    return (
      <Button value={name} />
    );
  }

  render() {
    return (
      <div className="button-panel-container">
        <div className="number-panel">
          <div className="number-row">
            {this.renderButtons('7')}
            {this.renderButtons('8')}
            {this.renderButtons('9')}
          </div>
          <div className="number-row">
            {this.renderButtons('4')}
            {this.renderButtons('5')}
            {this.renderButtons('6')}
          </div>
          <div className="number-row">
            {this.renderButtons('1')}
            {this.renderButtons('2')}
            {this.renderButtons('3')}
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
