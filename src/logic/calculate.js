import operate from './operate';

const calculate = (object, buttonName) => {
  let { total, next, operation } = object;

  const parsingInt = string => parseInt(string, 10);

  switch (buttonName) {
    case '+/-':
      operation = 'x';
      total = operate(parsingInt(total), -1, operation);
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case 'x':
    case '÷':
    case '+':
    case '-':
      if (total) {
        if (next && operation) {
          total = operate(parsingInt(next), parsingInt(total), operation);
          next = null;
        }
        next = total;
        total = null;
        operation = buttonName;
      } else {
        total = '0';
        operation = buttonName;
      }
      break;
    case '%':
      operation = '÷';
      total = operate(parsingInt(total), 100, operation);
      break;
    case '=':
      return total;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (total && total !== '0') total += buttonName;
      else total = buttonName;
      break;
    default:
      total = 'Error';
      break;
  }
  return { total, next, operation };
};

export default calculate;
