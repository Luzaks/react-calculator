import operate from './operate';

const calculate = (object, buttonName) => {
  let { total, next, operation } = object;

  const parsingInt = string => parseInt(string, 10);

  switch (buttonName) {
    case '+/-':
      operation = '÷';
      total = operate(parsingInt(total), -1, operation);
      next = operate(parsingInt(next), -1, operation);
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '=':
    case 'x':
    case '÷':
    case '+':
    case '-':
      operation = buttonName;
      total = operate(parsingInt(total), parsingInt(next), operation);
      break;
    case '%':
      operation = '÷';
      total = operate(parsingInt(total), 100, operation);
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
      if (total && total !== '0') total += buttonName;
      else total = buttonName;
      break;
    default:
      total = 'Not a number';
      break;
  }
  return { total, next, operation };
};

export default calculate;
