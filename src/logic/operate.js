import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  switch (operation) {
    case '+':
      result += (Big(numberOne) + Big(numberTwo)).toString();
      break;
    case '-':
      result += (Big(numberOne) - Big(numberTwo)).toString();
      break;
    case 'x':
      result += (Big(numberOne) * Big(numberTwo)).toString();
      break;
    case '÷':
      if (numberTwo === '0') {
        result += 'Cannot divide by 0.';
      } else {
        result += (Big(numberOne) / Big(numberTwo)).toString();
      }
      break;
    default:
      result = 'Error';
  }
  return result;
};

export default operate;
