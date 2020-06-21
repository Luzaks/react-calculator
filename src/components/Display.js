import React from 'react';
import '../styles/Display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {result} = this.props;
    return (
      <div className="display-container">
        <p className="result-display">{result}</p>
      </div>
    );
  }
}

export default Display;
