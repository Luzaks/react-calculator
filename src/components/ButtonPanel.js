import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const reColor = 'transparent';
  const handleClick = clickedBtn => clickHandler(clickedBtn);
  return (
    <div className="button-panel-container">
      <div className="number-panel">
        <div className="number-row">
          <Button clickHandler={handleClick} value="AC" color={reColor} />
          <Button clickHandler={handleClick} value="+/-" color={reColor} />
          <Button clickHandler={handleClick} value="%" color={reColor} />
          <Button clickHandler={handleClick} value="÷" />
        </div>
        <div className="number-row">
          <Button clickHandler={handleClick} value="7" color={reColor} />
          <Button clickHandler={handleClick} value="8" color={reColor} />
          <Button clickHandler={handleClick} value="9" color={reColor} />
          <Button clickHandler={handleClick} value="x" />
        </div>
        <div className="number-row">
          <Button clickHandler={handleClick} value="4" color={reColor} />
          <Button clickHandler={handleClick} value="5" color={reColor} />
          <Button clickHandler={handleClick} value="6" color={reColor} />
          <Button clickHandler={handleClick} value="-" />
        </div>
        <div className="number-row">
          <Button clickHandler={handleClick} value="1" color={reColor} />
          <Button clickHandler={handleClick} value="2" color={reColor} />
          <Button clickHandler={handleClick} value="3" color={reColor} />
          <Button clickHandler={handleClick} value="+" />
        </div>
        <div className="number-row">
          <Button clickHandler={handleClick} value="0" color={reColor} wide />
          <Button clickHandler={handleClick} value="." color={reColor} />
          <Button clickHandler={handleClick} value="=" />
        </div>
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
