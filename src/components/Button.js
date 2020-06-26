import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({
  value, color, wide, clickHandler,
}) => {
  let width = '25';
  if (wide) {
    width = parseInt(width, 10) * 2;
  }
  return (
    <button className="button-item" onClick={() => clickHandler(value)} style={{ backgroundColor: `${color}`, width: `${width}%` }} type="submit">
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  value: '0',
  color: '#f5913e',
  wide: false,
};

export default Button;
