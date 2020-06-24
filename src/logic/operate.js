const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  switch (operation) {
    case '+':
      result += Big(numberOne).plus(numberTwo).toString();
      break;
    case '-':
      result += Big(numberOne).minus(numberTwo).toString();
      break;
    case 'x':
      result += Big(numberOne).times(numberTwo).toString();
      break;
    case '÷':
      if (numberTwo === '0') {
        result += 'Cannot divide by 0.';
      } else {
        result += Big(numberOne).div(numberTwo).toString();
      }
      break;
    default:
      result = 'Error';
  }
  return result;
};

export default operate;
