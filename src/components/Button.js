import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { value } = this.props;
    return (
      <div className="button-item">
        {value}
      </div>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
};

Button.defaultProps = {
  value: 'button',
};

export default Button;
