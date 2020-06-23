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
    const { value, color, wide } = this.props;
    return (
      <button className={color} style={`width: ${wide};`} type="submit">
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  value: '0',
  color: 'button-item',
  wide: '25%',
};

export default Button;
