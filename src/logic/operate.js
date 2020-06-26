import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  const a = new Big(numberOne);
  const b = new Big(numberTwo);

  switch (operation) {
    case '+':
      result += (a.plus(b)).toString();
      break;
    case '-':
      result += (a.minus(b)).toString();
      break;
    case 'x':
      result += (a.times(b)).toString();
      break;
    case '÷':
      if (numberTwo === '0') {
        result += 'It\'s not possible to divide by zero.';
      } else {
        result += (a.div(b)).toString();
      }
      break;
    default:
      result = 'Error';
  }
  return result;
};

export default operate;
