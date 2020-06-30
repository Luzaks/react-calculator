import operate from './operate';

const calculate = (object, buttonName) => {
  let { total, next, operation } = object;

  const parsingF = string => parseFloat(string);

  switch (buttonName) {
    case '+/-':
      operation = 'x';
      total = operate(parsingF(total), -1, operation);
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
          next = operate(parsingF(next), parsingF(total), operation);
          total = null;
        }
        next = total;
        total = null;
        operation = buttonName;
      } else {
        total = null;
        operation = buttonName;
      }
      break;
    case '%':
      operation = '÷';
      total = operate(parsingF(total), 100, operation);
      break;
    case '=':
      if (!total) {
        total = next;
        next = null;
        operation = buttonName;
      } else if (!next) {
        next = null;
        operation = buttonName;
      } else {
        total = operate(parsingF(next), total, operation);
        next = null;
        operation = null;
      }
      break;
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
    case '.':
      if (total) total += buttonName;
      else total = buttonName;
      break;
    default:
      total = 'Error';
      break;
  }
  return { total, next, operation };
};

export default calculate;
