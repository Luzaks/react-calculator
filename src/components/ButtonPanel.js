import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const reColor = 'transparent';
  return (
    <div className="button-panel-container">
      <div className="number-panel">
        <div className="number-row">
          <Button handleClick={clickHandler} value="AC" color={reColor} />
          <Button handleClick={clickHandler} value="+/-" color={reColor} />
          <Button handleClick={clickHandler} value="%" color={reColor} />
          <Button handleClick={clickHandler} value="÷" />
        </div>
        <div className="number-row">
          <Button handleClick={clickHandler} value="7" color={reColor} />
          <Button handleClick={clickHandler} value="8" color={reColor} />
          <Button handleClick={clickHandler} value="9" color={reColor} />
          <Button handleClick={clickHandler} value="x" />
        </div>
        <div className="number-row">
          <Button handleClick={clickHandler} value="4" color={reColor} />
          <Button handleClick={clickHandler} value="5" color={reColor} />
          <Button handleClick={clickHandler} value="6" color={reColor} />
          <Button handleClick={clickHandler} value="-" />
        </div>
        <div className="number-row">
          <Button handleClick={clickHandler} value="1" color={reColor} />
          <Button handleClick={clickHandler} value="2" color={reColor} />
          <Button handleClick={clickHandler} value="3" color={reColor} />
          <Button handleClick={clickHandler} value="+" />
        </div>
        <div className="number-row">
          <Button handleClick={clickHandler} value="0" color={reColor} wide />
          <Button handleClick={clickHandler} value="." color={reColor} />
          <Button handleClick={clickHandler} value="=" />
        </div>
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
